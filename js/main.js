const imgSrcBase64 =
    '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';

let jsonData = null;

let allPackagesForLauncher = [];

const launcherData = [];
const recipientData = [];
const courierData = [];

let launcher = {};

const protocol = location.protocol === 'file:' ? 'https:' : location.protocol;
const baseUrlRouter = protocol + '//route.paket.global/v3';
const baseUrlBridge = protocol + '//bridge.paket.global/v3';
const baseUrlFund = protocol + '//fund.paket.global/v2';
let dataTablePackage = null;

let mapOnPackageDetailsModal;
let locationsOnPackageDetailsModal = [];
let markersOnPackageDetailsModal = [];

let photoForCreateProject = null;
let photoForLaunchModal = null;
let photoForRelayModal = null;
let photoForReceiveModal = null;
let photoForChangeLocationModal = null;

let recipientAddressAutocomplete = null;
let courierAddressAutocompleteOnLaunchModal = null;
let courierAddressAutocompleteOnRelayModal = null;
let courierAddressAutocompleteOnReceiveModal = null;
let courierAddressAutocompleteOnChangeLocationModal = null;

let heatmap, heat;

let requests = {
    router: {
        baseUrl: baseUrlRouter,
        getMyPackages: function(){
            return new_requestToServer(launcher.keypairStellar.secret(), launcher.keypairStellar.publicKey(), {
                url: this.baseUrl + '/my_packages',
            });
        },
        getPackage: function({escrow_pubkey}){
            return anon_requestToServer({
                url: this.baseUrl + '/package',
                data: {
                    escrow_pubkey,
                },
            });
        },
        getPackagePhoto: function({escrow_pubkey}){
            return anon_requestToServer({
                url: this.baseUrl + '/package_photo',
                data: {
                    escrow_pubkey,
                },
            });
        },
        createPackage: function({escrow_pubkey, recipient_pubkey, launcher_phone_number, recipient_phone_number, payment_buls, collateral_buls, deadline_timestamp, description, from_location, to_location, from_address, to_address, event_location, photo}){
            const data = {
                escrow_pubkey,
                recipient_pubkey,
                launcher_phone_number,
                recipient_phone_number,
                payment_buls,
                collateral_buls,
                deadline_timestamp,
                description,
                from_location,
                to_location,
                from_address,
                to_address,
                event_location,
            };
            if(photo){
                data.photo = photo;
            }

            return new_requestToServer(launcher.keypairStellar.secret(), launcher.keypairStellar.publicKey(), {
                url: this.baseUrl + '/create_package',
                data: data,
            });
        },
        confirmCouriering: function(userSecret, userPubkey, {escrow_pubkey, location}){
            return new_requestToServer(userSecret, userPubkey, {
                url: this.baseUrl + '/confirm_couriering',
                data: {
                    escrow_pubkey, // escrow pubkey (the package ID)
                    location, // location of place where user choose package to be courier in
                },
            });
        },
        assignXdrs: function(userSecret, userPubkey, {escrow_pubkey, location, kwargs}){
            return new_requestToServer(userSecret, userPubkey, {
                url: this.baseUrl + '/assign_xdrs',
                data: {
                    escrow_pubkey, // escrow pubkey (the package ID)
                    location, // location of place where user accepted package
                    kwargs, // XDRs transaction in JSON format
                },
            });
        },
        acceptPackage: function(userSecret, userPubkey, {escrow_pubkey, location, leg_price, vehicle, cost, photo}){
            const data = {
                escrow_pubkey, // escrow pubkey (the package ID)
                location, // location of place where user accepted package
            };

            if(leg_price || vehicle || cost){
                const kwargsObj = {};
                if(leg_price){
                    kwargsObj.leg_price = leg_price;
                }
                if(vehicle){
                    kwargsObj.vehicle = vehicle;
                }
                if(cost){
                    kwargsObj.cost = cost;
                }

                data.kwargs = JSON.stringify(kwargsObj);
            }

            if(photo){
                data.photo = photo;
            }

            return new_requestToServer(userSecret, userPubkey, {
                url: this.baseUrl + '/accept_package',
                data: data,
            });
        },
        changedLocation: function(userSecret, userPubkey, {escrow_pubkey, location, photo, vehicle, cost}){
            const data = {
                escrow_pubkey, // pubkey of package escrow
                location, // GPS coordinates where user is at this moment
                kwargs: JSON.stringify({vehicle, cost}),
            };

            if(photo){
                data.photo = photo;
            }

            return new_requestToServer(userSecret, userPubkey, {
                url: this.baseUrl + '/changed_location',
                data: data,
            });
        },
    },
    bridge: {
        baseUrl: baseUrlBridge,
        submitTransaction: function({signedTransaction}){
            return new_requestToServer(launcher.keypairStellar.secret(), launcher.keypairStellar.publicKey(), {
                url: this.baseUrl + '/submit_transaction',
                data: {
                    transaction: signedTransaction,
                },
            });
        },
        prepareAccount: function({from_pubkey, new_pubkey}){
            return new_requestToServer(launcher.keypairStellar.secret(), launcher.keypairStellar.publicKey(), {
                url: this.baseUrl + '/prepare_account',
                data: {
                    from_pubkey,
                    new_pubkey,
                },
            });
        },
        prepareTrust: function({from_pubkey}){
            return new_requestToServer(launcher.keypairStellar.secret(), launcher.keypairStellar.publicKey(), {
                url: this.baseUrl + '/prepare_trust',
                data: {
                    from_pubkey,
                },
            });
        },
        prepareEscrow: function(
            userSecret, userPubkey,
            {launcher_pubkey, courier_pubkey, recipient_pubkey, payment_buls, collateral_buls, deadline_timestamp}){
            return new_requestToServer(userSecret, userPubkey, {
                url: this.baseUrl + '/prepare_escrow',
                data: {
                    launcher_pubkey,
                    courier_pubkey,
                    recipient_pubkey,
                    payment_buls,
                    collateral_buls,
                    deadline_timestamp,
                },
            });
        },
        prepareSendBuls: function({from_pubkey, to_pubkey, amount_buls}){
            return new_requestToServer(launcher.keypairStellar.secret(), launcher.keypairStellar.publicKey(), {
                url: this.baseUrl + '/prepare_send_buls',
                data: {
                    from_pubkey,
                    to_pubkey,
                    amount_buls,
                },
            });
        },
    },
    fund: {
        baseUrl: baseUrlFund,
        prepareAccount: function(){
            console.log(this.baseUrl);
        },
    },
};

$(document).ready(function(){
    // Reset first form (Select file with Customer Data)
    $('#firstForm')[0].reset();

    heatmap = L.map('heatmap').setView([32.06, 34.77], 8).addLayer(
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            maxZoom: 19, minZoom: 1,
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
    );
    heat = L.heatLayer([], {
        radius: 50,
        maxZoom: 17,
        max: 1,
        minOpacity: .3,
        blur: 40,
        gradient: {0.2: 'gold', 0.4: 'orange', 1: 'OrangeRed'},
    }).addTo(heatmap);
    L.control.scale({imperial: false}).addTo(heatmap);

    // Configuration Stellar Network
    // StellarBase.Network.useTestNetwork()
    const network = new StellarBase.Network('Test SDF Network ; September 2015');
    StellarBase.Network.use(network);

    // Places autocomplete on create package modal
    recipientAddressAutocomplete = new google.maps.places.Autocomplete($('#createPackageModal #recipientAddress')[0]);

    // Places autocomplete on launch modal
    courierAddressAutocompleteOnLaunchModal = new google.maps.places.Autocomplete($('#launchModal #address')[0]);

    // Places autocomplete on launch modal
    courierAddressAutocompleteOnRelayModal = new google.maps.places.Autocomplete($('#relayModal #address')[0]);

    // Places autocomplete on launch modal
    courierAddressAutocompleteOnReceiveModal = new google.maps.places.Autocomplete($('#receiveModal #address')[0]);

    // Places autocomplete on launch modal
    courierAddressAutocompleteOnChangeLocationModal = new google.maps.places.Autocomplete(
        $('#changeLocationModal #address')[0]);

    // Description autocomplete
    const inputDescription = $('#createPackageModal #description');
    inputDescription.typeahead({
        source: [],
        autoSelect: true,
    });

    inputDescription.change(function(){
        const current = inputDescription.typeahead('getActive');
        if(current){
            // Some item from your model is active!
            if(current.name === inputDescription.val()){
                // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
            }else{
                // This means it is only a partial match, you can either add a new item
                // or take the active if you don't want new items
            }
        }else{
            // Nothing is active so it is a new value (or maybe empty value)
        }
    });

    // Refresh DataTable
    dataTablePackage = $('#tablePackages').DataTable({
        paging: false,
        scrollY: '700px',
        scrollCollapse: true,
        columnDefs: [
            {
                targets: 0,
                visible: false,
            },
            {
                targets: -1,
                visible: true,
                searchable: false,
                orderable: false,
                render: function($data, $type, $row){
                    // Get status package
                    let statusPackage = undefined;
                    for(let index = 0; index < allPackagesForLauncher.length; index++){
                        const pckg = allPackagesForLauncher[index];
                        if(pckg.escrow_pubkey === $row[0]){
                            statusPackage = pckg.status;
                            break;
                        }
                    }

                    let buttonsHtml = '';

                    if(statusPackage === 'waiting pickup'){
                        buttonsHtml += '<button type="button" class="launch btn btn-success" id="' + $row[0] +
                            '">Launch</button>';
                    }else if(statusPackage === 'in transit'){
                        buttonsHtml += '<button type="button" class="relay btn btn-success" id="' + $row[0] +
                            '">Relay</button>' + '<button type="button" class="receive btn btn-success" id="' +
                            $row[0] + '">Receive</button>' +
                            '<button type="button" class="changeLocation btn btn-success" id="' + $row[0] +
                            '">Change location</button>';
                    }
                    return '<div class=escrow_pubkey data-escrow_pubkey=' + $row[0] + '></div><div class="btn-group">' + buttonsHtml + '</div>';
                },
            },
        ],
    });

    dataTablePackage.clear().draw();

    // Show modal window for package launch
    let packageIdForLaunch = null;
    $('#tablePackages tbody').on('click', 'button.launch', function(){
        packageIdForLaunch = this.attributes.id.value;

        // Reset form
        $('#launchModal form')[0].reset();

        // Get short package id
        let packageDetail;
        for(let index = 0; index < allPackagesForLauncher.length; index++){
            const pckg = allPackagesForLauncher[index];
            if(pckg.escrow_pubkey === packageIdForLaunch){
                packageDetail = pckg;
                break;
            }
        }

        // Change title
        $('#launchModal #packageId').empty().append(packageDetail.short_package_id);

        // Change status
        $('#launchModal #status').empty().append(packageDetail.status);

        // Show modal window
        $('#launchModal').modal({
            show: true,
        });
    });

    $('#launchModal #launchPackage').click(function(){
        showLoadingScreen('Starting');

        // Get val from Recipient address field
        let addressVal = $('#launchModal #address').val();

        // Get place
        let place = courierAddressAutocompleteOnLaunchModal.getPlace();
        if(!addressVal || !place){
            alert('Data is not valid. Please enter the recipient address.');
            hideLoadingScreen();
            return;
        }

        // Get location
        const location = place.geometry.location.lat().toFixed(7) + ',' + place.geometry.location.lng().toFixed(7);

        requests.router.getPackage({escrow_pubkey: packageIdForLaunch}).done(function(response){
            console.log('get package', response);

            // Get courier pub key
            let courierPubKey = undefined;
            for(let index = 0; index < response.package.events.length; index++){
                const event = response.package.events[index];
                if(event.event_type === 'courier confirmed'){
                    courierPubKey = event.user_pubkey;
                    break;
                }
            }

            if(!courierPubKey){
                alert('Package has no courier');
                return;
            }

            // Get courier private key
            let courierPrivateKey = undefined;
            for(let index = 0; index < courierData.length; index++){
                let courier = courierData[index];
                if(courier.publicKey === courierPubKey){
                    courierPrivateKey = courier.privateKey;
                    break;
                }
            }

            requests.router.acceptPackage(courierPrivateKey, courierPubKey, {
                escrow_pubkey: packageIdForLaunch,
                location: location,
                leg_price: 1,
                photo: photoForLaunchModal,
            }).done(function(response){
                console.log(response);

                // Hide modal window
                $('#launchModal').modal('hide');
                hideLoadingScreen();

                displayPackagesForLauncher();
            }).catch(function(error){
                console.error(error);
                alert('An error occurred while confirm couriering');
                hideLoadingScreen();
            });
        }).catch(function(error){
            console.error(error);
            alert('An error occurred while get package');
            hideLoadingScreen();
        });
    });

    // Show modal window for package relay
    let packageIdForRelay = null;
    $('#tablePackages tbody').on('click', 'button.relay', function(){
        packageIdForRelay = this.attributes.id.value;

        // Reset form
        $('#relayModal form')[0].reset();

        // Get short package id
        let packageDetail = undefined;
        for(let index = 0; index < allPackagesForLauncher.length; index++){
            const ackg = allPackagesForLauncher[index];
            if(ackg.escrow_pubkey === packageIdForRelay){
                packageDetail = ackg;
                break;
            }
        }

        // Change title
        $('#relayModal #packageId').empty().append(packageDetail.short_package_id);

        // Change status
        $('#relayModal #status').empty().append(packageDetail.status);

        // Display courier
        const courierSelect = $('#relayModal #courier');
        $('#relayCourier').empty();
        courierSelect.empty();

        for(let index = 0; index < courierData.length; index++){
            const element = courierData[index];
            courierSelect.append('<option value="' + index + '">' + element.name + '</option>');
            $('#relayCourier').append('<option value="' + index + '">' + element.name + '</option>');
        }

        // Show modal window
        $('#relayModal').modal({
            show: true,
        });
    });

    // Show modal window for package receive
    let packageIdForReceive = null;
    $('#tablePackages tbody').on('click', 'button.receive', function(){
        packageIdForReceive = this.attributes.id.value;

        // Reset form
        $('#receiveModal form')[0].reset();

        // Get short package id
        let packageDetail = undefined;
        for(let index = 0; index < allPackagesForLauncher.length; index++){
            const pkg = allPackagesForLauncher[index];
            if(pkg.escrow_pubkey === packageIdForReceive){
                packageDetail = pkg;
                break;
            }
        }

        // Change title
        $('#receiveModal #packageId').empty().append(packageDetail.short_package_id);

        // Change status
        $('#receiveModal #status').empty().append(packageDetail.status);

        // Show modal window
        $('#receiveModal').modal({
            show: true,
        });
    });

    $('#receiveModal #receivePackage').click(function(){
        showLoadingScreen();

        // Get val from Recipient address field
        let addressVal = $('#receiveModal #address').val();

        // Get place
        let place = courierAddressAutocompleteOnReceiveModal.getPlace();
        if(!addressVal || !place){
            alert('Data is not valid. Please enter the recipient address.');
            hideLoadingScreen();
            return;
        }

        // Get location
        const location = place.geometry.location.lat().toFixed(7) + ',' + place.geometry.location.lng().toFixed(7);

        // Get vehicle
        let vehicle = $('#receiveModal #vehicle').val();
        if(!vehicle){
            alert('Data is not valid. Please enter the vehicle.');
            hideLoadingScreen();
            return;
        }

        // Get cost
        let cost = $('#receiveModal #cost').val();
        if(!cost){
            alert('Data is not valid. Please enter the cost.');
            hideLoadingScreen();
            return;
        }

        requests.router.getPackage({escrow_pubkey: packageIdForReceive}).done(function(response){
            console.log('get package', response);
            const pckg = response.package;

            // Get recipient pub key
            const recipientPubkey = response.package.recipient_pubkey;

            // Get recipient private key
            let recipientPrivateKey = undefined;
            for(let index = 0; index < recipientData.length; index++){
                let recipient = recipientData[index];
                if(recipient.publicKey === recipientPubkey){
                    recipientPrivateKey = recipient.privateKey;
                    break;
                }
            }

            // Get courier pub key
            let courierPubKey = undefined;
            for(let index = 0; index < response.package.events.length; index++){
                let event = response.package.events[index];
                if(event.event_type === 'courier confirmed'){
                    courierPubKey = event.user_pubkey;
                    break;
                }
            }

            if(!courierPubKey){
                alert('Package has no courier');
                return;
            }

            // Get courier private key
            let courierPrivateKey = undefined;
            for(let index = 0; index < courierData.length; index++){
                let courier = courierData[index];
                if(courier.publicKey === courierPubKey){
                    courierPrivateKey = courier.privateKey;
                    break;
                }
            }

            // Get escrowXdrsForPackage
            let escrowXdrsForPackage = null;
            for(let index = 0; index < pckg.events.length; index++){
                const event = pckg.events[index];
                if(event.event_type === 'escrow XDRs assigned'){
                    escrowXdrsForPackage = JSON.parse(event.kwargs).escrow_xdrs;
                }
            }

            if(escrowXdrsForPackage == null){
                alert('The package still does not have escrow xdrs');
                return;
            }

            const paymentTransaction = escrowXdrsForPackage.payment_transaction;

            const signedTransaction = signTransaction(paymentTransaction,
                StellarBase.Keypair.fromSecret(recipientPrivateKey));

            // Submit transaction
            requests.bridge.submitTransaction({signedTransaction}).done(function(response){
                console.debug('submit payment transaction', response);

                // Changed location
                requests.router.changedLocation(courierPrivateKey, courierPubKey, {
                    escrow_pubkey: packageIdForReceive,
                    location: location,
                    vehicle: vehicle,
                    cost: cost,
                }).done(function(response){
                    console.debug('changed location', response);

                    // Accept package
                    requests.router.acceptPackage(recipientPrivateKey, recipientPubkey, {
                        escrow_pubkey: packageIdForReceive,
                        location: location,
                        photo: photoForReceiveModal,
                    }).done(function(response){
                        console.debug('submit payment transaction', response);

                        // Hide modal window
                        $('#receiveModal').modal('hide');
                        hideLoadingScreen();

                        displayPackagesForLauncher();
                    }).catch(function(error){
                        console.error(error);
                        alert('An error occurred while submit payment transaction');
                        hideLoadingScreen();
                    });
                }).catch(function(error){
                    console.error(error);
                    alert('An error occurred while confirm couriering');
                    hideLoadingScreen();
                });
            }).catch(function(error){
                console.error(error);
                alert('An error occurred while submit payment transaction');
                hideLoadingScreen();
            });
        }).catch(function(error){
            console.error(error);
            alert('An error occurred while get package');
            hideLoadingScreen();
        });
    });

    // Show modal window for package change location
    let packageIdForChangeLocation = null;
    $('#tablePackages tbody').on('click', 'button.changeLocation', function(){
        packageIdForChangeLocation = this.attributes.id.value;

        // Reset form
        $('#changeLocationModal form')[0].reset();

        // Get short package id
        let packageDetail = undefined;
        for(let index = 0; index < allPackagesForLauncher.length; index++){
            const pckg = allPackagesForLauncher[index];
            if(pckg.escrow_pubkey === packageIdForChangeLocation){
                packageDetail = pckg;
                break;
            }
        }

        // Change title
        $('#changeLocationModal #packageId').empty().append(packageDetail.short_package_id);

        // Change status
        $('#changeLocationModal #status').empty().append(packageDetail.status);

        // Show modal window
        $('#changeLocationModal').modal({
            show: true,
        });
    });

    $('#relayModal #relayPackage').click(function(){
        showLoadingScreen('Starting');

        // Get val from Recipient address field
        let addressVal = $('#relayModal #address').val();

        // Get place
        let place = courierAddressAutocompleteOnRelayModal.getPlace();
        if(!addressVal || !place){
            alert('Data is not valid. Please enter the recipient address.');
            hideLoadingScreen();
            return;
        }

        // Get location
        const location = place.geometry.location.lat().toFixed(7) + ',' + place.geometry.location.lng().toFixed(7);

        // Get vehicle
        let vehicle = $('#relayModal #vehicle').val();
        if(!vehicle){
            alert('Data is not valid. Please enter the vehicle.');
            hideLoadingScreen();
            return;
        }

        // Get cost
        let cost = $('#relayModal #cost').val();
        if(!cost){
            alert('Data is not valid. Please enter the cost.');
            hideLoadingScreen();
            return;
        }

        requests.router.getPackage({escrow_pubkey: packageIdForRelay}).done(function(response){
            console.log('get package', response);

            // Get courier pub key
            let courierPubKey;
            for(let index = 0; index < response.package.events.length; index++){
                const event = response.package.events[index];
                if(event.event_type === 'courier confirmed'){
                    courierPubKey = event.user_pubkey;
                    break;
                }
            }

            if(!courierPubKey){
                alert('Package has no courier');
                return;
            }

            // Get courier private key
            let courierPrivateKey;
            for(let index = 0; index < courierData.length; index++){
                let courier = courierData[index];
                if(courier.publicKey === courierPubKey){
                    courierPrivateKey = courier.privateKey;
                    break;
                }
            }

            requests.router.changedLocation(courierPrivateKey, courierPubKey, {
                escrow_pubkey: packageIdForRelay,
                location: location,
                photo: photoForRelayModal,
                vehicle: vehicle,
                cost: cost,
            }).done(function(response){
                console.log(response);
                let courierId = $('#relayCourier').val();
                let courierPrivateKey = courierData[courierId].privateKey;
                let courierPubKey = courierData[courierId].publicKey;
                requests.router.acceptPackage(courierPrivateKey, courierPubKey, {
                    escrow_pubkey: packageIdForRelay,
                    location: location,
                }).done(function(response){
                    $('#relayModal').modal('hide');
                    hideLoadingScreen();
                }).catch(function(error){
                    console.error(error);
                    alert('An error occurred while accepting package');
                    hideLoadingScreen();
                });
            }).catch(function(error){
                console.error(error);
                alert('An error occurred while changing location');
                hideLoadingScreen();
            });
        }).catch(function(error){
            console.error(error);
            alert('An error occurred while get package');
            hideLoadingScreen();
        });
    });

    $('#changeLocationModal #changeLocationPackage').click(function(){
        showLoadingScreen('Starting');

        // Get val from Recipient address field
        let addressVal = $('#changeLocationModal #address').val();

        // Get place
        let place = courierAddressAutocompleteOnChangeLocationModal.getPlace();
        if(!addressVal || !place){
            alert('Data is not valid. Please enter the recipient address.');
            hideLoadingScreen();
            return;
        }

        // Get location
        const location = place.geometry.location.lat().toFixed(7) + ',' + place.geometry.location.lng().toFixed(7);

        // Get vehicle
        let vehicle = $('#changeLocationModal #vehicle').val();
        if(!vehicle){
            alert('Data is not valid. Please enter the vehicle.');
            hideLoadingScreen();
            return;
        }

        // Get cost
        let cost = $('#changeLocationModal #cost').val();
        if(!cost){
            alert('Data is not valid. Please enter the cost.');
            hideLoadingScreen();
            return;
        }

        requests.router.getPackage({escrow_pubkey: packageIdForChangeLocation}).done(function(response){
            console.log('get package', response);

            // Get courier pub key
            let courierPubKey = undefined;
            for(let index = 0; index < response.package.events.length; index++){
                const event = response.package.events[index];
                if(event.event_type === 'courier confirmed'){
                    courierPubKey = event.user_pubkey;
                    break;
                }
            }

            if(!courierPubKey){
                alert('Package has no courier');
                return;
            }

            // Get courier private key
            let courierPrivateKey = undefined;
            for(let index = 0; index < courierData.length; index++){
                let courier = courierData[index];
                if(courier.publicKey === courierPubKey){
                    courierPrivateKey = courier.privateKey;
                    break;
                }
            }

            requests.router.changedLocation(courierPrivateKey, courierPubKey, {
                escrow_pubkey: packageIdForRelay,
                location: location,
                photo: photoForChangeLocationModal,
                vehicle: vehicle,
                cost: cost,
            }).done(function(response){
                console.log(response);

                // Hide modal window
                $('#changeLocationModal').modal('hide');
                hideLoadingScreen();
                // displayPackagesForLauncher()
            }).catch(function(error){
                console.error(error);
                alert('An error occurred while confirm couriering');
                hideLoadingScreen();
            });
        }).catch(function(error){
            console.error(error);
            alert('An error occurred while get package');
            hideLoadingScreen();
        });
    });

    // Show modal window for package details
    $('#tablePackages').click(function(e){
        let td = e.target;
        if(td.cellIndex > 5){return true;}
        showPackageDetails($(td.parentNode).find('div.escrow_pubkey').attr('data-escrow_pubkey'));
    });

    $('#panelCustomerData .input-file').before(function(){
        if(
            !$(this).prev().hasClass('input-ghost')
        ){
            const element = $(
                '<input type=\'file\' class=\'input-ghost\' style=\'visibility:hidden; height:0\' accept=\'.json, .txt\'>');
            element.attr('name', $(this).attr('name'));
            element.change(function(e){
                element.next(element).find('input').val(
                    element.val().split('\\').pop(),
                );

                const fileReader = new FileReader();
                fileReader.onload = function(progressEvent){
                    try{
                        const json = progressEvent.target.result;
                        jsonData = JSON.parse(json);

                        for(let index = 0; index < jsonData.length; index++){
                            let item = jsonData[index];
                            jsonData[index].keypairStellar = generateKeypairStellar(item);

                            if(item.type === 'LAUNCHER'){
                                launcherData.push(item);
                            }else if(item.type === 'RECIPIENT'){
                                recipientData.push(item);
                            }else if(item.type === 'COURIER'){
                                courierData.push(item);
                            }
                        }

                        for(let index = 0; index < launcherData.length; index++){
                            let item = launcherData[index];

                            $('#dropdownUsers').append('<li><a href="#" id="' + index + '">' + item.name + '</a></li>');

                            $('#dropdownUsers li a:eq(' + index + ')').click(item, function(event){
                                changeSelectedLauncher(event.data);
                                displayPackagesForLauncher();
                            });
                        }

                        // the first user is selected by default
                        changeSelectedLauncher(launcherData[0]);
                        displayPackagesForLauncher();

                        $('.dropdown-toggle').dropdown();
                        $('#panelCustomerData').hide();
                        $('#panelRequests').show();
                    }catch(error){
                        alert('Problems reading the JSON file. Details in console.');
                        console.error(error);
                    }
                };
                fileReader.readAsText(e.target.files[0], 'UTF-8');
            });
            $(this).find('button.btn-choose').click(function(){
                element.click();
            });
            $(this).find('button.btn-guest').click(function(){
                FillAllPackages();
                $('#panelCustomerData').hide();
                $('.panel-heading').hide();
                $('.panel-body .highlight').hide();
                $('#panelRequests').show();
            });
            $(this).find('input').css('cursor', 'pointer');
            $(this).find('input').mousedown(function(){
                $(this).parents('.input-file').prev().click();
                return false;
            });
            return element;
        }
    });

    $('#createPackageModal .uploadPhoto').before(function(){
        if(
            !$(this).prev().hasClass('input-ghost')
        ){
            const element = $(
                '<input type=\'file\' class=\'input-ghost\' style=\'visibility:hidden; height:0\' accept=\'image/*\'>');
            element.attr('name', $(this).attr('name'));
            element.change(function(e){
                element.next(element).find('input').val(
                    element.val().split('\\').pop(),
                );

                photoForCreateProject = e.target.files[0];
            });

            $(this).find('button.btn-choose').click(function(){
                element.click();
            });

            $(this).find('input').css('cursor', 'pointer');

            $(this).find('input').mousedown(function(){
                $(this).parents('.uploadPhoto').prev().click();
                return false;
            });

            return element;
        }
    });

    $('#launchModal .uploadPhoto').before(function(){
        if(
            !$(this).prev().hasClass('input-ghost')
        ){
            const element = $(
                '<input type=\'file\' class=\'input-ghost\' style=\'visibility:hidden; height:0\' accept=\'image/*\'>');
            element.attr('name', $(this).attr('name'));
            element.change(function(e){
                element.next(element).find('input').val(
                    element.val().split('\\').pop(),
                );

                photoForLaunchModal = e.target.files[0];
            });

            $(this).find('button.btn-choose').click(function(){
                element.click();
            });

            $(this).find('input').css('cursor', 'pointer');

            $(this).find('input').mousedown(function(){
                $(this).parents('.uploadPhoto').prev().click();
                return false;
            });

            return element;
        }
    });

    $('#relayModal .uploadPhoto').before(function(){
        if(
            !$(this).prev().hasClass('input-ghost')
        ){
            const element = $(
                '<input type=\'file\' class=\'input-ghost\' style=\'visibility:hidden; height:0\' accept=\'image/*\'>');
            element.attr('name', $(this).attr('name'));
            element.change(function(e){
                element.next(element).find('input').val(
                    element.val().split('\\').pop(),
                );

                photoForRelayModal = e.target.files[0];
            });

            $(this).find('button.btn-choose').click(function(){
                element.click();
            });

            $(this).find('input').css('cursor', 'pointer');

            $(this).find('input').mousedown(function(){
                $(this).parents('.uploadPhoto').prev().click();
                return false;
            });

            return element;
        }
    });

    $('#receiveModal .uploadPhoto').before(function(){
        if(
            !$(this).prev().hasClass('input-ghost')
        ){
            const element = $(
                '<input type=\'file\' class=\'input-ghost\' style=\'visibility:hidden; height:0\' accept=\'image/*\'>');
            element.attr('name', $(this).attr('name'));
            element.change(function(e){
                element.next(element).find('input').val(
                    element.val().split('\\').pop(),
                );

                photoForReceiveModal = e.target.files[0];
            });

            $(this).find('button.btn-choose').click(function(){
                element.click();
            });

            $(this).find('input').css('cursor', 'pointer');

            $(this).find('input').mousedown(function(){
                $(this).parents('.uploadPhoto').prev().click();
                return false;
            });

            return element;
        }
    });

    $('#changeLocationModal .uploadPhoto').before(function(){
        if(
            !$(this).prev().hasClass('input-ghost')
        ){
            const element = $(
                '<input type=\'file\' class=\'input-ghost\' style=\'visibility:hidden; height:0\' accept=\'image/*\'>');
            element.attr('name', $(this).attr('name'));
            element.change(function(e){
                element.next(element).find('input').val(
                    element.val().split('\\').pop(),
                );

                photoForChangeLocationModal = e.target.files[0];
            });

            $(this).find('button.btn-choose').click(function(){
                element.click();
            });

            $(this).find('input').css('cursor', 'pointer');

            $(this).find('input').mousedown(function(){
                $(this).parents('.uploadPhoto').prev().click();
                return false;
            });

            return element;
        }
    });

    $('#addEvent #tryItOut').click(function(){
        const selectorPanel = '#addEvent ';

        const data = {
            event_type: $(selectorPanel + '#eventType').val(),
            location: $(selectorPanel + '#location').val(),
        };

        requestToServer({
            uri: '/v3/add_event',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#acceptPackage #tryItOut').click(function(){
        const selectorPanel = '#acceptPackage ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
            location: $(selectorPanel + '#location').val(),
        };

        requestToServer({
            uri: '/v3/accept_package',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#assignPackage #tryItOut').click(function(){
        const selectorPanel = '#assignPackage ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
            location: $(selectorPanel + '#location').val(),
        };

        requestToServer({
            uri: '/v3/assign_package',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#assignXdrs #tryItOut').click(function(){
        const selectorPanel = '#assignXdrs ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
            location: $(selectorPanel + '#location').val(),
            kwargs: $(selectorPanel + '#kwargs').val(),
        };

        requestToServer({
            uri: '/v3/assign_xdrs',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#availablePackages #tryItOut').click(function(){
        const selectorPanel = '#availablePackages ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
            location: $(selectorPanel + '#location').val(),
            kwargs: $(selectorPanel + '#kwargs').val(),
        };

        requestToServer({
            uri: '/v3/available_packages',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#changedLocation #tryItOut').click(function(){
        const selectorPanel = '#changedLocation ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
            location: $(selectorPanel + '#location').val(),
        };

        requestToServer({
            uri: '/v3/changed_location',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#createPackage #tryItOut').click(function(){
        const selectorPanel = '#createPackage ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
            recipient_pubkey: $(selectorPanel + '#recipientPubkey').val(),
            launcher_phone_number: $(selectorPanel + '#launcherPhoneNumber').val(),
            recipient_phone_number: $(selectorPanel + '#recipientPhoneNumber').val(),
            payment_buls: $(selectorPanel + '#paymentBuls').val(),
            collateral_buls: $(selectorPanel + '#collateralBuls').val(),
            deadline_timestamp: $(selectorPanel + '#deadlineTimestamp').val(),
            description: $(selectorPanel + '#description').val(),
            from_location: $(selectorPanel + '#fromLocation').val(),
            to_location: $(selectorPanel + '#foLocation').val(),
            from_address: $(selectorPanel + '#fromAddress').val(),
            to_address: $(selectorPanel + '#toAddress').val(),
            event_location: $(selectorPanel + '#eventLocation').val(),
        };

        requestToServer({
            uri: '/v3/create_package',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#events #tryItOut').click(function(){
        const selectorPanel = '#events ';

        const data = {};

        requestToServer({
            uri: '/v3/events',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#myPackages #tryItOut').click(function(){
        const selectorPanel = '#myPackages ';

        const data = {};

        requestToServer({
            uri: '/v3/my_packages',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#package #tryItOut').click(function(){
        const selectorPanel = '#package ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
        };

        requestToServer({
            uri: '/v3/package',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#packagePhoto #tryItOut').click(function(){
        const selectorPanel = '#packagePhoto ';

        const data = {
            escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
        };

        requestToServer({
            uri: '/v3/package_photo',
            data: data,
            response: function(result){
                printResponse(selectorPanel, result);
            },
        });
    });

    $('#info #openCreatePackageModal').click(function(){
        let index;
// Reset form
        $('#createPackageModal form')[0].reset();
        changesCheckBoxEnterDescription($('#createPackageModal #enterMessageCheckBox'));

        // Recipient in modal window
        const recipientSelect = $('#createPackageModal #recipient').empty();
        for(index = 0; index < recipientData.length; index++){
            recipientSelect.append('<option value="' + index + '">' + recipientData[index].name + '</option>');
        }

        // Courier in modal window
        $('#relayCourier').empty();
        const courierSelect = $('#createPackageModal #courier').empty();
        for(index = 0; index < courierData.length; index++){
            const element_name = courierData[index].name;
            courierSelect.append('<option value="' + index + '">' + element_name + '</option>');
            $('#relayCourier').append('<option value="' + index + '">' + element_name + '</option>');
        }

        // Set new description to autocomplete
        $('#createPackageModal #description').data('typeahead').source = getDescriptionForCreatePackage();

        // Show modal window
        $('#createPackageModal').modal();
    });

    $('#createPackageModal #createPackage').click(function(){
        showLoadingScreen('Starting');

        const selectorPanel = '#createPackageModal ';

        // Get recipient
        const recipientId = $(selectorPanel + '#recipient').val();
        const recipientUser = recipientData[recipientId];

        // Get val from Recipient address field
        let recipientAddressVal = $(selectorPanel + '#recipientAddress').val();

        // Get recipient place
        let recipientPlace = recipientAddressAutocomplete.getPlace();
        if(!recipientAddressVal || !recipientPlace){
            alert('Data is not valid. Please enter the recipient address.');
            hideLoadingScreen();
            return;
        }

        const recipientAddress = recipientPlace.formatted_address;
        const recipientLocation = recipientPlace.geometry.location.lat().toFixed(7) + ',' +
            recipientPlace.geometry.location.lng().toFixed(7);

        // Get courier
        const courierId = $(selectorPanel + '#courier').val();
        const courierUser = courierData[courierId];

        // Get deadline
        const deadline = $(selectorPanel + 'input[name=deadline]:checked').val();

        // Get date
        const today = new Date();
        let deadlineUnixTimestamp;
        if(deadline === '1Day'){
            // 1 day from now
            deadlineUnixTimestamp = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).getTime() /
                1000;
        }else if(deadline === '1Week'){
            // 1 week from now
            deadlineUnixTimestamp = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7).getTime() /
                1000;
        }else if(deadline === '2Week'){
            // 2 week from now
            deadlineUnixTimestamp = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14).getTime() /
                1000;
        }

        // Get values
        const paymentBuls = $(selectorPanel + 'input[name=paymentBuls]:checked').val();
        const collateralBuls = $(selectorPanel + 'input[name=collateralBuls]:checked').val();

        // Get fragile
        const fragile = $(selectorPanel + '#isFragile')[0].checked ? 'fragile' : null;

        // Get description type
        const descriptionType = $(selectorPanel + 'input[name=descriptionType]:checked').val();

        // Get description
        const descriptionText = $(selectorPanel + '#enterMessageCheckBox')[0].checked ? $(selectorPanel +
            '#description').
            val() : null;

        saveDescriptionForCreatePackage(descriptionText);

        // Message for a descriptive
        const description = [descriptionType, fragile, descriptionText].filter(Boolean).join(', ');

        // 1) Create a pubkey for the escrow
        // generate new Keypair
        infoLoadingScreen('1/14 Create a pubkey for the escrow');
        const escrowKeypair = StellarBase.Keypair.random();
        const escrowPubkey = escrowKeypair.publicKey();
        const escrowSecret = escrowKeypair.secret();
        console.debug('escrowKeypair', escrowKeypair);

        // 2) Call prepare_account on bridge as current user (launcher), sign and submit the tx to bridge
        infoLoadingScreen('2/14 Prepare account');
        requests.bridge.prepareAccount({
            from_pubkey: launcher.keypairStellar.publicKey(),
            new_pubkey: escrowPubkey,
        }).done(function(responsePrepareAccount){
            console.debug('prepare_account', responsePrepareAccount);
            const signedTransaction = signTransaction(responsePrepareAccount.transaction, launcher.keypairStellar);
            // Submit transaction
            infoLoadingScreen('3/14 Submit Prepare account');
            requests.bridge.submitTransaction({signedTransaction}).done(function(response){
                console.debug('submit prepare_account', response);
                // 3) Call prepare_trust on bridge as escrow account (launcher), sign and submit the tx to bridge
                infoLoadingScreen('4/14 Prepare trust');
                requests.bridge.prepareTrust({
                    from_pubkey: escrowPubkey,
                }).done(function(responsePrepareTrust){
                    console.debug('prepare_trust', responsePrepareTrust);
                    const signedTransaction = signTransaction(responsePrepareTrust.transaction, escrowKeypair);
                    // Submit transaction
                    infoLoadingScreen('5/14 Submit Prepare trust');
                    requests.bridge.submitTransaction({signedTransaction}).done(function(response){
                        console.debug('submit prepare_trust', response);

                        // 4) Call prepare_escrow on bridge as escrow account, sign and submit the tx to bridge
                        infoLoadingScreen('6/14 Prepare escrow');
                        requests.bridge.prepareEscrow(escrowSecret, escrowPubkey, {
                            launcher_pubkey: launcher.keypairStellar.publicKey(),
                            courier_pubkey: courierUser.keypairStellar.publicKey(),
                            recipient_pubkey: recipientUser.keypairStellar.publicKey(),
                            payment_buls: paymentBuls,
                            collateral_buls: collateralBuls,
                            deadline_timestamp: deadlineUnixTimestamp,
                        }).done(function(responsePrepareEscrow){
                            console.debug('prepare_escrow', responsePrepareEscrow);
                            const signedTransaction = signTransaction(
                                responsePrepareEscrow.escrow_details.set_options_transaction, escrowKeypair);

                            const XDRs = {
                                escrow_xdrs: {
                                    merge_transaction: responsePrepareEscrow.escrow_details.merge_transaction,
                                    payment_transaction: responsePrepareEscrow.escrow_details.payment_transaction,
                                    refund_transaction: responsePrepareEscrow.escrow_details.refund_transaction,
                                    set_options_transaction: responsePrepareEscrow.escrow_details.set_options_transaction,
                                },
                            };

                            // Submit transaction
                            infoLoadingScreen('7/14 Submit Prepare escrow');
                            requests.bridge.submitTransaction({
                                signedTransaction,
                            }).done(function(response){
                                console.debug('submit prepare_escrow', response);
                                // 5) Call prepare_send_buls on bridge with the payment amount as the current user (launcher), sign and submit the tx to bridge
                                infoLoadingScreen('8/14 Prepare send buls');
                                requests.bridge.prepareSendBuls({
                                    from_pubkey: launcher.keypairStellar.publicKey(),
                                    to_pubkey: escrowPubkey,
                                    amount_buls: paymentBuls,
                                }).done(function(responsePrepareSendBuls){
                                    const signedTransaction = signTransaction(responsePrepareSendBuls.transaction,
                                        launcher.keypairStellar);
                                    console.debug('prepare_send_buls (payment)', responsePrepareSendBuls);
                                    // Submit transaction
                                    infoLoadingScreen('9/14 Submit Prepare send buls');
                                    requests.bridge.submitTransaction({
                                        signedTransaction,
                                    }).done(function(response){
                                        console.debug('submit prepare_send_buls (payment)', response);
                                        // 6) Call prepare_send_buls on bridge with the collateral amount as the designated courier, sign and submit the tx to bridge
                                        infoLoadingScreen('10/14 Second Prepare send buls');
                                        requests.bridge.prepareSendBuls({
                                            from_pubkey: courierUser.keypairStellar.publicKey(),
                                            to_pubkey: escrowPubkey,
                                            amount_buls: collateralBuls,
                                        }).done(function(responsePrepareSendBuls){
                                            const signedTransaction = signTransaction(
                                                responsePrepareSendBuls.transaction,
                                                courierUser.keypairStellar);
                                            console.debug('prepare_send_buls (collateral)', responsePrepareSendBuls);
                                            // Submit transaction
                                            infoLoadingScreen('11/14 Submit Second Prepare send buls');
                                            requests.bridge.submitTransaction({
                                                signedTransaction,
                                            }).done(function(response){
                                                console.debug('submit prepare_send_buls (collateral)', response);
                                                // 7) Call create_package on router
                                                infoLoadingScreen('12/14 Create package');
                                                requests.router.createPackage({
                                                    escrow_pubkey: escrowPubkey,
                                                    recipient_pubkey: recipientUser.keypairStellar.publicKey(),
                                                    launcher_phone_number: launcher.phoneNumber,
                                                    recipient_phone_number: recipientUser.phoneNumber,
                                                    payment_buls: paymentBuls,
                                                    collateral_buls: collateralBuls,
                                                    deadline_timestamp: deadlineUnixTimestamp,
                                                    description: description,
                                                    from_location: launcher.location,
                                                    to_location: recipientLocation,
                                                    from_address: launcher.address,
                                                    to_address: recipientAddress,
                                                    event_location: launcher.location,
                                                    photo: photoForCreateProject,
                                                }).done(function(responseCreatePackage){
                                                    console.debug('create_package', responseCreatePackage);

                                                    addRowPackagesToDataTable(responseCreatePackage.package);

                                                    // clear field for photo
                                                    photoForCreateProject = null;

                                                    // 8) Call confirm_couriering on router
                                                    infoLoadingScreen('13/14 Confirming package by courier');
                                                    requests.router.confirmCouriering(
                                                        courierUser.keypairStellar.secret(),
                                                        courierUser.keypairStellar.publicKey(), {
                                                            escrow_pubkey: escrowPubkey,
                                                            location: launcher.location,
                                                        }).done(function(response){
                                                        // 9) Call assign_xdrs on router
                                                        infoLoadingScreen('14/14 Preparing escrow and assigning XDRs');
                                                        requests.router.assignXdrs(launcher.keypairStellar.secret(),
                                                            launcher.keypairStellar.publicKey(), {
                                                                escrow_pubkey: escrowPubkey,
                                                                location: launcher.location,
                                                                kwargs: JSON.stringify(XDRs),
                                                            }).done(function(response){
                                                            // Hide modal window
                                                            $('#createPackageModal').modal('hide');

                                                            hideLoadingScreen();
                                                        }).catch(function(error){
                                                            console.error(error);
                                                            alert('An error occurred while confirm couriering');
                                                            hideLoadingScreen();
                                                        });
                                                    }).catch(function(error){
                                                        console.error(error);
                                                        alert('An error occurred while confirm couriering');
                                                        hideLoadingScreen();
                                                    });
                                                }).catch(function(error){
                                                    console.error(error);
                                                    alert('An error occurred while creating the Package');
                                                    hideLoadingScreen();
                                                });
                                            }).catch(function(error){
                                                const errorMessage = 'Error on step: "Submit transaction -> Prepare send buls"';

                                                console.error(errorMessage);
                                                console.error(error);

                                                alert(errorMessage);
                                                hideLoadingScreen();
                                            });
                                        }).catch(function(error){
                                            const errorMessage = 'Error on step: "Prepare send buls"';

                                            console.error(errorMessage);
                                            console.error(error);

                                            alert(errorMessage);
                                            hideLoadingScreen();
                                        });
                                    }).catch(function(error){
                                        const errorMessage = 'Error on step: "Submit transaction -> Prepare send buls"';

                                        console.error(errorMessage);
                                        console.error(error);

                                        alert(errorMessage);
                                        hideLoadingScreen();
                                    });
                                }).catch(function(error){
                                    const errorMessage = 'Error on step: "Prepare send buls"';

                                    console.error(errorMessage);
                                    console.error(error);

                                    alert(errorMessage);
                                    hideLoadingScreen();
                                });
                            }).catch(function(error){
                                const errorMessage = 'Error on step: "Submit transaction -> prepare escrow"';

                                console.error(errorMessage);
                                console.error(error);

                                alert(errorMessage);
                                hideLoadingScreen();
                            });
                        }).catch(function(error){
                            const errorMessage = 'Error on step: "Prepare escrow"';

                            console.error(errorMessage);
                            console.error(error);

                            alert(errorMessage);
                            hideLoadingScreen();
                        });
                    }).catch(function(error){
                        const errorMessage = 'Error on step: "Submit transaction for prepare_trust"';

                        console.error(errorMessage);
                        console.error(error);

                        alert(errorMessage);
                        hideLoadingScreen();
                    });
                }).catch(function(error){
                    const errorMessage = 'Error on step: "Call prepare_trust"';

                    console.error(errorMessage);
                    console.error(error);

                    alert(errorMessage);
                    hideLoadingScreen();
                });
            }).catch(function(error){
                const errorMessage = 'Error on step: "Submit transaction -> prepare_account on bridge"';

                console.error(errorMessage);
                console.error(error);

                alert(errorMessage);
                hideLoadingScreen();
            });
        }).catch(function(error){
            const errorMessage = 'Error on step: "Call prepare_account on bridge"';

            console.error(errorMessage);
            console.error(error);

            alert(errorMessage);
            hideLoadingScreen();
        });
    });
    if(window.location.hash !== '#login'){
        $(this).find('button.btn-guest').click();
    }
});

function changeSelectedLauncher(user){
    launcher = user;

    const tablePackages = $('#tablePackages tbody');
    tablePackages.empty();

    // Change display info about user
    $('#userName').empty().append(user.name);

    $('#publicKey').empty().append(user.keypairStellar.publicKey());
}

function displayPackagesForLauncher(){
    showLoadingScreen();

    dataTablePackage.clear().draw();

    // Get all packages for this user
    requests.router.getMyPackages().done(function(data){
        allPackagesForLauncher = data.packages;

        for(let index = 0; index < allPackagesForLauncher.length; index++){
            const packageItem = allPackagesForLauncher[index];
            addRowPackagesToDataTable(packageItem);
        }

        hideLoadingScreen();
    }).catch(function(error){
        console.error('catch');
        console.error(error);
        alert('Failed to get data from server');

        hideLoadingScreen();
    });
}

function twodigitize(number){
    if(number < 10){
        number = '0' + number;
    }
    return number;
}

function dateFromRFC1123(rfc){
    let datetime = new Date(Date.parse(rfc));
    let year = ('' + datetime.getFullYear()).substr(2);
    let month = twodigitize(datetime.getMonth());
    let day = twodigitize(datetime.getDay());
    let hours = twodigitize(datetime.getHours());
    let minutes = twodigitize(datetime.getMinutes());
    let seconds = twodigitize(datetime.getSeconds());
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

function addRowPackagesToDataTable(pckg){
    const packageId = pckg.escrow_pubkey;
    // let launch_time = new Date(Date.parse(pckg.launch_date));  TODO ok to remove? (unused)
    // launch_time = launch_time.getFullYear() + '-' + launch_time.getMonth() + '-' + launch_time.getDay();
    let last_event_time = new Date(Date.parse(pckg.events.last().timestamp));
    dataTablePackage.row.add([
        pckg.escrow_pubkey, pckg.short_package_id, pckg.status, pckg.description, pckg.to_address,
        dateFromRFC1123(pckg.launch_date), dateFromRFC1123(pckg.events.last().timestamp),
    ]).draw(true);
}

function generateKeypairStellar(user){
    try{
        return StellarBase.Keypair.fromSecret(user.privateKey);
    }catch(error){
        console.error(error);
        alert('User with name "' + user.name + '" contains not corect private key');

        return null;
    }
}

function anon_requestToServer({url, data}){
    try{
        const formData = objectToFormData(data);

        return $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
        });
    }catch(error){
        console.error(error);
        alert('An error has occurred. Details in the Developer Console.');

        return null;
    }
}

function new_requestToServer(userSecret, userPublic, {url, data}){
    try{
        const fingerprint = generateFingerprint(url, data);
        const signature = signFingerprint(fingerprint, userSecret);

        const formData = objectToFormData(data);

        return $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            beforeSend: function(xhr){
                xhr.setRequestHeader('Pubkey', userPublic);
                xhr.setRequestHeader('Fingerprint', unescape(encodeURIComponent(fingerprint)));
                xhr.setRequestHeader('Signature', signature);
            },
        });
    }catch(error){
        console.error(error);
        alert('An error has occurred. Details in the Developer Console.');

        return null;
    }
}

function requestToServer({uri, data, response}){
    try{
        const url = baseUrl + uri;

        const fingerprint = generateFingerprint(url, data);
        const signature = signFingerprint(fingerprint, launcher.keypairStellar.secret());

        const formData = objectToFormData(data);

        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            beforeSend: function(xhr){
                xhr.setRequestHeader('Pubkey', launcher.keypairStellar.publicKey());
                xhr.setRequestHeader('Fingerprint', fingerprint);
                xhr.setRequestHeader('Signature', signature);
            },
            success: function(result){
                response(result);
            },
            error: function(result){
                response(result);
            },
        });
    }catch(error){
        console.error(error);
        alert('An error has occurred. Details in the Developer Console.');
    }
}

function printResponse(selectorPanel, response){
    $(selectorPanel + '#responseFormGroup').show();

    $(selectorPanel + '#response').empty().append(JSON.stringify(response));
}

function objectToFormData(data = null){
    const formData = new FormData();

    if(!data) return formData;

    for(let key in data) formData.append(key, data[key]);

    return formData;
}

function generateFingerprint(uri, kwargs = null){
    if(kwargs == null){
        kwargstring = '';
    }else{
        const ert = [''];
        for(let key in kwargs) ert.push(`${key}=${kwargs[key]}`);
        kwargstring = ert.join(',');
    }
    return `${uri}${kwargstring},${Date.now() * 1000}`;
}

function signFingerprint(fingerprint, secret){
    const fingerprintBuffer = stringToArrayBuffer(fingerprint);
    const signature = StellarBase.Keypair.fromSecret(secret).sign(fingerprintBuffer);
    return arrayBufferToBase64(signature);
}

function signTransaction(transaction, keypairStellar){
    const transactionStellar = new StellarBase.Transaction(transaction);
    transactionStellar.sign(keypairStellar);
    const transactionEnvelope = transactionStellar.toEnvelope();
    return arrayBufferToBase64(transactionEnvelope.toXDR());
}

function stringToArrayBuffer(str){
    const bytes = [];
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        bytes.push(char >>> 8);
        bytes.push(char & 0xff);
    }
    return bytes;
}

function arrayBufferToBase64(buffer){
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

// Save description for create package
function saveDescriptionForCreatePackage(description){
    const descriptions = getDescriptionForCreatePackage();

    descriptions.unshift(description);
    descriptions.splice(5);

    localStorage.setItem('descriptionAutofill', JSON.stringify(descriptions));
}

function getDescriptionForCreatePackage(){
    return JSON.parse(localStorage.getItem('descriptionAutofill')) || [];
}

// Property for array
Array.prototype.last = function(){
    return this[this.length - 1];
};

// UiLoadingScreen
function showLoadingScreen(info = ''){
    $('#loadingScreen').show();
    $('#loadingScreen #info').text(info);
}

function infoLoadingScreen(info = ''){
    $('#loadingScreen #info').text(info);
}

function hideLoadingScreen(){
    $('#loadingScreen').hide();
}

// Convert date time
function dateToYMD(date){
    const strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = date.getDate();
    const m = strArray[date.getMonth()];
    const y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
}

function changesCheckBoxEnterDescription(checkBox){
    if(checkBox.checked === true){
        $('#createPackageModal #description').show();
    }else{
        $('#createPackageModal #description').hide();
    }
}

function FillAllPackages(){
    showLoadingScreen();
    dataTablePackage.clear().draw();
    $.ajax({
        type: 'POST',
        url: baseUrlRouter + '/events',
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(result){
            const events = result.events.packages_events;
            const packages = [];
            let index;
            for(index = 0; index < events.length; index++){

                let opacity = 1;
                if(events[index].event_type == 'location changed'){
                   opacity = 0.5;
                }
                heat.addLatLng(events[index].location.split(',').concat(opacity));

                if(
                    packages.hasOwnProperty(events[index].escrow_pubkey) ||
                    !events[index].hasOwnProperty('escrow_pubkey')
                ){continue;}

                if(window.location.hash.substring(1) === events[index].escrow_pubkey){
                    showPackageDetails(events[index].escrow_pubkey);
                }

                packages[events[index].escrow_pubkey] = true;
                $.ajax({
                    type: 'POST',
                    url: baseUrlRouter + '/package',
                    dataType: 'json',
                    data: objectToFormData({escrow_pubkey: events[index].escrow_pubkey}),
                    processData: false,
                    contentType: false,
                    success: function(result){
                        addRowPackagesToDataTable(result.package);
                    },
                    error: function(result){
                        console.error(result);
                    },
                });
            }
            hideLoadingScreen();
        },
        error: function(result){
            hideLoadingScreen();
            console.error(result);
        },
    });
}

function showPackageDetails(escrow_pubkey){
    const redIcon = L.icon({
        iconUrl: 'red_location.png',
        iconSize: [38, 38],
        iconAnchor: [22, 37],
        popupAnchor: [-3, -38],
    });
    const orangeIcon = L.icon({
        iconUrl: 'orange_location.png',
        iconSize: [38, 38],
        iconAnchor: [22, 37],
        popupAnchor: [-3, -38],
    });
    const greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    const tiles = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 2,
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    });

    showLoadingScreen();

    requests.router.getPackage({escrow_pubkey}).done(function(response){
        const pckg = response.package;
        $('#name').text(pckg.short_package_id);
        $('#fullEscrowPubkey').text(pckg.escrow_pubkey);
        $('#status').empty().append(pckg.status);
        $('#description').empty().append(pckg.description);
        $('#explorerUrl').attr('href', pckg.blockchain_url);
        $('#deadline').empty().append(dateToYMD(new Date(pckg.deadline * 1000)));
        $('#packageDetailsModal #img').attr('src', '');

        // Get photo
        requests.router.getPackagePhoto({escrow_pubkey: pckg.escrow_pubkey}).done(function(data){
            $('#packageDetailsModal #img').attr(
                'src', 'data:image/png;base64,' + (data.package_photo ? data.package_photo.photo : imgSrcBase64),
            );
        });

        $('#packageDetailsModal').modal({
            show: true,
        });
        hideLoadingScreen();

        $('#packageDetailsModal').on('shown.bs.modal', function(){

            let marker;
// Reset map.
            if(mapOnPackageDetailsModal){
                mapOnPackageDetailsModal.remove();
            }
            mapOnPackageDetailsModal = L.map('map').setView([0, 0], 1).addLayer(tiles);
            L.control.scale({imperial: false}).addTo(mapOnPackageDetailsModal);
            locationsOnPackageDetailsModal = [];
            markersOnPackageDetailsModal = [];

            // Display events
            const tabEvents = $('#packageDetailsModal #tab-events tbody');
            tabEvents.empty();

            for(let index = 0; index < pckg.events.length; index++){
                const event = pckg.events[index];

                // Display marker on map
                const location = event.location.split(',');
                marker = L.marker([location[0], location[1]], {icon: redIcon});  //TODO should be red for source and ornage for dest, for example...
                marker.bindPopup('<b>Event type: ' + event.event_type + '</b><br>Time: ' + event.timestamp + '.');
                marker.addTo(mapOnPackageDetailsModal);
                locationsOnPackageDetailsModal.push([location[0], location[1]]);
                markersOnPackageDetailsModal.push(marker);

                // Add rows
                tabEvents.append('<tr><th scope="row">' + index + '</th><td>' + event.event_type + '</td><td>' +
                    event.location + '</td><td>' + event.timestamp + '</td><td> ***' +
                    event.user_pubkey.substring(event.user_pubkey.length - 3) + '</td><td>' + (event.photo_id || '') +
                    '</td><td>' + (event.kwargs || '') + '</td></tr>');
            }
            // Add destination.
            const eventLocation = pckg.to_location.split(',');
            marker = L.marker(eventLocation, {icon: greenIcon});
            locationsOnPackageDetailsModal.push(eventLocation);
            marker.bindPopup('<b>final destination</b>');
            marker.addTo(mapOnPackageDetailsModal);
            markersOnPackageDetailsModal.push(marker);

            // Draw path and fit map.
            const packagePath = new L.Polyline(locationsOnPackageDetailsModal).addTo(mapOnPackageDetailsModal);
            mapOnPackageDetailsModal.fitBounds(packagePath.getBounds());
        });
    }).catch(function(error){
        alert('Error getting Packages info');
        console.error(error);
        hideLoadingScreen();
    });
}
