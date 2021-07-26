<template>
  <footer :class="className">
    <bou-social-media-links />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const MAIN_CLASS = "bou-footer";

@Component({})
export default class Footer extends Vue {
  get className() {
    let result = MAIN_CLASS;
    return result;
  }
}
</script>

<style lang="scss">
.bou-footer {
  border-top: $normal-border;
  width: 100%;
  height: $footerHeight;
  margin-top: $footerHeight;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
