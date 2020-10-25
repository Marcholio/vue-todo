<template>
  <v-container>
    <v-row v-if="!!lists && lists.length > 0">
      <v-col
        v-for="list in lists"
        :key="list.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <TodoList v-bind:list="list" />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2"
        ><NewTodoList v-bind:createList="createList"
      /></v-col>
    </v-row>
    <v-row v-else class="loading-text">
      <v-col cols="8" offset="2"
        ><span
          >Loading data... If this message does not disappear, reset the data by
          clicking the button in the header. The backend is hosted in a free
          Heroku dyno, so give it some time to warm up.</span
        ><span
          >If resetting the data does not help, the backend is probably broken,
          sorry about that :D</span
        ></v-col
      ></v-row
    >
    <v-row v-if="showError">
      <v-fade-transition appear>
        <v-col cols="6" offset="3">
          <v-alert type="error"
            >Error with data loading, try to reset the data</v-alert
          >
        </v-col>
      </v-fade-transition>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

import TodoList from "./TodoList";
import NewTodoList from "./NewTodoList";

export default {
  name: "TodoListContainer",

  components: {
    TodoList,
    NewTodoList,
  },

  data: () => ({
    showError: false,
  }),

  apollo: {
    lists: {
      query: gql`
        query getLists {
          lists: getLists {
            id
            title
            items {
              id
              title
              done
            }
          }
        }
      `,
      error: function() {
        this.showError = true;

        // Clear the error message after a while
        setTimeout(() => {
          this.showError = false;
        }, 4000);
      },
    },
  },

  methods: {
    async createList(listTitle) {
      const {
        data: { createList },
      } = await this.$apollo.mutate({
        mutation: gql`
          mutation createList($input: CreateListInput) {
            createList(input: $input) {
              id
              title
              items {
                id
                title
                done
              }
            }
          }
        `,
        variables: {
          input: { title: listTitle },
        },
      });

      // Parse response object
      const { id, title } = createList;

      // Add new empty list to store
      this.lists.push({ id, title, items: [] });
    },
  },
};
</script>

<style scoped>
.loading-text {
  margin-top: 5rem;
  font-style: italic;
  text-align: center;
  align-items: center;
}

.loading-text span {
  width: 100%;
  margin-bottom: 2rem;
  display: block;
}
</style>
