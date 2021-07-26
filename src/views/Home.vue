<template>
  <bou-container>
    <TitleSection>
      <template v-slot:title>
        Hi! I'm GEMMA BOU, <i>Product Designer</i>
      </template>
      <template v-slot:description>
        <p>
          I’m a product designer living in Madrid with the skills and
          <b>5 years of experience</b> in web design and graphic design, who can
          efficiently research, wireframe, and prototype a unique user
          experience.
        </p>
        <p>
          My background gives me the perspective to understand that I’m not a
          screen designer anymore,
          <b>I’m a design thinker and problem solver</b>, focus on user and
          business needs.
        </p>
      </template>
      <template v-slot:image>
        <bou-image
          source="/img/bou-main.jpg"
          :shaped="true"
          shape="se"
          borderOffset="se"
        ></bou-image>
      </template>
    </TitleSection>

    <MainSection imagePosition="left">
      <template v-slot:title>
        I create a Design System for my posts on Instagram
      </template>
      <template v-slot:description>
        <p>
          With the recent redesign of my own brand identity, I have decided to
          came back on Instagram publications. This is why I have create a
          Design System for my posts because this way I can
          <b class="uppercase">speed up</b> the publications designing process
          and <b><i>focus on creating valuable content.</i></b>
        </p>
      </template>
      <template v-slot:image>
        <bou-image
          source="/img/bou-section2.png"
          shape="e"
          borderOffset="nw"
        ></bou-image>
      </template>
      <template v-slot:imageXS>
        <bou-image
          source="/img/bou-section2XS.png"
          shape="n"
          borderOffset="sw"
        ></bou-image>
      </template>
    </MainSection>

    <MainSection imagePosition="right">
      <template v-slot:title>
        I design <span class="uppercase">Real Food Market App</span>, through a
        UX/UI <i>Case Study</i>
      </template>
      <template v-slot:description>
        <p>
          Using a <b class="uppercase">Design Sprint</b> methodologie, I have
          created this app finding new needs in the current buying food app
          market. Analyzing the competence, extracting value insights doing
          <b><i>user research</i></b> and organizing all the information with a
          useful <b><i>architecture</i></b
          >, I have designed a <b class="uppercase">new experience</b> for
          buying fresh products.
        </p>
      </template>
      <template v-slot:image>
        <bou-image
          source="/img/bou-section3.png"
          shape="w"
          borderOffset="se"
        ></bou-image>
      </template>
      <template v-slot:imageXS>
        <bou-image
          source="/img/bou-section3XS.png"
          shape="n"
          borderOffset="se"
        ></bou-image>
      </template>
    </MainSection>

    <MainSection imagePosition="left">
      <template v-slot:title> FREELANCE at <i>Bocacalle</i> Studio </template>
      <template v-slot:description>
        <p class="body2">
          After some years
          <b class="uppercase">working for external clients</b>, I decided to
          create and promote a Design Studio called Bocacalle with a business
          partner. Since that moment, we have been working in
          <i><b>offer digital solutions</b></i> for little and medium
          businesses.
        </p>
      </template>
      <template v-slot:image>
        <bou-image
          source="/img/bou-section4.png"
          shape="e"
          borderOffset="sw"
        ></bou-image>
      </template>
      <template v-slot:imageXS>
        <bou-image
          source="/img/bou-section4XS.png"
          shape="n"
          borderOffset="sw"
        ></bou-image>
      </template>
    </MainSection>
  </bou-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleSection from "@/components/home/TitleSection.vue";
import MainSection from "@/components/home/MainSection.vue";

@Component({
  components: {
    TitleSection,
    MainSection,
  },
})
export default class Home extends Vue {}
</script>
