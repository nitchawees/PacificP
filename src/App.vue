<template>
  <div id="app">
    <MainNavbar />
    <div class="main d-flex">
      <SideBar />
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';
import MainFooter from './components/MainFooter.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  data() {
    return {
      view: "detail",
    };
  },
  components: {
    MainNavbar,
    MainFooter,
    SideBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  overflow: auto;
}
</style>
