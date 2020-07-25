<template>
  <div class="recipes">
    <input
      v-model="search"
      placeholder="find your favorite recipe"
      v-on:keyup="filterRecipes"
    />
    <div class="recipe-container">
      <div class="recipe" v-bind:key="recipe.id" v-for="recipe in recipes">
      {{ recipe.title }}
        <button v-on:click="openModal(recipe)">
          View
        </button>
        <button v-on:click="deleteRecipe(recipe)">
          Delete
        </button>
    </div>
    </div>
    <Modal
      v-model="modalOpen"
      v-bind:title="modalTitle"
      v-bind:body="modalBody"
    ></Modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Modal from "@/components/Modal.vue";

export default Vue.extend({
  name: "Recipes",
  components: {
    Modal
  },
  data() {
    return {
      recipes: this.$store.state.recipes.sort((a, b) =>
        a.title.localeCompare(b.title)
      ),
      modalOpen: false,
      modalTitle: "",
      modalBody: "",
      search: ""
    };
  },
  methods: {
    openModal(recipe) {
      this.modalTitle = recipe.title;
      this.modalBody = recipe.instructions;
      this.modalOpen = !this.modalOpen;
    },
    filterRecipes() {
      this.recipes = this.$store.state.recipes
        .filter(recipe =>
          recipe.title.toUpperCase().includes(this.search.toUpperCase())
        )
        .sort((a, b) => a.title.localeCompare(b.title));
    },
    deleteRecipe(recipe) {
      this.$store.commit("deleteRecipe", recipe);
      this.recipes = this.$store.state.recipes.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
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
