<template>
    <div>
         
        <img class="card-img-top" v-bind:src="member.image" alt="">
        
        <div class="card-body">
            <h5 class="card-title text-center mb-0">{{ member.nombre }}</h5>
            <p class="card-text text-center"><small class="text-muted">{{ member.rol }}</small></p>

            <hr>

            <p class="card-text mb-1"><small class="text-muted"> Código 00{{ member.codigo }}</small></p>
            <p style="font-size: 13px;">{{ member.descripcion }}</p>

        </div>
 
    </div>
</template>

<script>

// import datos from "../assets/json/members.json";

export default {
    name: "TeamCard",
    props: ['member']
    // computed: {
    //     items() {
    //     return datos.map((item) => {
    //         return item;
    //     })
    //     }
    // }
}
</script>

<style scoped>

</style>