<template>
  <!-- Desktop layout (screenWidht > sm) -->
  <bou-row v-if="!isMobileResolution" :spaced="true" :vertical-align="'center'">
    <bou-col :md="3">
      <slot name="image"></slot>
    </bou-col>
    <bou-col :md="1" />
    <bou-col :md="8">
      <slot name="title"></slot>

      <bou-row :spaced="true">
        <bou-col>
          <slot name="description"></slot>
        </bou-col>
      </bou-row>

      <bou-row :spaced="true">
        <bou-col>
          <bou-cv-button />
        </bou-col>
      </bou-row>
    </bou-col>
  </bou-row>
  <!-- Mobile layout (screenWidht < sm) -->
  <bou-row v-else :spaced="true" :vertical-align="'top'">
    <bou-col :xs="12">
      <h1>
        <slot name="title"></slot>
      </h1>
    </bou-col>
    <bou-col :xs="12">
      <slot name="description"></slot>
    </bou-col>
    <bou-col :xs="12" class="text-center">
      <bou-cv-button />
    </bou-col>
    <bou-col :xs="2" />
    <bou-col :xs="8" class="image-container-xs">
      <slot name="image"></slot>
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
.image-container-xs {
  margin-top: 2.5rem;
}
</style>
