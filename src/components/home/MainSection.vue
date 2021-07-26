<template>
  <!-- Desktop left layout (screenWidht > sm) -->
  <bou-row
    class="main-row"
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
          label="View more"
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
    class="main-row"
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
          label="View more"
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
  <bou-row v-else class="main-row" :spaced="true" :vertical-align="'top'">
    <bou-col :xs="12">
      <h1>
        <slot name="title"></slot>
      </h1>
    </bou-col>
    <bou-col :xs="12">
      <slot name="description"></slot>
      <p class="view-more-button text-center">
        <bou-button
          label="View more"
          :anchor="true"
          :href="link"
          :targetBlank="true"
        />
      </p>
    </bou-col>
    <bou-col :xs="2" />
    <bou-col :xs="8">
      <slot name="imageXS"></slot>
    </bou-col>
    <bou-col :xs="2" />
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
.main-row {
  margin-top: 8.75rem;
  margin-bottom: 8.75rem;

  .view-more-button {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
}
</style>
