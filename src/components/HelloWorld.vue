<template>
  <div class="hello">
    <!-- this h2 is HelloWorld component's own data -->
    <h2>{{ title }}</h2>
    <!-- inside the h3 the msg data will be passed from another component as props -->
    <h3>Data inherited from App component: {{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "I am child component",
    };
  },
  props: {
    msg: {
      type: String,
      default: "Please pass props data",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
