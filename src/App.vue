<template>
  <div id="app">

    <page-header/>

    <!-- Noticias -->
    <section id="news" class="container-fluid">
      <hr>
      <page-news title="Sección de Noticias"/>
    </section>

    <section id="team" class="container-fluid">
      <hr>
      <h2 class="text-center">Equipo de trabajo</h2>
      <div class="card-deck">
        <div class="card m-n2" v-for="(item, index) of team" v-bind:key="index">
          <team-card :member="item"></team-card>
        </div>
      </div>
    </section>

    <div class="mt-2">
      <page-footer></page-footer>
    </div>



  </div>
</template>

<script>

import PageHeader from './components/PageHeader.vue';
import PageNews from './components/PageNews.vue';
import TeamCard from './components/TeamCard.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    TeamCard,
    PageNews,
    PageFooter
  },
   data() {
      return {
        title: "Vue example",
        team: [
            {
                codigo : 1 ,
                nombre : "Wolfgang Santamaría" ,
                descripcion : "Ingeniero, Músico y sobre apasionado a los videojuegos." ,
                rol : "Scrum Master" ,
                image : require('../src/assets/images/wolf.jpeg')
                
            },
            {
                codigo : 2 ,
                nombre : "Yasar José Cure" ,
                descripcion : "Estudiante de Ingeniería de Sistemas. Me gusta la comida, jugar fútbol y los videojuegos, pero eso cuando hay tiempo." ,
                rol : "Desarrollador backend" ,
                image : require('../src/assets/images/yaser.jpeg')
            },
            {
                codigo : 3 ,
                nombre : "Geraldine Claros" ,
                descripcion : "Estudiante de Ingeniería Física. Amante a los animales y la tecnología" ,
                rol : "Desarrollador frontend" ,
                image : require('../src/assets/images//geral.jpeg')
            },
            {
                codigo : 4,
                nombre : "Jason Roberto Camargo" ,
                descripcion : "Apasionado por el desarrollo de software y la tecnologia. Amante a la velocidad. Biker " ,
                rol : "Desarrolador Fullstack" ,
                image : require('../src/assets/images/jason.jpeg')
            },
            {
                codigo : 5 ,
                nombre : "Jaime Andrés Bravo" ,
                descripcion : "Ingeniero mecanico, baterista, ciclista, y exfutbolista. Incursionando en el desarrollo de aplicaciones. Con experiencia en el montaje de calderas" ,
                rol : "Diseñador Gráfico" ,
                image : require('../src/assets/images/andres.jpeg')
            }
        ]
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
