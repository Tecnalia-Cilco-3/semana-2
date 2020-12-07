<template>
    <div class="card text-white bg-dark">
        <div class="d-flex justify-content-center p-2">
            <div class="rounded-circle">
                <img :src="member.image" class="rounded-circle" alt="..." style="height: 250px" />
                <!-- <img class="card-img-top" v-bind:src="member.image" alt="not found"> -->
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title text-center mb-0">{{ member.nombre }}</h5>
            <p class="card-text text-center">
                <small class="text-muted">{{ member.rol }}</small>
            </p>

            <hr />

            <p class="card-text mb-1">
                <small class="text-muted"> Código 00{{ member.codigo }}</small>
            </p>
            <p style="font-size: 13px">{{ member.descripcion }}</p>
        </div>
    </div>
</template>

<script>
// import datos from "../assets/json/members.json";

export default {
  name: "TeamCard",
  props: {
    member: Object,
    // computed: {
    //     items() {
    //     return datos.map((item) => {
    //         return item;
    //     })
    //     }
  },
};
</script>

<style scoped>
</style>