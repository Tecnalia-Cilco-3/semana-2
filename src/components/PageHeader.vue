<template>
<div>
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <a class="navbar-brand" href="#">
            <img src="../../src/assets/images/js_logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            Vue JS Page
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#news">Noticias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team">Equipo</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Carousel -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
       
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/vuejs.jpg" class="d-block w-100" alt="Vue Js" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>Vue JS</h5>
                    <p>Utilizamos el framework Vue JS y su característico trabajo con componentes.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/bootstrap.jpg" class="d-block w-100" alt="Bootstrap">

                <div class="carousel-caption d-none d-md-block">
                    <h5>Bootstrap</h5>
                    <p>Los estilos de Bootstrap fueron de mucha ayuda para diseñar nuestro sitio responsive.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/js.png" class="d-block w-100" alt="JavaScript" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>JavaScript</h5>
                    <p>El manejo de JavaScript nos permitió comprender el funcionamiento del Framework Vue JS. </p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    
</div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {

  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
