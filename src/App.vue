<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <TodoListContainer />
    </v-main>

    <v-footer>
      <span
        >Made by
        <v-btn href="https://markustyrkko.com" target="_blank" text
          >Markus Tyrkkö</v-btn
        ></span
      >
      <v-btn v-on:click="reset">Reset data</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import ApolloClient from "apollo-boost";
import gql from "graphlql-tag";
import TodoListContainer from "./components/TodoListContainer";

const client = new ApolloClient({
  uri: "https://localhost:8000/graphql",
});

export default {
  name: "App",

  components: {
    TodoListContainer,
  },

  methods: {
    reset: () =>
      client.query({
        mutation: gql`
          query: 
        `,
      }),
  },
};
</script>
