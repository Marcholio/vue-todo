<template>
  <v-card>
    <v-toolbar elevation="2"
      ><h3>{{ list.title }}</h3>
      <v-spacer />
      <v-progress-circular
        v-if="list.items.length > 0"
        :value="(doneCount / list.items.length) * 100"
        rotate="-90"
        color="green"
        >{{
          Math.round((doneCount / list.items.length) * 100)
        }}%</v-progress-circular
      >
    </v-toolbar>
    <v-list-item
      v-for="item in list.items"
      :key="item.id"
      @click="updateStatus(item.id)"
    >
      <v-icon v-if="item.done" color="green">fa-check-circle</v-icon
      ><v-icon v-else color="#ddd">fa-circle</v-icon
      ><span v-bind:class="item.done ? 'done' : ''">{{ item.title }}</span>
    </v-list-item>
  </v-card>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "TodoList",

  props: ["list"],

  computed: {
    doneCount() {
      return this.list.items.reduce(
        (acc, cur) => (cur.done ? acc + 1 : acc),
        0
      );
    },
  },

  methods: {
    async updateStatus(itemId) {
      await this.$apollo.mutate({
        mutation: gql`
          mutation toggleItemDone($input: ToggleItemInput) {
            toggleItemDone(input: $input) {
              id
              done
            }
          }
        `,
        variables: {
          input: { itemId: itemId },
        },
      });
    },
  },
};
</script>

<style scoped>
.v-list-item span {
  margin-left: 0.5rem;
}

.done {
  text-decoration: line-through;
  color: #999;
}

.v-progress-circular {
  font-size: 0.65rem;
}
</style>
