<template>
  <v-app>
    <Header />

    <v-main>
      <TodoListContainer />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import TodoListContainer from "./components/TodoListContainer";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    TodoListContainer,
    Header,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Roboto, sans-serif";
}

h1,
h2,
h3 {
  font-weight: 400;
}

.v-main {
  background: #eee;
}
</style>
