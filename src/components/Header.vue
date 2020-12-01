<template>
  <header>
    <div>
      <!-- Show primitive type data-->
      <h3>{{ language }}</h3>
      <button @click="changeLang">Change language</button>
      <!-- Show reference type data -->
      <h3>{{ framework.title }}</h3>
      <button @click="changeFramework">Change framework</button>
    </div>
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
    //receive primitive type data
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
  methods: {
    changeHeadline() {
      this.headline = "Headline has changed from header component";
    },
    changeLang() {
      this.language = "Python";
    },
    changeFramework() {
      this.framework.title = "ReactJS";
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
p,
div {
  color: #222;
  text-align: center;
}
</style>
