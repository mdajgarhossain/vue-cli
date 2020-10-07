<template>
  <div id="app">
    <!-- this h1 is App component's own data -->
    <h1>{{ title }}</h1>
    <!-- methods in component -->
    <h2>{{ greeting() }}</h2>
    <!-- Using globally registered component -->
    <topics></topics>
    <!-- Using locally registered component -->
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "I am App component",
      msg: "Message from App",
    };
  },
  methods: {
    greeting() {
      return "Vue is nice";
    },
  },
};
</script>

<style>
</style>
