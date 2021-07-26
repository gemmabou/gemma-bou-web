<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

const MAIN_CLASS = "col";
const MAX_COLS = 12;

@Component({})
export default class Col extends Vue {
  @Prop({ default: MAX_COLS }) xs: number;
  @Prop({ default: 0 }) sm: number;
  @Prop({ default: 0 }) md: number;
  @Prop({ default: 0 }) lg: number;

  get className() {
    let result = MAIN_CLASS;
    if (this.xs > 0 && this.xs <= 12) {
      result += ` col-xs-${this.xs}`;
    }
    if (this.sm > 0 && this.sm <= 12) {
      result += ` col-sm-${this.sm}`;
    }
    if (this.md > 0 && this.md <= 12) {
      result += ` col-md-${this.md}`;
    }
    if (this.lg > 0 && this.lg <= 12) {
      result += ` col-lg-${this.lg}`;
    }
    return result;
  }
}
</script>
