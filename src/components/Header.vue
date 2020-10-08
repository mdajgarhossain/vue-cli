<template>
  <header>
    <h1>{{ title }}</h1>
    <h3>{{ subTitle }}</h3>
    <p>Address: {{ address }}</p>
    <h2>{{ headline }}</h2>
    <button v-on:click="changeHeadline">Change Headline</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Reformed Tech",
      subTitle: "A Software Development Company",
      address: "32/1, Road: 3, Dhaka 1207",
    };
  },
  props: {
    //receive primitive type props
    headline: {
      type: String,
      default: "",
    },
  },
  methods: {
    changeHeadline() {
      this.headline = "Headline has changed from header component";
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1,
h3,
p {
  color: #222;
  text-align: center;
}
</style>