import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }]
  },
  mutations: {
    addRecipe (state, newRecipe) {
      state.recipes = [newRecipe, ...state.recipes]
    },
  },
  actions: {},
  modules: {}
});
