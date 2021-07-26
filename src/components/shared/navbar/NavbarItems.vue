<template>
  <bou-flexbox :class="className" :flexDirection="direction">
    <bou-button
      v-for="(item, index) in items"
      :key="index"
      :anchor="true"
      :label="item.displayName"
      :active="isItemActive(item.route)"
      @click="redirect(item.route)"
    />
    <bou-cv-button />
  </bou-flexbox>
</template>

<script lang="ts">
import { GenericFlexDirection, NavbarItem } from "@/types";
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
