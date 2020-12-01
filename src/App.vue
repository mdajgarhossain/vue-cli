<template>
  <div>
    <Header :headline="headline" :language="language" :framework="framework" />
    <Developers :developers="developers" :title="title" />
    <hr />
    <Developers :developers="developers" :title="title" />
    <Footer :headline="headline" :language="language" :framework="framework" />
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
      language: "Javascript",
      date: 1995,
      //reference type data
      framework: {
        title: "VueJS",
      },
    };
  },
};
</script>

<style></style>
