<template>
  <div>
    <div class="row mt-md-5 mt-sm-5 mt-xs-5">
      <div class="col-lg-6 col-xs-12" v-for="(item, index) of news" :key="index">
        <div
          class="d-flex justify-content-center align-items-center" >

            

          <div class="p-3">
              <img width="250px" height="250px" :src="item.urlToImage" alt="Imagen de noticia">
            
          </div>

          

          <div class="p-2">
              <h4> <b> {{item.title}} </b></h4>
            <p>
              {{item.description}}
            </p>
          </div>
        </div>
        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
            <a :href="item.url" class="btn btn-outline-info" target="_blank"> 
                Ver noticia
            </a>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Api",
  data() {
    return {
      news: null,
    };
  },
  mounted() {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=66f1861c8a2447c1ae3b8d5735305da5"
      )
      .then((response) => {
        this.news = response.data.articles.slice(0, 4);
        console.log(this.news);
      });
  },
};
</script>

<style scoped>
</style>