<template>
  <ul>
    <li v-for="(framework, index) in frameworks" v-bind:key="index">
      {{ framework }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      frameworks: ["vueJS", "reactJS", "NextJS", "ExpressJS"],
    };
  },
};
</script>

<style scoped>
li {
  color: greenyellow;
}
</style>