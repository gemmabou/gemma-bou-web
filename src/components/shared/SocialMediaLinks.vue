<template>
  <bou-flexbox verticalAlign="center">
    <bou-icon icon="Figma" :href="figmaUrl" :targetBlank="true" />
    <bou-icon icon="Github" :href="githubUrl" :targetBlank="true" />
    <bou-icon icon="Medium" :href="mediumUrl" :targetBlank="true" />
     <bou-icon icon="Linkedin" :href="linkedinUrl" :targetBlank="true" />
    <bou-icon icon="Instagram" :href="instagramUrl" :targetBlank="true" />
    <bou-icon icon="Mail" :href="mailtoHref" />
  </bou-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  FIGMA_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MAILTO_HREF,
  MEDIUM_URL,
} from "@/constants";

@Component({})
export default class SocialMediaLinks extends Vue {
  instagramUrl = INSTAGRAM_URL;
  linkedinUrl = LINKEDIN_URL;
  mediumUrl = MEDIUM_URL;
  mailtoHref = MAILTO_HREF;
  figmaUrl = FIGMA_URL;
  githubUrl = GITHUB_URL;
}
</script>
