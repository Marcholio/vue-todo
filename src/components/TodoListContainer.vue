<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="listId in Object.keys(lists)" :key="listId">
        <h2>{{ lists[listId].title }}</h2>
        <v-row v-for="itemId in Object.keys(lists[listId].items)" :key="itemId">
          <span>{{ lists[listId].items[itemId].title }}</span>
          <span v-if="lists[listId].items[itemId].done"> DONE</span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TodoListContainer",

  data: () => ({
    // TODO: Replace hardcoded data with actual data from backend
    lists: {
      id1: {
        title: "List 1",
        items: {
          item1: {
            title: "Do stuff",
            done: false,
          },
          item2: {
            title: "Do stuff 2",
            done: false,
          },
          item3: {
            title: "Do stuff 3",
            done: true,
          },
        },
      },
      id2: {
        title: "List 2",
        items: {
          item1: {
            title: "Do stuff 5",
            done: false,
          },
          item2: {
            title: "Do stuff 6",
            done: true,
          },
          item3: {
            title: "Do stuff 7",
            done: true,
          },
        },
      },
    },
  }),
};
</script>
