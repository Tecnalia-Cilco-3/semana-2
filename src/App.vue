<template>
  <div id="app">
    <page-header />
    <!--Inicio Services  -->
    <page-services> </page-services>
    <!--Fin Services -->

    <!-- Noticias -->
    <section id="news" class="container-fluid">
      <hr class="bg-white" />
      <h2 class="text-center" style="color: white">Sección de Noticias</h2>
      <page-news />
    </section>

    <!-- Team -->
    <section id="team" class="container-fluid">
      <hr class="bg-white" />
      <h2 class="text-center" style="color: white">Equipo de trabajo</h2>
      <div class="card-deck row justify-content-center">
        <div
          class="card mt-1"
          style="min-width: 200px; max-width: 300px"
          v-for="(item, index) of team"
          v-bind:key="index"
        >
          <team-card :member="item"></team-card>
        </div>
      </div>
    </section>
    <!-- Fin Team -->

    <div class="mt-2">
      <hr class="bg-white" />
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageServices from "./components/PageServices.vue";
import PageNews from "./components/PageNews.vue";
import TeamCard from "./components/TeamCard.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageServices,
    PageNews,
    TeamCard,
    PageFooter,
  },
  data() {
    return {
      title: "Vue example",
      team: [
        {
          codigo: 1,
          nombre: "Wolfgang Santamaría",
          descripcion:
            "Ingeniero, músico y sobre apasionado a los videojuegos",
          rol: "Scrum Master",
          image: require("../src/assets/images/wolf.jpeg"),
        },
        {
          codigo: 2,
          nombre: "Yasar José Cure",
          descripcion:
            "Estudiante de Ingeniería de Sistemas. Me gusta la comida, jugar fútbol y los videojuegos, pero eso cuando hay tiempo",
          rol: "Back-end developer",
          image: require("../src/assets/images/yaser.jpeg"),
        },
        {
          codigo: 3,
          nombre: "Geraldine Claros",
          descripcion:
            "Estudiante de Ingeniería Física. Amante de los animales y la tecnología",
          rol: "Front-end developer",
          image: require("../src/assets/images//geral.jpeg"),
        },
        {
          codigo: 4,
          nombre: "Jason Roberto Camargo",
          descripcion:
            "Apasionado por el desarrollo de software y la tecnología. Amante a la velocidad. Biker",
          rol: "Full-stack developer",
          image: require("../src/assets/images/jason.jpeg"),
        },
        {
          codigo: 5,
          nombre: "Jaime Andrés Bravo",
          descripcion:
            "Ingeniero mecánico de profesión, aficionado a la batería, a montar bicicleta, y al fútbol. Incursionando en el desarrollo de aplicaciones",
          rol: "Back-end developer",
          image: require("../src/assets/images/andres.jpeg"),
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
