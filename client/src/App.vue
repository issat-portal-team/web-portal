<template>
  <div id="app">
    <!-- <b-navbar class="nav">
      <template slot="start">
        <b-navbar-item href="/">Home</b-navbar-item>
        <b-navbar-item href="/Library">Library</b-navbar-item>
        <b-navbar-item href="/">Browse</b-navbar-item>
        <b-navbar-item href="/book">Random</b-navbar-item>

        <search-bar />
      </template>

      <template slot="end"></template>
    </b-navbar>-->
    <nav class="custom-nav">
      <a href="/">Home</a>
      <a href="/library">Library</a>
      <a href="/">Browse</a>
      <a href="/book">Random</a>
      <search-bar />
      <AuthTestCheck />
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import SearchBar from "@/components/SearchBar.vue";
import AuthTestCheck from "@/components/authentication/AuthTestCheck.vue";

export default Vue.extend({
  name: "App",
  components: {
    SearchBar,
    AuthTestCheck
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.custom-nav {
  // padding: 16px;
  // width: 100%;
  // margin: 0;
  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
  display: flex;
  align-items: center;
  & > a {
    padding: 16px;
    margin-right: 16px;
    &:hover {
      background: lightgray;
    }
  }
}
</style>
