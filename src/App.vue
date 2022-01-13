<template>
  <div id="app" class="bg-gray w-full h-screen">
    <Nav />
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
// import Home from './components/Home.vue'
// import Login from './components/Login.vue'
// import Register from './components/Register.vue'
// import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
  
}
</script>

<style>

</style>
