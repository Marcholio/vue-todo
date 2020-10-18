import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://deno-server-44.herokuapp.com/graphql"
      : "http://localhost:8000/graphql",
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  vuetify,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
