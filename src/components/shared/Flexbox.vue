<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  GenericVerticalAlign,
  GenericContentJustification,
  GenericFlexDirection,
} from "@/types";

const MAIN_CLASS = "flexbox";

@Component({})
export default class Row extends Vue {
  @Prop({ default: "center" }) verticalAlign: GenericVerticalAlign;
  @Prop({ default: "center" }) justifyContent: GenericContentJustification;
  @Prop({ default: "row" }) flexDirection: GenericFlexDirection;

  get className() {
    let result = MAIN_CLASS;
    if (this.verticalAlign) {
      result += ` align-${this.verticalAlign}`;
    }
    if (this.justifyContent) {
      result += ` justify-${this.justifyContent}`;
    }
    if (this.flexDirection) {
      result += ` flex-direction-${this.flexDirection}`;
    }
    return result;
  }
}
</script>

<style lang="scss">
.flexbox {
  display: flex;
  @include vertical-aligns;
  @include content-justifications;
  @include flex-directions;
}
</style>
