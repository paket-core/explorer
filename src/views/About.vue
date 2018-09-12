<template>
<div class="container">  
  <div class="form-line form-group">
    <div class="row well bs-component">
      <h3>Create a new package</h3>
      <div class="col-lg-12">
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">Pubkey</label>
          <input type="text" v-model="newPackage.pubkey" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">Fingerprint</label>
          <input type="text" v-model="newPackage.fingerprint" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">Signature</label>
          <input type="text" v-model="newPackage.signature" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">escrow_pubkey</label>
          <input type="text" v-model="newPackage.escrow_pubkey" class="form-control">
        </div>
      </div>
      <div class="col-lg-12">
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">recipient_pubkey</label>
          <input type="text" v-model="newPackage.recipient_pubkey" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">launcher_phone_number</label>
          <input type="text" v-model="newPackage.launcher_phone_number" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">recipient_phone_number</label>
          <input type="text" v-model="newPackage.recipient_phone_number" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">payment_buls</label>
          <input type="text" v-model="newPackage.payment_buls" class="form-control">
        </div>
      </div>
      <div class="col-lg-12">
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">collateral_buls</label>
          <input type="text" v-model="newPackage.collateral_buls" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">deadline_timestamp</label>
          <input type="text" v-model="newPackage.deadline_timestamp" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">description</label>
          <input type="text" v-model="newPackage.description" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">from_location</label>
          <input type="text" v-model="newPackage.from_location" class="form-control">
        </div>
      </div>
      <div class="col-lg-12">
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">to_location</label>
          <input type="text" v-model="newPackage.to_location" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">from_address</label>
          <input type="text" v-model="newPackage.from_address" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">to_address</label>
          <input type="text" v-model="newPackage.to_address" class="form-control">
        </div>
        <div class=" col-md-3">
          <label class="control-label" for="focusedInput">event_location</label>
          <input type="text" v-model="newPackage.event_location" class="form-control">
        </div>
      </div>
      <div class="col-lg-12">
        <div class=" col-md-3">
          <!--input v-el="file" type="file" name="file" id="file" v-on="change:upload"-->
        </div>
      </div>
      <div class="col-lg-12 go-line">
        <button @click="sendData" class="btn btn-primary">Send Data</button>
      </div>
    </div>
    
    <div class="col-lg-12 ul-line">
      <h3>Package List</h3>
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>line 1</th>
            <th>line 2</th>
            <th>line 3</th>
            <th>line 4</th>
          </tr>
        </thead>
        <tbody>
          <!--tr>
            <td class="">
              <span>{{newPackage.pubkey}}</span>
              <span>{{newPackage.fingerprint}}</span>
              <span>{{newPackage.signature}}</span>
              <span>{{newPackage.escrow_pubkey}}</span>
            </td>
            <td class="">
              <span>{{newPackage.recipient_pubkey}}</span>
              <span>{{newPackage.launcher_phone_number}}</span>
              <span>{{newPackage.recipient_phone_number}}</span>
              <span>{{newPackage.payment_buls}}</span>
            </td>
            <td class="">
              <span>{{newPackage.collateral_buls}}</span>
              <span>{{newPackage.deadline_timestamp}}</span>
              <span>{{newPackage.description}}</span>
              <span>{{newPackage.from_location}}</span>
            </td>
            <td class="">
              <span>{{newPackage.to_location}}</span>
              <span>{{newPackage.from_address}}</span>
              <span>{{newPackage.to_address}}</span>
              <span>{{newPackage.event_location}}</span>
            </td>
          </tr-->

          <tr v-for="(pack, index) in packages" v-bind:key="index">
            <td class="">
              <!--span>{{newPackage.pubkey}}</span>
              <span>{{newPackage.fingerprint}}</span>
              <span>{{newPackage.signature}}</span-->
              <span>{{pack.escrow_pubkey}}</span>
            </td>
            <td class="">
              <span>{{pack.recipient_pubkey}}</span>
              <span>{{pack.launcher_phone_number}}</span>
              <span>{{pack.recipient_phone_number}}</span>
              <span>{{pack.payment_buls}}</span>
            </td>
            <td class="">
              <span>{{pack.collateral_buls}}</span>
              <span>{{pack.deadline_timestamp}}</span>
              <span>{{pack.description}}</span>
              <span>{{pack.from_location}}</span>
            </td>
            <td class="">
              <span>{{pack.to_location}}</span>
              <span>{{pack.from_address}}</span>
              <span>{{pack.to_address}}</span>
              <span>{{pack.event_location}}</span>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>

import config from "./../config.js"

export default {
  name: 'about',
  data() {
    return {
      newPackage: {
        pubkey: '',
        fingerprint: '',
        signature: '',
        escrow_pubkey: '',
        recipient_pubkey: '',
        launcher_phone_number: '',
        recipient_phone_number: '',
        payment_buls: '',
        collateral_buls: '',
        deadline_timestamp:'',
        description: '',
        from_location: '',
        to_location: '',
        from_address: '',
        to_address: '',
        event_location: '',
      },
      packages: [],   
    }
  },
  methods: {
    sendData() {
      var formData = new FormData()
      formData.append('escrow_pubkey', this.newPackage.escrow_pubkey)
      formData.append('launcher_pubkey', this.newPackage.pubkey)
      formData.append('recipient_pubkey', this.newPackage.recipient_pubkey)
      formData.append('launcher_phone_number', this.newPackage.launcher_phone_number)
      formData.append('recipient_phone_number', this.newPackage.recipient_phone_number)
      formData.append('payment_buls', this.newPackage.payment_buls)
      formData.append('collateral_buls', this.newPackage.collateral_buls)
      formData.append('deadline_timestamp', this.newPackage.deadline_timestamp)
      /*
      formData.append('fingerprint', this.newPackage.fingerprint)
      formData.append('signature', this.newPackage.signature)
      formData.append('description', this.newPackage.description)
      formData.append('from_location', this.newPackage.from_location)
      formData.append('to_location', this.newPackage.to_location)
      formData.append('from_address', this.newPackage.from_address)
      formData.append('to_address', this.newPackage.to_address)
      formData.append('event_location', this.newPackage.event_location)
      */

      this.$http.post('/api/v3/debug/create_mock_package', formData).then(response => {
        // Получаешь успешный ответ с сервера
        console.log(response.body)

        this.packages.push(response.body.package)

        this.newPackage.escrow_pubkey = ""
        this.newPackage.pubkey = ""
        this.newPackage.recipient_pubkey = ""
        this.newPackage.launcher_phone_number = ""
        this.newPackage.recipient_phone_number = ""
        this.newPackage.payment_buls = ""
        this.newPackage.collateral_buls = ""
        this.newPackage.deadline_timestamp = ""
        this.newPackage.fingerprint = ""
        this.newPackage.signature = ""
        this.newPackage.description = ""
        this.newPackage.from_location = ""
        this.newPackage.to_location = ""
        this.newPackage.from_address = ""
        this.newPackage.to_address = ""
        this.newPackage.event_location = ""
      }, response => {
        // получаешь ошибку с сервера
        console.log(response)
        alert("error")
      });

      // console.log("send", this.sender)
      // if(!window.testlist) window.testlist = [];
      // window.testlist.push({sender: this.sender})
      // this.sender = '';
    }
  },
  created() {
    this.$http.post('/api/v3/debug/packages', {}).then(response => {
      this.packages = response.body.packages
      console.log(response.body)      
    }, response => {
      console.log(response)
      alert("error")
    });
  }
}
</script>

