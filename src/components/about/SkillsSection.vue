<template>
  <bou-row class="skills-section" verticalAlign="top">
    <bou-col :md="6">
      <h2>UX skills</h2>
      <ul>
        <li v-for="(item, index) in uxSkills" :key="index">
            <b>{{item.title + ": "}}</b>
            <span>{{item.description}}</span>
        </li>
      </ul>
    </bou-col>
    <bou-col :md="6">
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
.skills-section{
    margin-top: 4.5rem;
}
</style>