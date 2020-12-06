<template>
  <!-- Noticias -->
  <div class="mt-2">
    <h2 class="text-center">{{ title }}</h2>
    <div class="row row-cols-2">
      <div class="col" v-for="dato in datos" v-bind:key="dato.id">
        <div class="d-flex justify-content-center">
          <div class="card mb-3" style="max-width: 900px">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img :src="dato.Poster" class="card-img" alt="Poster Image" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ dato.Title }}</h5>
                  <p class="card-text">{{ dato.Year }}</p>
                  <p class="card-text">
                    <small class="text-muted">Here goes the link</small>
                  </p>
                  <div class="boton">
                      <img src="../../public/pokeball.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageNews",
  props: {
    title: String,
  },
  data() {
    return {
      datos: null,
      poster: "",
      loading: true,
      errored: false,
    };
  },
  // Noticias (Cambiar la API y demás)
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=harry&type=movie&apikey=eddbf14f")
      .then((response) => {
        this.datos = response.data.Search.slice(0, 4);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
    .boton {
        width: 50%;
        height: 50px;
        margin: 5px;
        padding: 10px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        font-size: 11px;
        line-height: 32px;
        text-transform: uppercase;
        float: left;
    }
    .boton:hover {
        opacity: 0.5;
        -moz-opacity: 0.5;
        filter: alpha (opacity=50);
    }

    .boton>img{
        width: 50PX;;
    }
    .boton a {
        color: #fff;
        text-decoration: none;
        padding: 5px 5px 5px 0;
    }
</style>