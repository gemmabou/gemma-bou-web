<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { GenericVerticalAlign } from "@/types";

const MAIN_CLASS = "row";

@Component({})
export default class Row extends Vue {
  @Prop() spaced: boolean;
  @Prop({ default: "center" }) verticalAlign: GenericVerticalAlign;

  get className() {
    let result = MAIN_CLASS;
    if (this.spaced) {
      result += ` spaced`;
    }
    if (this.verticalAlign) {
      result += ` align-${this.verticalAlign}`;
    }
    return result;
  }
}
</script>
