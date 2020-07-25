<template>
  <div class="recipes">
    <div v-bind:key="recipe.id" v-for="recipe in recipes">{{ recipe.title }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Recipes",
  data() {
    return {
      recipes: this.$store.state.recipes
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
