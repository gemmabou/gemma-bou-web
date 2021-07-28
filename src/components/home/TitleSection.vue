<template>
  <!-- Desktop layout (screenWidht > sm) -->
  <bou-row class="title-section" v-if="!isMobileResolution" :spaced="true" :vertical-align="'center'">
    <bou-col :md="6">
      <slot name="title"></slot>
      <slot name="description"></slot>
    </bou-col>
    <bou-col :md="1" />
    <bou-col :md="4">
      <slot name="image"></slot>
    </bou-col>
  </bou-row>
  <!-- Mobile layout (screenWidht < sm) -->
  <bou-row v-else :spaced="true" class="title-section" :vertical-align="'top'">
    <bou-col :xs="12">
      <h1>
        <slot name="title"></slot>
      </h1>
    </bou-col>
    <bou-col :xs="12">
      <slot name="description"></slot>
    </bou-col>
    <bou-col :xs="1" :sm="2" />
    <bou-col :xs="10" :sm="8">
      <slot name="imageXS"></slot>
    </bou-col>
  </bou-row>
</template>

<script lang="ts">
import { ScreenSize } from "@/types";
import { getScreenSize } from "@/utils";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class TitleSection extends Vue {
  get isMobileResolution() {
    let result = false;
    const screenSize = getScreenSize(this.windowWidth);
    if (screenSize <= ScreenSize.sm) {
      result = true;
    }
    return result;
  }
}
</script>

<style lang="scss" scoped>
.title-section {
  margin-bottom: 2.5rem;
}
</style>
