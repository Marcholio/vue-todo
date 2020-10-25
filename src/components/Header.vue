<template>
  <v-app-bar app color="primary" dark>
    <v-icon dark>fa-tasks</v-icon>
    <h1>TODO Application</h1>
    <v-spacer />
    <v-btn v-on:click="reset" outlined
      ><span>Reset data</span
      ><v-icon size="1rem" dark>fa-redo-alt</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
import { RESET } from "./queries";

export default {
  name: "Header",

  methods: {
    async reset() {
      await this.$apollo.mutate({
        mutation: RESET,
        variables: {
          input: { _: true },
        },
      });

      location.reload();
    },
  },
};
</script>

<style scoped>
header {
  min-width: 350px;
}

h1 {
  margin-left: 1rem;
}

.v-btn .v-icon {
  margin-left: 0.5rem;
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
  }

  .v-btn {
    font-size: 0.8rem !important;
  }
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 1rem;
  }

  .v-btn {
    font-size: 0.6rem !important;
  }
}
</style>
