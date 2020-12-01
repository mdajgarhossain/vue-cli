<template>
  <footer>
    <div>
      <!-- Show primitive data-->
      <h3>{{ language }}</h3>
      <!-- Show reference type data -->
      <h3>{{ framework.title }}</h3>
    </div>
    <h2>{{ headline }}</h2>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Copyright © 2020 Reformed Tech",
    };
  },
  props: {
    //receive primitive type props
    headline: {
      type: String,
      default: "",
    },
    //receive primitive data
    language: {
      type: String,
      default: "",
    },
    //receive reference type data
    framework: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p,
div {
  color: lightgreen;
  text-align: center;
}
</style>
