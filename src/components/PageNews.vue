<template>
<!-- Noticias -->
<div class="mt-2">
    <h2 class="text-center">{{ title }}</h2>
    <div class="row row-cols-2">
            
        <div class="col" v-for="dato in datos" v-bind:key="dato.id">

            <div class= "d-flex justify-content-center">
                <div class="card mb-3" style="max-width: 900px;">
                    <div class="row no-gutters">
                        <div class="col-md-4 mt-4">
                            <img :src="dato.urlToImage" class="card-img" alt="News Image">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ dato.title }}</h5>
                                <p style="font-size: 13px;">{{ dato.description }}</p>
                                <a :href="dato.url" class="card-text"><small class="text-muted">Here goes the link</small></a>
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
        title: String
    },
    data () {
    return {
        datos: null,
        poster: "",
        loading: true,
        errored: false
    }
    },
    // Noticias (Cambiar la API y demás)
mounted () {
    axios
        .get('http://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=66f1861c8a2447c1ae3b8d5735305da5')
        .then(response => {
            this.datos = response.data.articles.slice(4, 8)
            // this.poster = response.data.Poster
        })
        .catch(error => {
            console.log(error)
            this.errored = true
          })
        .finally(() => this.loading = false)
    },
}
</script>

<style>

</style>