<template>
  <v-footer elevation="10">
    <span
      >Made by
      <v-btn href="https://markustyrkko.com" target="_blank" text
        >Markus Tyrkkö</v-btn
      ></span
    >
    <v-spacer />
    <v-btn href="https://github.com/Marcholio/vue-todo" target="_blank" text
      ><span>Source code</span
      ><v-icon size="1rem">fa-code-branch</v-icon></v-btn
    >
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.v-icon {
  margin-left: 0.5rem;
}
</style>
