<template>
  <footer>
    <!-- Show primitive type data -->
    <h2>{{ myName }}</h2>
    <!-- Show reference type data -->
    <h2>{{ myProfile.age }}</h2>
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
    //receive primitive type data
    myName: {
      type: String,
      default: "",
    },
    //receive reference type data
    myProfile: {
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
  color: lightgreen;
  text-align: center;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
