<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

const MAIN_CLASS = "container";

@Component({})
export default class Container extends Vue {
  @Prop() fluent: boolean;

  get className() {
    let result = MAIN_CLASS;
    if (this.fluent) {
      result += ` fluent`;
    }
    return result;
  }
}
</script>
