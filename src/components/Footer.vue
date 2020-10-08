<template>
  <footer>
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
  },
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>