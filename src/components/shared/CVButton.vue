<template>
  <bou-button class="cv-button" label="Download CV" @click="downloadCV" />
</template>

<script lang="ts">
import { CV_URL, CV_FILE_NAME } from "@/constants";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Icon extends Vue {
  async downloadCV() {
    try {
      const response = await fetch(CV_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = CV_FILE_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style lang="scss">
.cv-button {
  &.bou-button {
    transform: rotate(0deg);
    border: none;
    padding: 0 0.575rem;

    .bou-inner-button {
      transform: rotate(0deg);

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        bottom: 0;
        left: 0;
        transition: 200ms;
        border-bottom: $normal-border;
      }
    }

    &:hover {
      box-shadow: none;
      .bou-inner-button {
        &:after {
          opacity: 0;
        }
      }
    }
    &:focus {
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
    }
    &:before {
      display: none;
    }
  }
}
</style>
