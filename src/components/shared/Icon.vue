<template>
  <a class="bou-icon" @click="$emit('click')" :href="href" :target="target">
    <component :is="icon"></component>
  </a>
</template>

<script lang="ts">
import { DefaultIcons } from "@/types";
import { Component, Vue, Prop } from "vue-property-decorator";

import Instagram from "./icons/Instagram.vue";
import Linkedin from "./icons/Linkedin.vue";
import Mail from "./icons/Mail.vue";
import Medium from "./icons/Medium.vue";
import Close from "./icons/Close.vue";
import Menu from "./icons/Menu.vue";

@Component({
  components: {
    Instagram,
    Linkedin,
    Mail,
    Medium,
    Close,
    Menu,
  },
})
export default class Icon extends Vue {
  @Prop() icon: DefaultIcons;
  @Prop() href: string;
  @Prop({ default: false }) targetBlank: boolean;

  get target() {
    let result = "";
    if (this.targetBlank) {
      result = "_blank";
    }
    return result;
  }
}
</script>

<style lang="scss">
.bou-icon {
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  line-height: 0;
}
</style>
