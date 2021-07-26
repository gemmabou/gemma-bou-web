<template>
  <Container :fluent="fluent">
    <div :class="className">
      <slot></slot>
    </div>
  </Container>
</template>

<script lang="ts">
import {
  GenericBackgroundColor,
  GenericGradient,
  GenericShadowType,
} from "@/types";
import Container from "./Container.vue";
import { Component, Vue, Prop } from "vue-property-decorator";

const MAIN_CLASS = "bou-card";

@Component({
  components: { Container },
})
export default class Card extends Vue {
  @Prop({ default: "none" }) shadowType: GenericShadowType;
  @Prop({ default: "transparent" }) background: GenericBackgroundColor;
  @Prop({ default: "none" }) gradient: GenericGradient;
  @Prop() fluent: boolean;

  get className() {
    let result = MAIN_CLASS;
    if (this.shadowType != "none") {
      result += ` shadow-${this.shadowType}`;
    }
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
.bou-card {
  @include backgrounds;
  @include shadows;

  padding-top: $container-y-margin;
  padding-bottom: $container-y-margin;
  padding-left: $container-x-margin;
  padding-right: $container-x-margin;

  border: $normal-border;
  border-radius: 1rem;

  background-color: transparent;
}
</style>
