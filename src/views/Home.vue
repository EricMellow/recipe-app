<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Recipes />
  </div>
</template>

<script>
// @ is an alias to /src
import Recipes from "@/components/Recipes.vue";

export default {
  name: "Home",
  components: {
    Recipes
  }
};
</script>
