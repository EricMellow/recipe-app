<template>
  <div class="recipes">
    <input
      class="search-bar"
      v-model="search"
      placeholder="search for your favorite recipe"
      v-on:keyup="filterRecipes"
    />
    <div class="recipe-container">
      <h4 v-if="!recipes.length" style="color: #cbc9cf;">
        You don't have any recipes. Click "Add Recipe" above to store your first
        recipe.
      </h4>
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
  height: 75vh;
  overflow-y: scroll;
  background-color: #2b2733;
}

.recipe {
  box-shadow: 4px 4px 6px 2px #161419;
  margin: 15px;
  padding: 10px;
  border-radius: 3px;
  min-width: 40vw;
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
  max-width: 200px;
  min-width: 200px;
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
  background-color: #342e3e;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #342e3e;
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

.search-bar {
  background-color: #46424d;
  border: none;
  font-size: 1.5rem;
  margin: 10px;
  border-radius: 4px;
  padding: 10px 10px 10px 10px;
  color: #fff;
  min-width: 325px;
}

@media only screen and (max-width: 400px) {
  .recipe-container {
    height: 70vh;
  }

  .recipe {
    min-width: 0;
    width: 80vw;
  }

  .recipe-title {
    min-width: 0;
  }

  .search-bar {
    min-width: 0;
    width: 80vw;
    font-size: 0.8rem;
  }

  .delete-btn, .view-btn {
    font-size: 0.8rem;
  }
}
</style>
