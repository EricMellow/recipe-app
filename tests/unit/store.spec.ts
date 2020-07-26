import { shallowMount, createLocalVue } from "@vue/test-utils";
import AddForm from "@/components/AddForm.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("AddForm.vue", () => {
  let mutations: any;
  let state: any;
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    state = {
      recipes: [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }]
    }

    mutations = {
      addRecipe(state: any, newRecipe: any) {
        state.recipes = [newRecipe, ...state.recipes]
      },
      deleteRecipe(state: any, recipeToRemove: any) {
        state.recipes = state.recipes.filter((recipe: any) => recipe.id !== recipeToRemove.id)
      }
    }

    store = new Vuex.Store({
      state,
      mutations
    })
    // wrapper = shallowMount(AddForm, { store, localVue });
  });

  describe("addRecipe", () => {
    it("adds a recipe to the array", () => {
      const startRecipes = [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }];
      const expectedRecipes = [{ id: 3, title: 'Third Recipe', instructions: 'Test the mutation' }, { id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }];
      const recipeToAdd = {id: 3, title: 'Third Recipe', instructions: 'Test the mutation'};

      expect(state.recipes).toEqual(startRecipes);
      mutations.addRecipe(state, recipeToAdd);
      expect(state.recipes).toEqual(expectedRecipes);
    });

  })

  describe("deleteRecipe", () => {
    it("deletes the recipe it is passed from state", () => {
      const startRecipes = [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }];
      const expectedRecipes = [{ id: 2, title: 'Second Recipe', instructions: 'Different instructions' }];
      const recipeToRemove = { id: 1, title: 'First Recipe', instructions: 'Some food and stuff' };

      expect(state.recipes).toEqual(startRecipes);
      mutations.deleteRecipe(state, recipeToRemove);
      expect(state.recipes).toEqual(expectedRecipes);
    })
  })

});
