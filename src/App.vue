<template>
  <div id="app">
    <!-- this h1 is App component's own data -->
    <h1>{{ title }}</h1>
    <!-- methods in component -->
    <h2>{{ greeting() }}</h2>
    <!-- Using globally registered component -->
    <topics></topics>
  </div>
</template>

<script>
export default {
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
