<template>
  <div id="app" class="bg-gray w-full h-screen">
    <Nav />
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav,
    
  }
}
</script>

<style>

</style>
