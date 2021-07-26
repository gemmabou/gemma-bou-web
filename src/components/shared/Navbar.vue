<template>
  <nav :class="className">
    <bou-container :fluent="true">
      <!-- Desktop layout (screenWidht > sm) -->
      <bou-flexbox v-show="!isMobileResolution" justifyContent="space-between">
        <NavbarItems :items="items" direction="row" />
        <bou-social-media-links />
      </bou-flexbox>

      <!-- Mobile layout (screenWidht < sm) -->
      <bou-flexbox v-show="isMobileResolution" justifyContent="end">
        <bou-full-screen-overlay v-model="isOverlayOpened">
          <template v-slot:default="{ open }">
            <bou-icon icon="Menu" @click="open" />
          </template>
          <template v-slot:content="{ close }">
            <NavbarItems :items="items" direction="column" @click="close" />
          </template>
          <template v-slot:footer>
            <div class="overlay-footer-links">
              <bou-social-media-links />
            </div>
          </template>
        </bou-full-screen-overlay>
      </bou-flexbox>
    </bou-container>
  </nav>
</template>

<script lang="ts">
import { NavbarItem, ScreenSize } from "@/types";
import { getScreenSize } from "@/utils";
import { Component, Vue, Prop } from "vue-property-decorator";
import MenuIcon from "./navbar/MenuIcon.vue";
import NavbarItems from "./navbar/NavbarItems.vue";

const MAIN_CLASS = "bou-navbar";

@Component({
  components: {
    MenuIcon,
    NavbarItems,
  },
})
export default class Navbar extends Vue {
  @Prop({ default: [] }) items: NavbarItem[];

  isOverlayOpened = false;

  get className() {
    let result = MAIN_CLASS;
    return result;
  }

  get isMobileResolution() {
    let result = false;
    const screenSize = getScreenSize(this.windowWidth);
    if (screenSize <= ScreenSize.sm) {
      result = true;
    }
    return result;
  }
}
</script>

<style lang="scss">
$blur: 4px;

.bou-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: $navbarHeight;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba($primary1, 0.9);
  -webkit-backdrop-filter: blur($blur);
  backdrop-filter: blur($blur);
  z-index: 3;

  &.mobile {
    height: $navbarHeightXS;
  }

  .bou-button {
    float: left;
    margin: 0.265rem;
  }

  .bou-icon {
    float: right;
  }

  .overlay-footer-links {
    width: 30%;
    margin: auto;
    padding: 2.5rem;
  }
}

@media (max-width: $sm-to-md-breakpoint) {
  .bou-navbar {
    height: $navbarHeightXS;
  }
}
</style>
