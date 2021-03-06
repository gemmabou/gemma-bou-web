<template>
  <bou-container>
    <TitleSection>
      <template v-slot:title>
        <h1>Hi! I'm GEMMA BOU,</h1>
        <h1><i>UX & UI Designer</i></h1>
      </template>
      <template v-slot:description>
        <p>
          I’m a UX/UI designer living in Madrid with
          <b class="uppercase">5 years experience</b> in web and graphic design,
          who can efficiently <i>research, wireframe, and prototype</i> a unique
          user experience.
        </p>
        <p>
          My background gives me the perspective to understand that I’m not a
          screen designer anymore, I’m a
          <b class="uppercase">design maker and problem solver</b>, focused on
          <i>user and business</i> needs.
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
      <template v-slot:imageXS>
        <bou-image
          source="/img/bou-main.jpg"
          :shaped="true"
          shape="se"
        ></bou-image>
      </template>
    </TitleSection>

    <MainSection
      imagePosition="left"
      link="https://medium.com/@gemmabou/creo-un-design-system-para-mis-publicaciones-en-instagram-920d1efc7b66"
    >
      <template v-slot:title>
        I have created a <span class="uppercase">Design System</span> for my
        <i>brand identity</i> using Figma
      </template>
      <template v-slot:description>
        <p>
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
        <bou-image source="/img/bou-section2XS.png"></bou-image>
      </template>
    </MainSection>

    <MainSection
      imagePosition="right"
      link="https://medium.com/@gemmabou/dise%C3%B1o-real-food-market-app-8f5285825b35"
    >
      <template v-slot:title>
        I have designed <span class="uppercase">Real Food Market App</span>,
        through a UX/UI <i>Case Study</i>
      </template>
      <template v-slot:description>
        <p>
          I have created this app finding new needs in the current food app market.
          Analyzing the <i>competence</i>, extracting value insights doing
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
        <bou-image source="/img/bou-section3XS.png"></bou-image>
      </template>
    </MainSection>

    <MainSection imagePosition="left" link="https://bocacalle-studio.com/">
      <template v-slot:title>
        <span class="uppercase">Freelance</span> at <i>Bocacalle</i> Studio
      </template>
      <template v-slot:description>
        <p>
          I have combined these years of work with
          <b class="uppercase">being a freelance</b>, at Bocacalle Studio, where
          I have designed from <i>web pages and applications</i>, to <i>rebrandings</i> and
          <i>social media</i> content, also I have done <i>photographic sessions</i>.
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
        <bou-image source="/img/bou-section4XS.png"></bou-image>
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
