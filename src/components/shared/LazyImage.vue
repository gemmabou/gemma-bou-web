<template>
  <figure v-lazyLoad :class="wrapperClassName" v-bind:style="inlineStyles">
    <ImageSpinner class="image__spinner" />
    <img :class="itemClassName" :data-url="source" :alt="alt" />
  </figure>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LazyLoad from "@/directives/LazyLoad";
import ImageSpinner from "./lazyImage/ImageSpinner.vue";
import {
  GenericImageBorderOffset,
  GenericImageShape,
  GenericShadowType,
} from "@/types";

@Component({
  directives: {
    lazyLoad: LazyLoad,
  },
  components: {
    ImageSpinner,
  },
})
export default class LazyImage extends Vue {
  @Prop() source: string;
  @Prop() alt: string;
  @Prop({ default: "none" }) shape: GenericImageShape;
  @Prop({ default: "none" }) borderOffset: GenericImageBorderOffset;
  @Prop({ default: "none" }) shadowType: GenericShadowType;
  @Prop() width: number | undefined;
  @Prop() height: number | undefined;
  /**
   * Flag that controls if the main wrapper is shaped or not
   */
  @Prop({ default: false }) shaped: boolean;

  get itemClassName() {
    let result = "image__item";
    if (this.shaped) {
      result = `${result} shaped`;
    }
    if (this.shapeClass) {
      result = `${result} ${this.shapeClass}`;
    }
    if (this.shadowType != "none") {
      result += ` shadow-${this.shadowType}`;
    }
    return result;
  }

  get wrapperClassName() {
    let result = "image__wrapper";
    if (this.shapeClass) {
      result = `${result} ${this.shapeClass}`;
    }
    if (this.borderOffsetClass) {
      result = `${result} ${this.borderOffsetClass}`;
    }
    return result;
  }

  get shapeClass() {
    let result = "";
    if (this.shape != "none") {
      result = `shape-${this.shape}`;
    }
    return result;
  }

  get borderOffsetClass() {
    let result = "";
    if (this.borderOffset != "none") {
      result = `border-offset-${this.borderOffset}`;
    }
    return result;
  }

  get inlineStyles() {
    return {
      width: this.width ? `${this.width}px` : undefined,
      height: this.height ? `${this.height}px` : undefined,
    };
  }
}
</script>

<style lang="scss">
.image {
  &__wrapper {
    @include border-shapes;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    &:after {
      transition: all 0.8s ease-in-out;
      opacity: 0;
    }

    &.loaded {
      &:after {
        opacity: 1;
      }
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
          border: 0;
        }

        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }

  &__item {
    @include shapes;
    @include shadows;

    width: 100%;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
