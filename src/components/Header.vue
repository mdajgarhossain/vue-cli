<template>
  <header>
    <h2>{{ subHeadline }}</h2>
    <button @click="changeBus">Change event-bus</button>
    <h1>{{ title }}</h1>
    <h3>{{ subTitle }}</h3>
    <p>Address: {{ address }}</p>
    <h2>{{ headline }}</h2>
    <button v-on:click="changeHeadline">Change Headline</button>
  </header>
</template>

<script>
import { bus } from "../main";
import { eventBus } from "../main";

export default {
  data() {
    return {
      title: "Reformed Tech",
      subTitle: "A Software Development Company",
      address: "32/1, Road: 3, Dhaka 1207",
      subHeadline: "This is an Event Bus",
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
      /*this.$emit(
        "changeHeadline",
        "Headline has changed by listening event from parent component"
      );*/
      // this.headline =
      //   "Headline has changed & shared this change to other component without parent component with event bus";
      bus.$emit("headlineChanged", "No data changed in Header component");
    },
    changeBus() {
      // this.subHeadline = "This is an Event car";
      eventBus.$emit("change-bus", this.subHeadline);
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
