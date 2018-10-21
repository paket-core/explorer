(function(){
    'use strict';
    //const ROUTER = 'https://route.paket.global/v3/';
    const ROUTER = 'http://localhost:5000/v3/';
    const TILE_PROVIDER = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    const TILE_ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    const TILE_SETTINGS = {
        maxZoom: 19,
        minZoom: 2,
        attribution: TILE_ATTRIBUTION,
    };
    const HEATMAP_SETTINGS = {
        radius: 50,
        maxZoom: 17,
        max: 1,
        minOpacity: 0.3,
        blur: 40,
        gradient: {0.2: 'gold', 0.4: 'orange', 1: 'OrangeRed'},
    };
    const RED_ICON = {
        iconUrl: 'red_location.png',
        iconSize: [38, 38],
        iconAnchor: [22, 37],
        popupAnchor: [-3, -38],
    };
    const ORANGE_ICON = {
        iconUrl: 'orange_location.png',
        iconSize: [38, 38],
        iconAnchor: [22, 37],
        popupAnchor: [-3, -38],
    };
    const GREEN_ICON = {
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    };
    let tiles, redIcon, orangeIcon, greenIcon;
    window.paket = {};

    function initMap(){
        let heatmap, heat;
        tiles = L.tileLayer(TILE_PROVIDER, TILE_SETTINGS);
        redIcon = L.icon(RED_ICON);
        orangeIcon = L.icon(ORANGE_ICON);
        greenIcon = new L.Icon(GREEN_ICON);
        heatmap = L.map('heatmap').setView([32.06, 34.77], 8).addLayer(tiles);
        heat = L.heatLayer([], HEATMAP_SETTINGS).addTo(heatmap);
        L.control.scale({imperial: false}).addTo(heatmap);
        return heat;
    }

    function twodigitize(number){
        if(number < 10){
            number = '0' + number;
        }
        return number;
    }

    function formatDatetime(datetime){
        return (
            ('' + datetime.getFullYear()).substr(2) + '/' +
            twodigitize(datetime.getMonth()) + '/' +
            twodigitize(datetime.getDay()) + ' ' +
            twodigitize(datetime.getHours()) + ':' +
            twodigitize(datetime.getMinutes()) + ':' +
            twodigitize(datetime.getSeconds())
        );
    }

    function dateFromRFC1123(rfc){
        return formatDatetime(new Date(Date.parse(rfc)));
    }

    function addPackageRow(pckg, packageTable){
        $(packageTable.row.add([
            pckg.short_package_id, pckg.status, pckg.description, pckg.to_address,
            dateFromRFC1123(pckg.launch_date), dateFromRFC1123(pckg.events[pckg.events.length - 1].timestamp),
        ]).draw(true).nodes()[0]).addClass('package-' + pckg.status.replace(' ', '-')).click(function(){
            showPackageDetails(pckg);
        });
    }

    function callRouter(endpoint, data, callback, fail){
        let formData = new FormData();
        $.each(data, function(key, value){
            formData.append(key, value);
        });
        $.ajax({
            type: 'POST',
            url: ROUTER + endpoint,
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function(result){
                if(callback){
                    callback(result);
                }
            },
            error: function(result){
                console.error(result);
                if(fail){
                    fail(result);
                }
            }
        });
    }

    function getEvents(callback){
        callRouter('events', {max_events_num: 10000}, function(result){
            callback(result.events, result.package_event_types);
        });
    }

    function getPackage(escrow_pubkey, callback){
        callRouter('package', {escrow_pubkey: escrow_pubkey}, function(result){
            callback(result.package);
        });
    }

    function fillPackageStats(package_event_types){
        let enroute = 0;
        let received = 0;
        $.each(package_event_types, function(package_id, event_types){
            if('received' in event_types){
                received++;
                return true;
            }
            if('expired' in event_types){
                return true;
            }
            enroute++;
        });
        $('#enroutePackages').text(enroute);
        $('#receivedPackages').text(received);
        $('#totalPackages').text(Object.keys(package_event_types).length);
    }

    function fillUserStats(events){
        let activeUsers = [];
        let now = new Date();
        $.each(events, function(eventIndex, event){
            if(
                !(event.user_pubkey in activeUsers) &&
                now - new Date(Date.parse(event.timestamp)) < 24 * 60 * 60 * 1000
            ){
                activeUsers.push(event.user_pubkey);
            }
        });
        $('#activeUsers').text(activeUsers.length);
    }

    function fillEventsTable(events){
        let eventTable = $('#packageDetails tbody');
        eventTable.find('tr').remove();
        $.each(events, function(eventIndex, event){
            console.log(event);
            eventTable.append('<tr>' +
                '<th scope="row">' + eventIndex + '</th>' +
                '<td>' + event.event_type + '</td>' +
                '<td>' + event.location + '</td>' +
                '<td>' + event.timestamp + '</td>' +
                '<td>' + event.user_pubkey + '</td>' +
                '<td>' + JSON.stringify(JSON.parse(event.kwargs), undefined, 2) + '</td>' +
            '</tr>');
        });
    }

    function showPackageDetails(pckg){
        $('#name').text(pckg.short_package_id);
        $('#fullEscrowPubkey').text(pckg.escrow_pubkey);
        $('#status').text(pckg.status);
        $('#pckgdesc').text(pckg.description);
        $('#explorerUrl').attr('href', pckg.blockchain_url);
        $('#deadline').text(formatDatetime(new Date(pckg.deadline * 1000)));
        $('#packageDetails #img').attr('src', pckg.photo);
        fillEventsTable(pckg.events);
        $('#packageDetails').show();
    }


//        let marker;
//// Reset map.
//        if(mapOnPackageDetailsModal){
//            mapOnPackageDetailsModal.remove();
//        }
//        mapOnPackageDetailsModal = L.map('map').setView([0, 0], 1).addLayer(tiles);
//        L.control.scale({imperial: false}).addTo(mapOnPackageDetailsModal);
//        locationsOnPackageDetailsModal = [];
//        markersOnPackageDetailsModal = [];

//            // Display marker on map
//            const location = event.location.split(',');
//            marker = L.marker([location[0], location[1]], {icon: redIcon});  //TODO should be red for source and ornage for dest, for example...
//            marker.bindPopup('<b>Event type: ' + event.event_type + '</b><br>Time: ' + event.timestamp + '.');
//            marker.addTo(mapOnPackageDetailsModal);
//            locationsOnPackageDetailsModal.push([location[0], location[1]]);
//            markersOnPackageDetailsModal.push(marker);

//        // Add destination.
//        const eventLocation = pckg.to_location.split(',');
//        marker = L.marker(eventLocation, {icon: greenIcon});
//        locationsOnPackageDetailsModal.push(eventLocation);
//        marker.bindPopup('<b>final destination</b>');
//        marker.addTo(mapOnPackageDetailsModal);
//        markersOnPackageDetailsModal.push(marker);
//
//        // Draw path and fit map.
//        const packagePath = new L.Polyline(locationsOnPackageDetailsModal).addTo(mapOnPackageDetailsModal);
//        mapOnPackageDetailsModal.fitBounds(packagePath.getBounds());



    $(document).ready(function(){
        let packageTable = $('#tablePackages').DataTable({paging: false});
        let heat = initMap();

        // Get events and packages and calculate stats.
        getEvents(function(events, package_event_types){
            $('#totalEvents').text(events.length);
            fillPackageStats(package_event_types);
            fillUserStats(events);


            $.each(events, function(eventIndex, event){
                let opacity = 1;
                if(event.event_type == 'location changed'){
                    opacity = 0.5;
                }
                heat.addLatLng(event.location.split(',').concat(opacity));
            });

            let packages = [];
            $.each(package_event_types, function(package_id, event_types){
                getPackage(package_id, function(pckg){
                    packages[package_id] = pckg;
                    addPackageRow(pckg, packageTable);
                    callRouter('package_photo', {escrow_pubkey: package_id}, function(result){
                        if(result.package_photo === null){
                            packages[package_id].photo = 'empty-photo.jpg';
                        }
                        else{
                            packages[package_id].photo = 'data:image/png;base64,' + result.package_photo.photo;
                        }
                    });
                });
            });
        });
    });
}());
