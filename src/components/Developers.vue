<template>
  <div id="developers">
    <span>{{ showRecievedProps() }}</span>
    <ul>
      <li
        v-for="developer in developers"
        v-bind:key="developer.id"
        v-on:click="developer.show = !developer.show"
      >
        <h2>{{ developer.name }}</h2>
        <h3 v-show="developer.show">Speciality: {{ developer.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteItem">Delete</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    //recieve reference type props
    developers: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    showRecievedProps() {
      console.log(this.developers);
    },
    deleteItem() {
      this.developers.pop();
    },
  },
};
</script>

<style scoped>
#developers {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>