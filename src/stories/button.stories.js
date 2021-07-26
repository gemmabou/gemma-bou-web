import { action } from "@storybook/addon-actions";
import Button from "../components/shared/Button.vue";

export default {
  title: "Button",
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    size: {
      options: ["small", "default", "large"],
      control: { type: "select" },
    },
  },
};

export const defaultButton = (args, { argTypes }) => ({
  components: { BouButton: Button },
  props: Object.keys(argTypes),
  methods: { action: action("clicked") },
  template: `
    <bou-button v-bind="$props" @click="action">
    </bou-button>`,
});
