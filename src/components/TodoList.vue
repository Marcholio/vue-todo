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
    <v-list-item
      ><v-icon color="#ddd">fa-plus-circle</v-icon>
      <v-form @submit.prevent="createItem" ref="itemForm"
        ><v-text-field
          placeholder="Create new task"
          v-model="newItemTitle"
          :rules="newItemRules"
      /></v-form>
    </v-list-item>
  </v-card>
</template>

<script>
import gql from "graphql-tag";
import { GET_LISTS } from "./queries";

export default {
  name: "TodoList",

  props: ["list"],

  data: () => ({
    newItemTitle: "",
    newItemRules: [(v) => !!v && v.length > 2], // At least 2 characters required
  }),

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
    async createItem() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation createItem($input: CreateItemInput) {
            createItem(input: $input) {
              id
              title
              done
            }
          }
        `,

        variables: {
          input: { title: this.newItemTitle, listId: this.list.id },
        },

        update: (store, { data: { createItem } }) => {
          const data = store.readQuery({ query: GET_LISTS });
          data.lists
            .find((listCand) => listCand.id === this.list.id)
            .items.push(createItem);
          store.writeQuery({ query: GET_LISTS, data });
        },
      });

      this.$refs.itemForm.reset();
    },
  },
};
</script>

<style scoped>
.v-list-item .v-icon {
  margin-right: 0.5rem;
}

.done {
  text-decoration: line-through;
  color: #999;
}

.v-progress-circular {
  font-size: 0.65rem;
}

.v-list-item >>> .v-input {
  margin: 0;
  padding: 0;
  border-bottom: none;
}

.v-list-item >>> .v-text-field__details {
  display: none;
}

.v-list-item >>> .v-input__slot {
  margin-bottom: 0 !important;
}

.v-list-item >>> .v-input__slot::before {
  border: none !important;
}
</style>
