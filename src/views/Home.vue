<template>
  <div class="home">
    <Recipes />
  </div>
</template>

<script>
import Recipes from "@/components/Recipes.vue";

export default {
  name: "Home",
  components: {
    Recipes
  }
};
</script>
