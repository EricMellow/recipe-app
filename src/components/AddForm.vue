<template>
  <div class="add">
    <input v-model="title" placeholder="title" />
    <textarea v-model="instructions" placeholder="instructions" />
    <button v-on:click="storeRecipe" :disabled="!title || !instructions">
      Save Recipe
    </button>
    <div v-if="showSuccessMessage">Your recipe has been saved</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AddForm",
  data() {
    return {
      title: "",
      instructions: "",
      showSuccessMessage: false
    };
  },
  methods: {
    storeRecipe() {
      const newRecipe = {
        id: Date.now(),
        title: this.title,
        instructions: this.instructions
      };
      this.$store.commit("addRecipe", newRecipe);
      this.addSuccessful();
    },
    addSuccessful() {
      this.title = "";
      this.instructions = "";
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
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
