<template>
  <div class="recipes">
    <input
      v-model="search"
      placeholder="find your favorite recipe"
      v-on:keyup="filterRecipes"
    />
    <div class="recipe-container">
      <h5 v-if="!recipes">
        You don't have any recipes. Click "Add Recipe" above to store your first
        recipe.
      </h5>
      <div class="recipe" v-bind:key="recipe.id" v-for="recipe in recipes">
        <button class="view-btn" v-on:click="openModal(recipe)">
          View
        </button>
        <h4 class="recipe-title">{{ recipe.title }}</h4>
        <button class="delete-btn" v-on:click="deleteRecipe(recipe)">
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

<style scoped>
.recipe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80vh;
  overflow-y: scroll;
  background-color: #2b2733;
}

.recipe {
  box-shadow: 4px 4px 6px 2px #161419;
  margin: 15px;
  padding: 10px;
  border-radius: 3px;
  min-width: 40vw;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #46424d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recipe-title {
  max-width: 315px;
  margin: 10px;
}

.view-btn {
  color: #017fdd;
  border-radius: 5px;
  border: none;
  border: 2px solid #017fdd;
  font-size: 1rem;
  padding: 6px;
  margin: 5px;
  background-color: #46424d;
}

.view-btn:hover {
  background-color: #534a63;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #534a63;
  cursor: pointer;
}

.delete-btn {
  color: red;
  border-radius: 5px;
  border: none;
  border: 2px solid red;
  font-size: 1rem;
  padding: 6px;
  margin: 5px;
  background-color: #46424d;
}

.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 140px;
}
</style>
