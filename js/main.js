var customerData = []
var launcher = {}
var baseUrlRouter = 'http://itd.pub:11250/v3'
var baseUrlBridge = 'http://itd.pub:11251/v3'
var baseUrlFund = 'http://itd.pub:11252/v2'
var dataTablePackage = null

$(document).ready(function() {
  // Refresh DataTable
  dataTablePackage = $('#tablePackages').DataTable()

  // Configuration Stellar Network
  // StellarBase.Network.useTestNetwork()
  var network = new StellarBase.Network('Test SDF Network ; September 2015')
  StellarBase.Network.use(network)

  $('#applyCustomerData').click(function() {
    var json = $('#textareaCustomerData').val()
    customerData = JSON.parse(json)

    for (var index = 0; index < customerData.length; index++) {
      var element = customerData[index]
      customerData[index].keypairStellar = generateKeypairStellar(element)

      $('#dropdownUsers').append(
        '<li><a href="#" id="' + index + '">' + element.name + '</a></li>'
      )

      $('#dropdownUsers li a:eq(' + index + ')').click(element, function(
        event
      ) {
        applyChangeUser(event.data)
      })
    }

    // the first user is selected by default
    applyChangeUser(customerData[0])

    $('.dropdown-toggle').dropdown()
    $('#panelCustomerData').hide()
    $('#panelRequests').show()
  })

  $('#addEvent #tryItOut').click(function() {
    var selectorPanel = '#addEvent '

    var data = {
      event_type: $(selectorPanel + '#eventType').val(),
      location: $(selectorPanel + '#location').val(),
    }

    requestToServer({
      uri: '/v3/add_event',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#acceptPackage #tryItOut').click(function() {
    var selectorPanel = '#acceptPackage '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
      location: $(selectorPanel + '#location').val(),
    }

    requestToServer({
      uri: '/v3/accept_package',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#assignPackage #tryItOut').click(function() {
    var selectorPanel = '#assignPackage '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
      location: $(selectorPanel + '#location').val(),
    }

    requestToServer({
      uri: '/v3/assign_package',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#assignXdrs #tryItOut').click(function() {
    var selectorPanel = '#assignXdrs '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
      location: $(selectorPanel + '#location').val(),
      kwargs: $(selectorPanel + '#kwargs').val(),
    }

    requestToServer({
      uri: '/v3/assign_xdrs',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#availablePackages #tryItOut').click(function() {
    var selectorPanel = '#availablePackages '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
      location: $(selectorPanel + '#location').val(),
      kwargs: $(selectorPanel + '#kwargs').val(),
    }

    requestToServer({
      uri: '/v3/available_packages',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#changedLocation #tryItOut').click(function() {
    var selectorPanel = '#changedLocation '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
      location: $(selectorPanel + '#location').val(),
    }

    requestToServer({
      uri: '/v3/changed_location',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#createPackage #tryItOut').click(function() {
    var selectorPanel = '#createPackage '

    var data = {
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
    }

    requestToServer({
      uri: '/v3/create_package',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#events #tryItOut').click(function() {
    var selectorPanel = '#events '

    var data = {}

    requestToServer({
      uri: '/v3/events',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#myPackages #tryItOut').click(function() {
    var selectorPanel = '#myPackages '

    var data = {}

    requestToServer({
      uri: '/v3/my_packages',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#package #tryItOut').click(function() {
    var selectorPanel = '#package '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
    }

    requestToServer({
      uri: '/v3/package',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#packagePhoto #tryItOut').click(function() {
    var selectorPanel = '#packagePhoto '

    var data = {
      escrow_pubkey: $(selectorPanel + '#escrowPubkey').val(),
    }

    requestToServer({
      uri: '/v3/package_photo',
      data: data,
      response: function(result) {
        printResponse(selectorPanel, result)
      },
    })
  })

  $('#info #openCreatePackageModal').click(function() {
    var recipientSelect = $('#createPackageModal #recipient')
    var courierSelect = $('#createPackageModal #courier')

    recipientSelect.empty()
    courierSelect.empty()

    // Recipient in modal window
    for (var index = 0; index < customerData.length; index++) {
      var element = customerData[index]

      recipientSelect.append(
        '<option value="' + index + '">' + element.name + '</option>'
      )

      courierSelect.append(
        '<option value="' + index + '">' + element.name + '</option>'
      )
    }

    // Show modal window
    $('#createPackageModal').modal()
  })

  $('#createPackageModal #createPackage').click(function() {
    var selectorPanel = '#createPackageModal '

    // Get recipient
    var recipientId = $(selectorPanel + '#recipient').val()
    var recipientUser = customerData[recipientId]

    // Get recipient
    var courierId = $(selectorPanel + '#courier').val()
    var courierUser = customerData[courierId]

    // Get deadline
    var deadline = $(selectorPanel + 'input[name=deadline]').val()

    // Get date
    var today = new Date()
    if (deadline == '1Day') {
      // 1 day from now
      var deadlineUnixTimestamp =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 1
        ).getTime() / 1000
    } else {
      // 1 week from now
      var deadlineUnixTimestamp =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 7
        ).getTime() / 1000
    }

    // Get values
    var paymentBuls = $(selectorPanel + 'input[name=paymentBuls]').val()
    var collateralBuls = $(selectorPanel + 'input[name=collateralBuls]').val()
    var description = $(selectorPanel + '#description').val()
    var fromLocation = $(selectorPanel + '#fromLocation').val()
    var toLocation = $(selectorPanel + '#toLocation').val()
    var fromAddress = $(selectorPanel + '#fromAddress').val()
    var toAddress = $(selectorPanel + '#toAddress').val()
    var eventLocation = $(selectorPanel + '#eventLocation').val()

    // 1) Create a pubkey for the escrow
    // generate new Keypair
    var escrowKeypair = StellarBase.Keypair.random()
    var escrowPubkey = escrowKeypair.publicKey()

    // 2) Call prepare_account on bridge as current user (launcher), sign and submit the tx to bridge
    requests.bridge
      .prepareAccount({
        from_pubkey: launcher.keypairStellar.publicKey(),
        new_pubkey: escrowPubkey,
      })
      .done(function(response) {
        var signedTransaction = signTransaction(
          response.transaction,
          launcher.keypairStellar
        )
        // Submit transaction
        requests.bridge
          .submitTransaction({ signedTransaction })
          .done(function(response) {
            // 3) Call prepare_trust on bridge as escrow account (launcher), sign and submit the tx to bridge
            requests.bridge
              .prepareTrust({
                from_pubkey: escrowPubkey,
              })
              .done(function(response) {
                var signedTransaction = signTransaction(
                  response.transaction,
                  launcher.keypairStellar
                )
                // Submit transaction
                requests.bridge
                  .submitTransaction({ signedTransaction })
                  .done(function(response) {
                    // 4) Call prepare_escrow on bridge as escrow account, sign and submit the tx to bridge
                    requests.bridge
                      .prepareEscrow({
                        launcher_pubkey: escrowPubkey,
                        courier_pubkey: courierUser.keypairStellar.publicKey(),
                        recipient_pubkey: recipientUser.keypairStellar.publicKey(),
                        payment_buls: paymentBuls,
                        collateral_buls: collateralBuls,
                        deadline_timestamp: deadlineUnixTimestamp,
                      })
                      .done(function(response) {
                        var signedTransaction = signTransaction(
                          response.package_details.set_options_transaction,
                          launcher.keypairStellar
                        )
                        // Submit transaction
                        requests.bridge
                          .submitTransaction({ signedTransaction })
                          .done(function(response) {
                            // 5) Call prepare_send_buls on bridge with the payment amount as the current user (launcher), sign and submit the tx to bridge
                            requests.bridge
                              .prepareSendBuls({
                                from_pubkey: launcher.keypairStellar.publicKey(),
                                to_pubkey: escrowPubkey,
                                amount_buls: paymentBuls,
                              })
                              .done(function(response) {
                                var signedTransaction = signTransaction(
                                  response.transaction,
                                  launcher.keypairStellar
                                )
                                // Submit transaction
                                requests.bridge
                                  .submitTransaction({ signedTransaction })
                                  .done(function(response) {
                                    // 6) Call prepare_send_buls on bridge with the collateral amount as the designated courier, sign and submit the tx to bridge
                                    requests.bridge
                                      .prepareSendBuls({
                                        from_pubkey: courierUser.keypairStellar.publicKey(),
                                        to_pubkey: escrowPubkey,
                                        amount_buls: collateralBuls,
                                      })
                                      .done(function(response) {
                                        var signedTransaction = signTransaction(
                                          response.transaction,
                                          launcher.keypairStellar
                                        )
                                        // Submit transaction
                                        requests.bridge
                                          .submitTransaction({
                                            signedTransaction,
                                          })
                                          .done(function(response) {
                                            // 7) Call create_package on router
                                            requests.router
                                              .createPackage({
                                                escrow_pubkey: escrowPubkey,
                                                recipient_pubkey: recipientUser.keypairStellar.publicKey(),
                                                launcher_phone_number:
                                                  launcher.phoneNumber,
                                                recipient_phone_number:
                                                  recipientUser.phoneNumber,
                                                payment_buls: paymentBuls,
                                                collateral_buls: collateralBuls,
                                                deadline_timestamp: deadlineUnixTimestamp,
                                                description: description,
                                                from_location: fromLocation,
                                                to_location: toLocation,
                                                from_address: fromAddress,
                                                to_address: toAddress,
                                                event_location: eventLocation,
                                              })
                                              .done(function(response) {
                                                // Save escrow Pubkey/Secret (escrowKeypair) to local storage
                                                saveKeypairForPackage(
                                                  escrowKeypair
                                                )

                                                addRowPackagesToDataTable(
                                                  response.package
                                                )

                                                // Hide modal window
                                                $('#createPackageModal').modal(
                                                  'hide'
                                                )
                                              })
                                              .catch(function(error) {
                                                console.error(error)
                                                alert(
                                                  'An error occurred while creating the Package'
                                                )
                                              })
                                          })
                                          .catch(function(error) {
                                            var errorMessage =
                                              'Error on step: "Submit transaction -> prepare_account on bridge"'

                                            console.error(errorMessage)
                                            console.error(error)

                                            alert(errorMessage)
                                          })
                                      })
                                      .catch(function(error) {
                                        var errorMessage =
                                          'Error on step: "Submit transaction -> prepare_account on bridge"'

                                        console.error(errorMessage)
                                        console.error(error)

                                        alert(errorMessage)
                                      })
                                  })
                                  .catch(function(error) {
                                    var errorMessage =
                                      'Error on step: "Submit transaction -> prepare_account on bridge"'

                                    console.error(errorMessage)
                                    console.error(error)

                                    alert(errorMessage)
                                  })
                              })
                              .catch(function(error) {
                                var errorMessage =
                                  'Error on step: "Submit transaction -> prepare_account on bridge"'

                                console.error(errorMessage)
                                console.error(error)

                                alert(errorMessage)
                              })
                          })
                          .catch(function(error) {
                            var errorMessage =
                              'Error on step: "Submit transaction -> prepare_account on bridge"'

                            console.error(errorMessage)
                            console.error(error)

                            alert(errorMessage)
                          })
                      })
                      .catch(function(error) {
                        var errorMessage =
                          'Error on step: "Submit transaction -> prepare_account on bridge"'

                        console.error(errorMessage)
                        console.error(error)

                        alert(errorMessage)
                      })
                  })
                  .catch(function(error) {
                    var errorMessage =
                      'Error on step: "Submit transaction -> prepare_account on bridge"'

                    console.error(errorMessage)
                    console.error(error)

                    alert(errorMessage)
                  })
              })
              .catch(function(error) {
                var errorMessage =
                  'Error on step: "Submit transaction -> prepare_account on bridge"'

                console.error(errorMessage)
                console.error(error)

                alert(errorMessage)
              })
          })
          .catch(function(error) {
            var errorMessage =
              'Error on step: "Submit transaction -> prepare_account on bridge"'

            console.error(errorMessage)
            console.error(error)

            alert(errorMessage)
          })
      })
      .catch(function(error) {
        var errorMessage = 'Error on step: "Call prepare_account on bridge"'

        console.error(errorMessage)
        console.error(error)

        alert(errorMessage)
      })
  })
})

function applyChangeUser(user) {
  launcher = user

  var tablePackages = $('#tablePackages tbody')
  tablePackages.empty()

  // Change display info about user
  $('#userName')
    .empty()
    .append(user.name)

  $('#publicKey')
    .empty()
    .append(user.keypairStellar.publicKey())

  // Get all packages for this user
  requests.router
    .getMyPackages()
    .done(function(data) {
      for (var index = 0; index < data.packages.length; index++) {
        var package = data.packages[index]
        addRowPackagesToDataTable(package)
      }
    })
    .catch(function(error) {
      console.error(error)
      alert('Failed to get data from server')
    })
}

function addRowPackagesToDataTable(package) {
  var packageId = package.escrow_pubkey

  var shortPackageId =
    package.from_address.split(' ')[0] +
    '-' +
    packageId.substr(packageId.length - 3)

  var userRole = package.user_role || 'launcher'

  var launchDate = package.launch_date

  var recipientsLocation = package.from_location

  var courieredEvent = package.events
    .filter(event => event.event_type == 'couriered')
    .last()

  var receivedEvent = package.events
    .filter(event => event.event_type == 'received')
    .last()

  var launchedEvent = package.events
    .filter(event => event.event_type == 'launched')
    .last()

  var currentCustodianPackage = (
    courieredEvent ||
    receivedEvent ||
    launchedEvent
  ).user_pubkey

  dataTablePackage.row
    .add([
      shortPackageId,
      userRole,
      launchDate,
      recipientsLocation,
      currentCustodianPackage,
    ])
    .draw(true)
}

function generateKeypairStellar(user) {
  try {
    var keypair = StellarBase.Keypair.fromSecret(user.privateKey)
    return keypair
  } catch (error) {
    console.error(error)
    alert('User with name "' + user.name + '" contains not corect private key')

    return null
  }
}

var requests = {
  router: {
    baseUrl: baseUrlRouter,
    getMyPackages: function() {
      return new_requestToServer({
        url: this.baseUrl + '/my_packages',
      })
    },
    createPackage: function({
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
    }) {
      return new_requestToServer({
        url: this.baseUrl + '/create_package',
        data: {
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
        },
      })
    },
  },
  bridge: {
    baseUrl: baseUrlBridge,
    submitTransaction: function({ signedTransaction }) {
      return new_requestToServer({
        url: this.baseUrl + '/submit_transaction',
        data: {
          transaction: signedTransaction,
        },
      })
    },
    prepareAccount: function({ from_pubkey, new_pubkey }) {
      return new_requestToServer({
        url: this.baseUrl + '/prepare_account',
        data: {
          from_pubkey,
          new_pubkey,
        },
      })
    },
    prepareTrust: function({ from_pubkey }) {
      return new_requestToServer({
        url: this.baseUrl + '/prepare_trust',
        data: {
          from_pubkey,
        },
      })
    },
    prepareEscrow: function({
      launcher_pubkey,
      courier_pubkey,
      recipient_pubkey,
      payment_buls,
      collateral_buls,
      deadline_timestamp,
    }) {
      return new_requestToServer({
        url: this.baseUrl + '/prepare_escrow',
        data: {
          launcher_pubkey,
          courier_pubkey,
          recipient_pubkey,
          payment_buls,
          collateral_buls,
          deadline_timestamp,
        },
      })
    },
    prepareSendBuls: function({ from_pubkey, to_pubkey, amount_buls }) {
      return new_requestToServer({
        url: this.baseUrl + '/prepare_send_buls',
        data: {
          from_pubkey,
          to_pubkey,
          amount_buls,
        },
      })
    },
  },
  fund: {
    baseUrl: baseUrlFund,
    prepareAccount: function() {
      console.log(this.baseUrl)
    },
  },
}

function new_requestToServer({ url, data }) {
  try {
    var fingerprint = generateFingerprint(url, data)
    var signature = signFingerprint(
      fingerprint,
      launcher.keypairStellar.secret()
    )

    var formData = objectToFormData(data)

    return $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Pubkey', launcher.keypairStellar.publicKey())
        xhr.setRequestHeader('Fingerprint', fingerprint)
        xhr.setRequestHeader('Signature', signature)
      },
    })
  } catch (error) {
    console.error(error)
    alert('An error has occurred. Details in the Developer Console.')

    return null
  }
}

function requestToServer({ uri, data, response }) {
  try {
    var url = baseUrl + uri

    var fingerprint = generateFingerprint(url, data)
    var signature = signFingerprint(
      fingerprint,
      launcher.keypairStellar.secret()
    )

    var formData = objectToFormData(data)

    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Pubkey', launcher.keypairStellar.publicKey())
        xhr.setRequestHeader('Fingerprint', fingerprint)
        xhr.setRequestHeader('Signature', signature)
      },
      success: function(result) {
        response(result)
      },
      error: function(result) {
        response(result)
      },
    })
  } catch (error) {
    console.error(error)
    alert('An error has occurred. Details in the Developer Console.')
  }
}

function printResponse(selectorPanel, response) {
  $(selectorPanel + '#responseFormGroup').show()

  $(selectorPanel + '#response')
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

function signTransaction(transaction, keypairStellar) {
  var transactionStellar = new StellarBase.Transaction(transaction)
  transactionStellar.sign(keypairStellar)
  var transactionEnvelope = transactionStellar.toEnvelope()
  var resultXDR = arrayBufferToBase64(transactionEnvelope.toXDR())
  return resultXDR
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

// Save escrow Pubkey/Secret (escrowKeypair) to local storage
function saveKeypairForPackage(escrowKeypair) {
  var listKeypair = getKeypairForPackage()
  listKeypair.push({
    privateKey: escrowKeypair.secret(),
    publicKey: escrowKeypair.publicKey(),
  })
  localStorage.setItem('keypairForPackages', JSON.stringify(listKeypair))
}

function getKeypairForPackage() {
  var listKeypair = JSON.parse(localStorage.getItem('keypairForPackages')) || []
  return listKeypair
}

Array.prototype.last = function() {
  return this[this.length - 1]
}
