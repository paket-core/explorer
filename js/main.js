var customerData = []
var selectUser = {}
var baseUrl = 'http://itd.pub:11250'

$(document).ready(function() {})

$('#applyCustomerData').click(function() {
  var json = $('#textareaCustomerData').val()
  customerData = JSON.parse(json)

  // the first user is selected by default
  setUser(customerData[0])

  customerData.forEach(function(element, index) {
    $('#dropdownUsers').append(
      '<li><a href="#" id="' + index + '">' + element.name + '</a></li>'
    )

    $('#dropdownUsers li a:eq(' + index + ')').click(element, function(event) {
      setUser(event.data)
    })
  })

  $('#panelCustomerData').hide()
  $('#panelRequests').show()
})

function setUser(newUser) {
  selectUser = newUser

  $('#userName')
    .empty()
    .append(newUser.name)

  $('#privateKey')
    .empty()
    .append(newUser.privateKey)
}

$('#tryAddEvent').click(function() {
  var newEvent = {
    event_type: $('#addEventType').val(),
    location: $('#addEventLocation').val(),
  }

  var uri = baseUrl + '/v3/add_event'

  var keypair = StellarBase.Keypair.fromSecret(selectUser.privateKey)
  var fingerprint = generateFingerprint(uri, newEvent)
  var signature = signFingerprint(fingerprint, keypair.secret())

  var formData = new FormData()
  formData.append('event_type', newEvent.event_type)
  formData.append('location', newEvent.location)

  $.ajax({
    type: 'POST',
    url: uri,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Pubkey', keypair.publicKey())
      xhr.setRequestHeader('Fingerprint', fingerprint)
      xhr.setRequestHeader('Signature', signature)
    },
    success: function(data) {
      console.log('success')
      console.log(data)
    },
    error: function(data) {
      console.log('error')
      console.log(data)
      alert('Open the Developer Console in your browser.')
    },
  }).done(function(response) {
    console.log('done')
    console.log(response)

    printResponse(
      $('#addEventResponseFormGroup'),
      $('#addEventResponse'),
      response
    )
  })
})

$('#tryAcceptPackage').click(function() {
  var newAcceptPackage = {
    escrow_pubkey: $('#acceptPackageEscrowPubkey').val(),
    location: $('#acceptPackageLocation').val(),
  }

  var uri = baseUrl + '/v3/accept_package'

  var keypair = StellarBase.Keypair.fromSecret(selectUser.privateKey)
  var fingerprint = generateFingerprint(uri, newAcceptPackage)
  var signature = signFingerprint(fingerprint, keypair.secret())

  var formData = new FormData()
  formData.append('event_type', newAcceptPackage.escrow_pubkey)
  formData.append('location', newAcceptPackage.location)

  $.ajax({
    type: 'POST',
    url: uri,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Pubkey', keypair.publicKey())
      xhr.setRequestHeader('Fingerprint', fingerprint)
      xhr.setRequestHeader('Signature', signature)
    },
    success: function(response) {
      printResponse(
        $('#acceptPackageResponseFormGroup'),
        $('#acceptPackageResponse'),
        response
      )
    },
    error: function(response) {
      printResponse(
        $('#acceptPackageResponseFormGroup'),
        $('#acceptPackageResponse'),
        response
      )
    },
  })
})

$('#tryCreatePackage').click(function() {
  var newCreatePackage = {
    escrow_pubkey: $('#createPackageEscrowPubkey').val(),
    recipient_pubkey: $('#createPackageRecipientPubkey').val(),
    launcher_phone_number: $('#createPackageLauncherPhoneNumber').val(),
    recipient_phone_number: $('#createPackageRecipientPhoneNumber').val(),
    payment_buls: $('#createPackagePaymentBuls').val(),
    collateral_buls: $('#createPackageCollateralBuls').val(),
    deadline_timestamp: $('#createPackageDeadlineTimestamp').val(),
    description: $('#createPackageDescription').val(),
    from_location: $('#createPackageFromLocation').val(),
    to_location: $('#createPackageToLocation').val(),
    from_address: $('#createPackageFromAddress').val(),
    to_address: $('#createPackageToAddress').val(),
    event_location: $('#createPackageEventLocation').val(),
  }

  var uri = baseUrl + '/v3/create_package'

  var keypair = StellarBase.Keypair.fromSecret(selectUser.privateKey)
  var fingerprint = generateFingerprint(uri, newCreatePackage)
  var signature = signFingerprint(fingerprint, keypair.secret())

  var formData = new FormData()
  formData.append('escrow_pubkey', newCreatePackage.escrow_pubkey)
  formData.append('recipient_pubkey', newCreatePackage.recipient_pubkey)
  formData.append(
    'launcher_phone_number',
    newCreatePackage.launcher_phone_number
  )
  formData.append(
    'recipient_phone_number',
    newCreatePackage.recipient_phone_number
  )
  formData.append('payment_buls', newCreatePackage.payment_buls)
  formData.append('collateral_buls', newCreatePackage.collateral_buls)
  formData.append('deadline_timestamp', newCreatePackage.deadline_timestamp)
  formData.append('description', newCreatePackage.description)
  formData.append('from_location', newCreatePackage.from_location)
  formData.append('to_location', newCreatePackage.to_location)
  formData.append('from_address', newCreatePackage.from_address)
  formData.append('to_address', newCreatePackage.to_address)
  formData.append('event_location', newCreatePackage.event_location)

  $.ajax({
    type: 'POST',
    url: uri,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Pubkey', keypair.publicKey())
      xhr.setRequestHeader('Fingerprint', fingerprint)
      xhr.setRequestHeader('Signature', signature)
    },
    success: function(response) {
      printResponse(
        $('#createPackageResponseFormGroup'),
        $('#createPackageResponse'),
        response
      )
    },
    error: function(response) {
      printResponse(
        $('#createPackageResponseFormGroup'),
        $('#createPackageResponse'),
        response
      )
    },
  })
})

function printResponse(elementFormGroup, elementResponse, response) {
  elementFormGroup.show()

  elementResponse.empty().append(JSON.stringify(response))
}

function generateFingerprint(uri, kwargs = null) {
  if (kwargs == null) {
    kwargstring = ''
  } else {
    var ert = ['']
    for (var key in kwargs) {
      ert.push(`${key}=${kwargs[key]}`)
    }
    kwargstring = ert.join(',')
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
  var binary = ''
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
