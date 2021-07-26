<template>
  <bou-container>
    <TitleSection>
      <template v-slot:title>
        <h1>Hi! I'm GEMMA BOU,</h1>
        <h1><i>Product Designer</i></h1>
      </template>
      <template v-slot:description>
        <p>
          I’m a product designer living in Madrid with
          <b class="uppercase">5 years of experience</b> in web and graphic
          design, who can efficiently research, wireframe, and prototype a
          unique user experience.
        </p>
        <p>
          My background gives me the perspective to understand that I’m not a
          screen designer anymore,
          <i>I’m a design maker and problem solver</i>, focused on user and
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
        I have created a <span class="uppercase">Design System</span> for my <i>posts</i> on Instagram
      </template>
      <template v-slot:description>
        <p class="body3">
          With the recent redesign of my own brand identity, I have decided to
          come back on Instagram publications. This is why I have created a
          Design System for my posts because this way I can
          <b class="uppercase">speed up</b> the publications design process and
          <i>focus on creating valuable content.</i>
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
        I have designed <span class="uppercase">Real Food Market App</span>,
        through a UX/UI <i>Case Study</i>
      </template>
      <template v-slot:description>
        <p class="body3">
          Using a <b class="uppercase">Design Sprint</b> methodology, I have
          created this app finding new needs in the current food app market.
          Analyzing the competence, extracting value insights doing
          <i>user research</i> and organizing all the information with a useful
          <i>architecture</i>, I have designed a
          <b class="uppercase">new experience</b> for buying fresh products.
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
      <template v-slot:title> <span class="uppercase">Freelance</span> at <i>Bocacalle</i> Studio </template>
      <template v-slot:description>
        <p class="body3">
          After some years
          <b class="uppercase">working for external clients</b>, I decided to
          create and promote a Design Studio called Bocacalle with a business
          partner. Since that moment, we have been working in
          <i><b>offer digital solutions</b></i> for little and medium business.
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
