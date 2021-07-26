<template>
  <div id="app">
    <bou-navbar :items="navbarItems" />
    <div class="main-page">
      <router-view />
    </div>
    <bou-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavbarItem } from "./types";

@Component({})
export default class App extends Vue {
  navbarItems: NavbarItem[] = [
    {
      displayName: "Work",
      route: "/",
    },
    {
      displayName: "About",
      route: "/about",
    },
  ];
}
</script>

<style lang="scss">
body {
  background-color: $primary1;
}

.main-page {
  margin-top: $navbarHeight;
}

@media (max-width: $sm-to-md-breakpoint) {
  .main-page {
    margin-top: $navbarHeightXS;
  }
}

.navbar-icons {
  float: right;
}
</style>
