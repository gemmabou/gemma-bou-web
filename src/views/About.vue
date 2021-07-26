<template>
  <bou-container>
    <TitleSection>
      <template v-slot:title>
        The EVOLUTION of Graphic, Web, UI, UX to <i>Product Designer</i>
      </template>
      <template v-slot:description>
        <p>
          From my background in Art Direction,
          <b class="uppercase">I have learned</b> that it is not enough to be a
          great screen designer. The designer needs to
          <b><i> understand the whole picture</i></b
          >, including the business goals and the technical constraints, using
          research methods based on the person that actually use the product.
          Now I am a <b class="uppercase">design maker and problem solver</b>,
          focused <b><i> on user and business needs</i></b> within an innovative
          space, where my hard skills in design software and my soft skills in
          emotional intelligence can shine.
        </p>
      </template>
      <template v-slot:image>
        <bou-image
          source="/img/about.png"
          shape="n"
          borderOffset="sw"
        ></bou-image>
      </template>
    </TitleSection>
    <SkillsSection :uiSkills="uiSkills" :uxSkills="uxSkills" />
    <ToolboxSection :items="toolboxItems" />
  </bou-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleSection from "@/components/about/TitleSection.vue";
import SkillsSection from "@/components/about/SkillsSection.vue";
import ToolboxSection from "@/components/about/ToolboxSection.vue";
import { SkillItem, ToolboxItem } from "@/types";

@Component({
  components: {
    TitleSection,
    SkillsSection,
    ToolboxSection,
  },
})
export default class About extends Vue {
  uxSkills: SkillItem[] = [
    {
      title: "Methodologies",
      description: "D. Thinking, Kanban, D. Sprint, Scrum.",
    },
    {
      title: "Business Analysis",
      description:
        "Stakeholder Interviews, Analytics Audit, Value Proposition, Accesibility and CSS stats.",
    },
    {
      title: "Competitive Analysis",
      description: "Desk Research, Benchmark.",
    },
    {
      title: "User Research",
      description:
        "Desk Research, Netnography, User Interviews, Surveys, Search Analysis, User Testing.",
    },
    {
      title: "I. Architecture",
      description:
        "Navigation Analysis, Heuristic Evaluation, Card Sorting, Site Map, User Flows, Wireframes.",
    },
  ];
  uiSkills: SkillItem[] = [
    {
      title: "Design Principles",
      description: "Layout, Hierarchy, Balance, Color and Typography.",
    },
    {
      title: "Responsive",
      description:
        "Experience with mobile-first and desktop-first design if needed.",
    },
    {
      title: "Design System",
      description: "Desk Research, Benchmark.",
    },
    {
      title: "User Research",
      description:
        "Self taught of creating and designing a Design System. Good knowledge of Atomic Design and Material Design, UI Kits and Style Guides.",
    },
    {
      title: "Visual Design",
      description: "Creating screens and prototyping.",
    },
  ];

  toolboxItems: ToolboxItem[] = [
    {
      source: "/img/logos/figma-logo.png",
      alt: "Figma",
    },
    {
      source: "/img/logos/sketch-logo.png",
      alt: "Sketch",
    },
    {
      source: "/img/logos/creative-cloud-logo.png",
      alt: "Adobe Suit",
    },
    {
      source: "/img/logos/zeplin-logo.png",
      alt: "Zeplin",
    },
    {
      source: "/img/logos/marvel-logo.png",
      alt: "Marvel",
    },
    {
      source: "/img/logos/invision-logo.png",
      alt: "Invision",
    },
    {
      source: "/img/logos/storybook-logo.png",
      alt: "Storybook",
    },
    {
      source: "/img/logos/zeroheight-logo.png",
      alt: "Zeroheight",
    },
    {
      source: "/img/logos/airtable-logo.png",
      alt: "Airtable",
    },
    {
      source: "/img/logos/asana-logo.png",
      alt: "Asana",
    },
    {
      source: "/img/logos/trello-logo.png",
      alt: "Trello",
    },
    {
      source: "/img/logos/slack-logo.png",
      alt: "Slack",
    },
    {
      source: "/img/logos/gsuite-logo.png",
      alt: "Google Suite",
    },
    {
      source: "/img/logos/dropbox-logo.png",
      alt: "Dropbox",
    },
    {
      source: "/img/logos/typeform-logo.png",
      alt: "Typeform",
    },
    {
      source: "/img/logos/optimalworkshop-logo.png",
      alt: "Optimal Workshop",
    },
    {
      source: "/img/logos/git-logo.png",
      alt: "Git",
    },
    {
      source: "/img/logos/html-logo.png",
      alt: "HTML5",
    },
    {
      source: "/img/logos/css-logo.png",
      alt: "CSS3",
    },
    {
      source: "/img/logos/wordpress-logo.png",
      alt: "Wordpress",
    },
    {
      source: "/img/logos/vscode-logo.png",
      alt: "Visual Studio Code",
    },
    {
      source: "/img/logos/github-logo.png",
      alt: "Github",
    },
    {
      source: "/img/logos/firebase-logo.png",
      alt: "Firebase",
    },
  ];
}
</script>
