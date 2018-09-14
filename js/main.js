var customerData = []
var selectUser = {}

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

  var uri = 'http://itd.pub:11250/v3/add_event'

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

    $('#addEventResponseFormGroup').hide()
    $('#addEventResponseFormGroup').show()

    $('#addEventResponse')
      .empty()
      .append(JSON.stringify(response))
  })
})

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
