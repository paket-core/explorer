<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <ul>
      <li v-for="item in list" :key="item.sender"> {{item.sender}} </li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      list: [
        { sender: 'sender1' },
        { sender: 'sender2' },
        { sender: 'sender3' },
        { sender: 'sender4' }
      ]
    }
  },
  created() {
    this.list = window.testlist;
  }
}
</script>
