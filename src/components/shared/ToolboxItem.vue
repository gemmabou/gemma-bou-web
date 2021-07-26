<template>
  <bou-tooltip :text="alt" background="primary2" shadow="soft">
    <a class="toolbox-item" :href="href" :target="target">
      <bou-image :source="source" :alt="alt" />
    </a>
  </bou-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ToolboxItem extends Vue {
  @Prop() source: string;
  @Prop() alt: string;
  @Prop() href: string;

  get target() {
    let result = "";
    if (this.href) {
      result = "_blank";
    }
    return result;
  }
}
</script>

<style lang="scss">
$circleDiameter: 3.4rem;

.toolbox-item {
  display: flex;
  justify-content: center;
  align-items: center;

  height: $circleDiameter;
  width: $circleDiameter;
  border-radius: 50%;
  border: $normal-border;

  padding: 0.625rem;
  margin: 0.325rem;
}
</style>