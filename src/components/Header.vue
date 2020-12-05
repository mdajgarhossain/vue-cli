<template>
  <header>
    <!-- Show primitive type data -->
    <h2>{{ myName }}</h2>
    <button @click="changePrimitive">Change Primitive</button>
    <!-- Show reference type data -->
    <h2>{{ myProfile.age }}</h2>
    <button @click="changeReference">Change Reference</button>
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
  methods: {
    changeHeadline() {
      this.$emit(
        "changeHeadline",
        "Headline has changed by listening event from parent component"
      );
    },
    changePrimitive() {
      this.$emit("change-primitive", "Jewell");
    },
    changeReference() {
      this.myProfile.age = 30;
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
  color: #222;
  text-align: center;
}
h1,
h3,
p {
  color: #222;
  text-align: center;
}
</style>
