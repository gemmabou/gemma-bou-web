<template>
  <bou-row class="main-section" verticalAlign="top">
    <bou-col :md="5">
      <h2>UX skills</h2>
      <ul>
        <li v-for="(item, index) in uxSkills" :key="index">
            <b>{{item.title + ": "}}</b>
            <span>{{item.description}}</span>
        </li>
      </ul>
    </bou-col>
    <bou-col :md="1" />
    <bou-col :md="1" class="bordered-left" />
    <bou-col :md="5">
      <h2>UI skills</h2>
      <ul>
        <li v-for="(item, index) in uiSkills" :key="index">
            <b>{{item.title + ": "}}</b>
            <span>{{item.description}}</span>
        </li>
      </ul>
    </bou-col>
  </bou-row>
</template>

<script lang="ts">
import { SkillItem } from "@/types";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class SkillsSection extends Vue {
    @Prop() uiSkills: SkillItem[];
    @Prop() uxSkills: SkillItem[];
}
</script>

<style lang="scss" scoped>
.bordered-left{
  border-left: $normal-border;
  height: 100%;
}
</style>