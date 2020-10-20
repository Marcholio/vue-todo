module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-todo/" : "/",
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      title: "TODO Application",
      entry: "src/main.js",
    },
  },
};
