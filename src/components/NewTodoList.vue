<template>
  <v-form @submit.prevent="submit" ref="form"
    ><v-card
      ><v-toolbar elevation="3">
        <v-text-field
          placeholder="Create new list"
          v-model="values.listTitle"
          :rules="rules.title"
          required
        />
      </v-toolbar>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "NewTodoList",

  props: ["createList"],

  data: () => ({
    values: {
      listTitle: "",
    },
    rules: {
      title: [(v) => !!v && v.length > 3], // At least 3 characters required
    },
  }),

  methods: {
    async submit() {
      await this.createList(this.values.listTitle);
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.v-text-field__details {
  display: none;
}
</style>
