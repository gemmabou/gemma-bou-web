<template>
  <!-- Desktop left layout (screenWidht > sm) -->
  <bou-row
    class="main-section"
    v-if="!isMobileResolution && imagePosition == 'left'"
    :spaced="true"
    :vertical-align="'center'"
  >
    <bou-col :xs="12" :md="6">
      <slot name="image"></slot>
    </bou-col>

    <bou-col :md="1"> </bou-col>

    <bou-col :xs="12" :md="5">
      <h2>
        <slot name="title"></slot>
      </h2>
      <slot name="description"></slot>
      <p class="view-more-button">
        <bou-button
          label="see more"
          size="large"
          :anchor="true"
          :href="link"
          :targetBlank="true"
        />
      </p>
    </bou-col>
  </bou-row>

  <!-- Desktop right layout (screenWidht > sm) -->
  <bou-row
    v-else-if="!isMobileResolution && imagePosition == 'right'"
    class="main-section"
    :spaced="true"
    :vertical-align="'center'"
  >
    <bou-col :xs="12" :md="5">
      <h2>
        <slot name="title"></slot>
      </h2>
      <slot name="description"></slot>
      <p class="view-more-button">
        <bou-button
          label="see more"
          size="large"
          :anchor="true"
          :href="link"
          :targetBlank="true"
        />
      </p>
    </bou-col>

    <bou-col :md="1"> </bou-col>
    <bou-col :xs="12" :md="6">
      <slot name="image"></slot>
    </bou-col>
    <bou-col :lg="1"> </bou-col>
  </bou-row>

  <!-- Mobile layout (screenWidht < sm) -->
  <bou-row v-else class="main-section" :spaced="true" :vertical-align="'top'">
    <bou-col :xs="12">
      <h2>
        <slot name="title"></slot>
      </h2>
    </bou-col>
    <bou-col :xs="12">
      <slot name="description"></slot>
      <p class="view-more-button text-center">
        <bou-button
          label="see more"
          :anchor="true"
          size="large"
          :href="link"
          :targetBlank="true"
        />
      </p>
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
import { Component, Vue, Prop } from "vue-property-decorator";

type SectionImagePosition = "left" | "right";

@Component({})
export default class MainSection extends Vue {
  @Prop({ default: "left" }) imagePosition: SectionImagePosition;
  @Prop() link: string;

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

<style lang="scss">
.main-section {
  .view-more-button {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
}
</style>
