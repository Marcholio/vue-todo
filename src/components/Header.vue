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
import gql from "graphql-tag";

export default {
  name: "Header",

  methods: {
    async reset() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation reset($input: ResetInput) {
            reset(input: $input) {
              status
            }
          }
        `,
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
h1 {
  margin-left: 1rem;
}

.v-btn .v-icon {
  margin-left: 0.5rem;
}
</style>
