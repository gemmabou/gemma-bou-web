<template>
  <bou-row>
    <bou-col class="text-center">
      <h2>Toolbox</h2>
    </bou-col>
    <bou-col class="toolbox-list">
        <bou-toolbox-item
          v-for="(item, index) in items"
          :key="index"
          :source="item.source"
          :href="item.link"
          :alt="item.alt"
        />
    </bou-col>
  </bou-row>
</template>


<script lang="ts">
import { ToolboxItem } from "@/types";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class SkillsSection extends Vue {
  @Prop() items: ToolboxItem[];
}
</script>

<style lang="scss" scoped>
.toolbox-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
