<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="list in lists" :key="list.id">
        <h2>{{ list.title }}</h2>
        <v-row v-for="item in list.items" :key="item.id">
          <span>{{ item.title }}</span>
          <span v-if="item.done"> DONE</span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "TodoListContainer",

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
    },
  },
};
</script>
