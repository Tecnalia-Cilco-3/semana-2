<template>
  <div id="app">
    <div class="container-fluid p-5">
          <api></api>
    </div>
    </div>
   
</template>

<script>
import Api from "./components/Api.vue";

export default {
  name: "App",
  components: {
    Api,
  },
};
</script>

