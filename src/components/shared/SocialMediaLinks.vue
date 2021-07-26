<template>
  <bou-flexbox verticalAlign="center">
    <bou-icon icon="Instagram" :href="instagramUrl" :targetBlank="true" />
    <bou-icon icon="Linkedin" :href="linkedinUrl" :targetBlank="true" />
    <bou-icon icon="Medium" :href="mediumUrl" :targetBlank="true" />
    <bou-icon icon="Mail" :href="mailtoHref" />
  </bou-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
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
}
</script>
