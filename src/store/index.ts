/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

interface Recipe {
  id: Date;
  title: string;
  instructions: string;
}

export default new Vuex.Store({
  state: {
    recipes: <any>[]
  },
  mutations: {
    addRecipe(state, newRecipe) {
      state.recipes = [newRecipe, ...state.recipes];
    },
    deleteRecipe(state, recipeToRemove) {
      state.recipes = state.recipes.filter(
        (recipe: Recipe) => recipe.id !== recipeToRemove.id
      );
    }
  },
  actions: {},
  modules: {}
});
