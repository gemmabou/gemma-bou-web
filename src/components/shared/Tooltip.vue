<template>
  <div :class="className">
    <slot></slot>
    <div :class="overlayClassname">
      <div :class="textClassname">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  GenericPosition,
  GenericBackgroundColor,
  GenericGradient,
  GenericShadowType,
} from "@/types";

const MAIN_CLASS = "bou-tooltip";
const OVERLAY_CLASS = "bou-tooltip-overlay";
const TEXT_CLASS = "bou-tooltip-text";

@Component({})
export default class Tooltip extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: "top" }) position: GenericPosition;
  @Prop({ default: "transparent" }) background: GenericBackgroundColor;
  @Prop({ default: "none" }) gradient: GenericGradient;
  @Prop({ default: "none" }) shadowType: GenericShadowType;

  get className() {
    let result = MAIN_CLASS;

    return result;
  }

  get overlayClassname() {
    let result = OVERLAY_CLASS;
    if (this.position) {
      result += ` position-${this.position}`;
    }
    if (this.shadowType != "none") {
      result += ` shadow-${this.shadowType}`;
    }
    return result;
  }
  
  get textClassname() {
    let result = TEXT_CLASS;

    if (this.background != "transparent") {
      result += ` background-${this.background}`;
    }
    if (this.gradient != "none") {
      result += ` gradient-${this.gradient}`;
    }

    return result;
  }
}
</script>

<style lang="scss">
.bou-tooltip {
  position: relative;
  display: inline-block;

  .bou-tooltip-overlay {
    @include shadows;

    position: absolute;
    z-index: 1;

    visibility: hidden;
    margin-bottom: 0.4rem;
    
    width: 100%;

    opacity: 0;
    transition: opacity 200ms;
    padding: 0.125rem 0.255rem;

    &.position-top {
      bottom: 70%;
    }
    &.position-bottom {
      top: 100%;
    }
    &.position-left {
      top: -5px;
      right: 105%;
    }
    &.position-right {
      top: -5px;
      left: 105%;
    }

    .bou-tooltip-text {
      @include backgrounds;
      @include subtitle-3;

      text-align: center;
      border: $normal-border;
      border-radius: 6px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &:hover {
    .bou-tooltip-overlay {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
