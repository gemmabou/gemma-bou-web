<template>
  <bou-flexbox :class="className" :flexDirection="direction">
    <bou-button
      v-for="(item, index) in items"
      :key="index"
      :anchor="true"
      :size="buttonSize"
      :label="item.displayName"
      :active="isItemActive(item.route)"
      @click="redirect(item.route)"
    />
    <bou-cv-button />
  </bou-flexbox>
</template>

<script lang="ts">
import { GenericFlexDirection, GenericSize, NavbarItem, ScreenSize } from "@/types";
import { getScreenSize } from "@/utils";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  @Prop() items: NavbarItem[];
  @Prop() direction: GenericFlexDirection;

  get className() {
    let result = "";
    if (this.direction) {
      result = `navbar-item-${this.direction}`;
    }
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

  get buttonSize() {
    let result: GenericSize = 'default';
    if(this.isMobileResolution) {
      result = 'large';
    }
    return result;
  }

  isItemActive(itemRoute: string) {
    const currentRoute = this.$route.path;
    const result = currentRoute == itemRoute;
    return result;
  }

  redirect(route: string) {
    this.$emit("click");
    const currentRoute = this.$route.path;
    if (currentRoute != route) {
      this.$router.push(route);
    }
  }
}
</script>

<style lang="scss">
.navbar-item-column {
  .bou-button {
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }
}
.navbar-item-row {
  .bou-button {
    margin-left: 1.25rem !important;
    margin-right: 1.25rem !important;
  }
}
</style>
