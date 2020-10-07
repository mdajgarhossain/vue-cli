<template>
  <div id="app">
    <!-- this h1 is App component's own data -->
    <h1>{{ title }}</h1>
    <!-- pass props by binding data -->
    <HelloWorld :msg="msg" />
    <!-- pass props by providing direct value-->
    <HelloWorld msg="Direct messgae from App" />
    <!-- no props data passing & using default props-->
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "I am App component",
      msg: "Message from App",
    };
  },
};
</script>

<style>
</style>
