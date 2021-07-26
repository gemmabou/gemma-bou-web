<template>
  <button v-if="!anchor" :class="className" @click="onClick">
    <div class="bou-inner-button">
      <span v-if="label">{{ label }}</span>
      <slot></slot>
    </div>
  </button>
  <a v-else :class="className" :href="href" :target="target" @click="onClick">
    <div class="bou-inner-button text-center">
      <span v-if="label">{{ label }}</span>
      <slot></slot>
    </div>
  </a>
</template>

<script lang="ts">
import { GenericSize } from "@/types";
import { Component, Vue, Prop } from "vue-property-decorator";

const MAIN_CLASS = "bou-button";

@Component({})
export default class Button extends Vue {
  @Prop({ default: false }) disabled: boolean;
  @Prop({ default: false }) active: boolean;
  @Prop({ default: "default" }) size: GenericSize;
  @Prop({ default: "" }) label: string;
  @Prop() href: string;
  @Prop({ default: false }) targetBlank: boolean;
  @Prop({ default: false }) anchor: boolean;

  get className() {
    let result = MAIN_CLASS;
    if (this.disabled) {
      result += " disabled";
    }
    if (this.active) {
      result += " active";
    }
    if (this.size) {
      result += ` ${this.size}`;
    }
    return result;
  }

  get target() {
    let result = "";
    if (this.targetBlank) {
      result = "_blank";
    }
    return result;
  }

  onClick() {
    if (!this.disabled) {
      this.$emit("click");
    }
  }
}
</script>

<style lang="scss">
$rotation: 12deg;
$activeRotation: 1deg;

@mixin button-active-rotation {
  box-shadow: $strong-shadow;
  transform: rotate(-$activeRotation);

  .bou-inner-button {
    transform: rotate($activeRotation);
  }
}

@mixin button-active-background {
  background-color: transparent;

  &:before {
    width: 100%;
    height: 100%;
  }
}

.bou-button {
  @include caption-2;

  display: inline-block;
  position: relative;
  background-color: transparent;
  cursor: pointer;

  transition: $hoverTransition;

  min-height: 3.5rem;
  min-width: 8.75rem;

  //padding: 0.575rem 1.55rem;

  transform: rotate(-$rotation);

  border: $normal-border;
  border-radius: 50%;
  color: $neutral90;
  text-decoration: none;

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
    &:hover {
      background-color: transparent;
    }
  }

  &.active {
    @include button-active-rotation;
    @include button-active-background;
    box-shadow: $soft-shadow;
  }

  &:hover:not(.active) {
    @include button-active-rotation;
  }

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: $primary2;
    border-radius: 100%;
    transition: width 0.3s ease, height 0.3s ease;
  }

  &:active:not(.active) {
    box-shadow: $soft-shadow;
    @include button-active-background;
  }

  .bou-inner-button {
    transition: 200ms;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    /* requires explicit height */
    height: $medium-line-height; 
    transform: rotate($rotation);
  }
}
</style>
