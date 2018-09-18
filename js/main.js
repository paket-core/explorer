var customerData = []
var selectUser = {}
var baseUrl = "http://itd.pub:11250"

$(document).ready(function() {
  $("#applyCustomerData").click(function() {
    var json = $("#textareaCustomerData").val()
    customerData = JSON.parse(json)

    // the first user is selected by default
    setUser(customerData[0])

    customerData.forEach(function(element, index) {
      $("#dropdownUsers").append(
        '<li><a href="#" id="' + index + '">' + element.name + "</a></li>"
      )

      $("#dropdownUsers li a:eq(" + index + ")").click(element, function(
        event
      ) {
        setUser(event.data)
      })
    })

    $("#panelCustomerData").hide()
    $("#panelRequests").show()
  })

  $("#addEvent #tryItOut").click(function() {
    var selectorPanel = "#addEvent "

    var data = {
      event_type: $(selectorPanel + "#eventType").val(),
      location: $(selectorPanel + "#location").val(),
    }

    requestToServer({
      uri: "/v3/add_event",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#acceptPackage #tryItOut").click(function() {
    var selectorPanel = "#acceptPackage "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
      location: $(selectorPanel + "#location").val(),
    }

    requestToServer({
      uri: "/v3/accept_package",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#assignPackage #tryItOut").click(function() {
    var selectorPanel = "#assignPackage "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
      location: $(selectorPanel + "#location").val(),
    }

    requestToServer({
      uri: "/v3/assign_package",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#assignXdrs #tryItOut").click(function() {
    var selectorPanel = "#assignXdrs "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
      location: $(selectorPanel + "#location").val(),
      kwargs: $(selectorPanel + "#kwargs").val(),
    }

    requestToServer({
      uri: "/v3/assign_xdrs",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#availablePackages #tryItOut").click(function() {
    var selectorPanel = "#availablePackages "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
      location: $(selectorPanel + "#location").val(),
      kwargs: $(selectorPanel + "#kwargs").val(),
    }

    requestToServer({
      uri: "/v3/available_packages",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#changedLocation #tryItOut").click(function() {
    var selectorPanel = "#changedLocation "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
      location: $(selectorPanel + "#location").val(),
    }

    requestToServer({
      uri: "/v3/changed_location",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#createPackage #tryItOut").click(function() {
    var selectorPanel = "#createPackage "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),

      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
      recipient_pubkey: $(selectorPanel + "#recipientPubkey").val(),
      launcher_phone_number: $(selectorPanel + "#launcherPhoneNumber").val(),
      recipient_phone_number: $(selectorPanel + "#recipientPhoneNumber").val(),
      payment_buls: $(selectorPanel + "#paymentBuls").val(),
      collateral_buls: $(selectorPanel + "#collateralBuls").val(),
      deadline_timestamp: $(selectorPanel + "#deadlineTimestamp").val(),
      description: $(selectorPanel + "#description").val(),
      from_location: $(selectorPanel + "#fromLocation").val(),
      to_location: $(selectorPanel + "#foLocation").val(),
      from_address: $(selectorPanel + "#fromAddress").val(),
      to_address: $(selectorPanel + "#toAddress").val(),
      event_location: $(selectorPanel + "#eventLocation").val(),
    }

    requestToServer({
      uri: "/v3/create_package",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#events #tryItOut").click(function() {
    var selectorPanel = "#events "

    var data = {}

    requestToServer({
      uri: "/v3/events",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#myPackages #tryItOut").click(function() {
    var selectorPanel = "#myPackages "

    var data = {}

    requestToServer({
      uri: "/v3/my_packages",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#package #tryItOut").click(function() {
    var selectorPanel = "#package "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
    }

    requestToServer({
      uri: "/v3/package",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $("#packagePhoto #tryItOut").click(function() {
    var selectorPanel = "#packagePhoto "

    var data = {
      escrow_pubkey: $(selectorPanel + "#escrowPubkey").val(),
    }

    requestToServer({
      uri: "/v3/package_photo",
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })
})

function setUser(user) {
  selectUser = user

  $("#userName")
    .empty()
    .append(user.name)

  $("#privateKey")
    .empty()
    .append(user.privateKey)
}

function requestToServer({ uri, data, response }) {
  try {
    var url = baseUrl + uri

    var keypair = StellarBase.Keypair.fromSecret(selectUser.privateKey)
    var pubkey = keypair.publicKey()
    var fingerprint = generateFingerprint(url, data)
    var signature = signFingerprint(fingerprint, keypair.secret())

    var formData = objectToFormData(data)

    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Pubkey", keypair)
        xhr.setRequestHeader("Fingerprint", fingerprint)
        xhr.setRequestHeader("Signature", signature)
      },
      success: function(result) {
        response(result)
      },
      error: function(result) {
        response(result)
      },
    })
  } catch (error) {
    alert("An error has occurred. Details in the Developer Console.")
  }
}

function printResponse(selectorPanel, response) {
  $(selectorPanel + "#responseFormGroup").show()

  $(selectorPanel + "#response")
    .empty()
    .append(JSON.stringify(response))
}

function objectToFormData(data = null) {
  var formData = new FormData()

  if (!data) return formData

  for (var key in data) {
    formData.append(key, data[key])
  }

  return formData
}

function generateFingerprint(uri, kwargs = null) {
  if (kwargs == null) {
    kwargstring = ""
  } else {
    var ert = [""]
    for (var key in kwargs) {
      ert.push(`${key}=${kwargs[key]}`)
    }
    kwargstring = ert.join(",")
  }
  return `${uri}${kwargstring},${Date.now() * 1000}`
}

function signFingerprint(fingerprint, secret) {
  var fingerprintBuffer = stringToArrayBuffer(fingerprint)
  var signature = StellarBase.Keypair.fromSecret(secret).sign(fingerprintBuffer)
  return arrayBufferToBase64(signature)
}

function stringToArrayBuffer(str) {
  var bytes = []
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i)
    bytes.push(char >>> 8)
    bytes.push(char & 0xff)
  }
  return bytes
}

function arrayBufferToBase64(buffer) {
  var binary = ""
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
