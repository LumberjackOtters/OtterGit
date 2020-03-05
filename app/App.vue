<template>
  <div id="app">
    <md-badge class="md-square md-primary" md-content="New" />
    <!-- <CBadge color="primary"> Primary color badge</CBadge> -->
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
// @import "~@coreui/coreui/scss/coreui";
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  // primary: #3fffbe, // The primary color of your brand
  // accent: #1a11e8, // The secondary color of your brand
  theme: dark // This can be dark or light
));

@import "~vue-material/dist/theme/all"; // Apply the theme


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>