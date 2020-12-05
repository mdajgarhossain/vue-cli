<template>
  <footer>
    <h2>{{ headline }}</h2>

    <p>{{ copyright }}</p>
    <h2>{{ subCopyright }}</h2>
  </footer>
</template>

<script>
import { bus } from "../main";
import { eventBus } from "../main";

export default {
  data() {
    return {
      copyright: "Copyright © 2020 Reformed Tech",
      subCopyright: "Don't copy",
    };
  },
  props: {
    //receive primitive type props
    headline: {
      type: String,
      default: "",
    },
  },
  created() {
    bus.$on("headlineChanged", (data) => {
      this.headline = data;
    });
    eventBus.$on("change-bus", (data) => {
      this.subCopyright = data;
    });
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
