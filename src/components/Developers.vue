<template>
  <div id="developers">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      developers: [
        {
          id: 1,
          name: "Md. Zakaria Mazumder",
          speciality: "Senior Software Developer",
          show: false,
        },
        {
          id: 2,
          name: "Md. Saikot Mazumder",
          speciality: "Senior Software Developer",
          show: false,
        },
        {
          id: 3,
          name: "Sirjis Khan",
          speciality: "Fullstack Developer",
          show: false,
        },
        {
          id: 4,
          name: "Kanak Hasan",
          speciality: "Front-end Developer",
          show: false,
        },
        {
          id: 5,
          name: "Bappi Khan",
          speciality: "Front-end Developer",
          show: false,
        },
        {
          id: 6,
          name: "Md. Ajgar Hossain Jewel",
          speciality: "Intern",
          show: false,
        },
      ],
    };
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