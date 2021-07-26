import Card from "../components/Card.vue";
import Button from "../components/shared/Button.vue";

export default {
  title: "Card",
  argTypes: {
    gradient: {
      options: ["none", "linear", "radial"],
      control: { type: "select" },
    },
    shadowType: {
      options: ["none", "soft", "strong"],
      control: { type: "select" },
    },
    background: {
      options: [
        "transparent",
        "primary1",
        "primary2",
        "primary3",
        "primary4",
        "primary5",
      ],
      control: { type: "select" },
    },
  },
};

export const defaultCard = (args, { argTypes }) => ({
  components: {
    BouButton: Button,
    BouCard: Card,
  },
  props: Object.keys(argTypes),
  template: `
    <bou-card v-bind="$props">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">col</div>
      </div>
    </bou-card>
    `,
});
