<template>
  <div>
    <slot v-bind:open="open"></slot>

    <div :class="className">
      <div class="overlay-top">
        <bou-container :fluent="true">
          <bou-flexbox justifyContent="end">
            <bou-icon icon="Close" @click="close" />
          </bou-flexbox>
        </bou-container>
      </div>

      <div class="overlay-content">
        <slot name="content" v-bind:close="close"></slot>
      </div>

      <div class="overlay-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

const MAIN_CLASS = "bou-overlay";

@Component({})
export default class FullScreenOverlay extends Vue {
  /**
   * v-model value for isOpen
   */
  @Prop() value: boolean;

  get isOpen() {
    return this.value;
  }
  set isOpen(value: boolean) {
    this.$emit("input", value);
  }

  get className() {
    let result = MAIN_CLASS;
    if (this.isOpen) {
      result = `${result} opened`;
    } else {
      result = `${result} closed`;
    }
    return result;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
</script>

<style lang="scss">
$overlayColor: $overlay-gradient;

.bou-overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-image: $overlayColor;
  opacity: 0.97;
  overflow-y: hidden;
  transition: 0.5s;

  &.opened {
    height: 100vh;
  }

  &.closed {
    height: 0vh;
  }

  .overlay-top {
    position: absolute;
    top: 0;
    width: 100%;
    height: $navbarHeight;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .overlay-content {
    position: relative;
    top: 15%;
    width: 100%;
    text-align: center;
  }

  .overlay-footer {
    position: relative;
    top: 25%;
    width: 100%;
  }
}

@media (max-height: $sm-to-md-breakpoint) {
  .overlay-top {
    height: $navbarHeightXS !important;
  }
}
</style>
