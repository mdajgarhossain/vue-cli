<template>
  <div>
    <Header
      :myName="myName"
      :myProfile="myProfile"
      :headline="headline"
      v-on:changeHeadline="updateHeadline($event)"
      @change-primitive="changePrimitive"
    />
    <Developers :developers="developers" />
    <hr />
    <Developers :developers="developers" />
    <Footer :myName="myName" :myProfile="myProfile" :headline="headline" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Developers from "./components/Developers";

export default {
  components: {
    Header,
    Footer,
    Developers,
  },
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
      headline: "All Developers List",
      //primitive type data
      myName: "Ajgar",
      //refernce type data
      myProfile: {
        name: "Ajgar Hossain Jewell",
        age: 27,
      },
    };
  },
  methods: {
    updateHeadline(updatedHeadline) {
      this.headline = updatedHeadline;
    },
    changePrimitive(myNewName) {
      this.myName = myNewName;
    },
  },
};
</script>

<style></style>
