const title = "Gemma Bouzas Web";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/variables.scss";
            @import "@/styles/mixins.scss";
          `,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = title;
      return args;
    });
  },
};
