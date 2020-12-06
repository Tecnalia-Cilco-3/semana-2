<template>
<!-- Esto es una prueba del axios -->
    <div class="container">

        <div class="row">
            <div class="col-sm-4">
                <h1>VUE JS EXAMPLE</h1>
                <ul class="list-group">
                    <img v-bind:src="poster" alt="" width="300px">
                        <li class="list-group-item">
                        {{ datos.title }}
                        
                    </li>
                </ul>
            </div>
            <div class="col-sm-8">
                <h1>JSON</h1>

                <section v-if="errored">
                    <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
                    </section>
                
                <section v-else>
                    <div v-if="loading">Cargando...</div>
                
                    <div v-else >
                        <pre>
                            {{ datos }}
                        </pre>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "PruebaAxios",
    props: "",
    data () {
    return {
        datos: null,
        poster: "",
        loading: true,
        errored: false
    }
    },
    mounted () {
    axios
        .get('http://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=66f1861c8a2447c1ae3b8d5735305da5')
        .then(response => {
            this.datos = response.data.articles.slice(0, 4)
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