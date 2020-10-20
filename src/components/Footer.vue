<template>
  <v-footer>
    <span
      >Made by
      <v-btn href="https://markustyrkko.com" target="_blank" text
        >Markus Tyrkkö</v-btn
      ></span
    >
    <v-btn v-on:click="reset">Reset data</v-btn>
  </v-footer>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Footer",

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
