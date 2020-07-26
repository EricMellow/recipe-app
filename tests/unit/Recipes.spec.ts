import { shallowMount, createLocalVue } from "@vue/test-utils";
import Recipes from "@/components/Recipes.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("Recipes.vue", () => {
  let mutations: any;
  let state;
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    state = {
      recipes: [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }]
    }

    mutations = {
      addRecipe: jest.fn(),
      deleteRecipe: jest.fn()
    }

    store = new Vuex.Store({
      state,
      mutations
    })
    wrapper = shallowMount(Recipes, { store, localVue });
  });

  describe("openModal", () => {
    it("sets modalTitle and modalBody with data from the recipe it is passed", () => {
      const mockRecipe = {
        id: 402,
        title: "Test Title",
        instructions: "Test instructions"
      };

      expect(wrapper.vm.$data.modalTitle).toEqual("");
      expect(wrapper.vm.$data.modalBody).toEqual("");
      wrapper.vm.openModal(mockRecipe);
      expect(wrapper.vm.$data.modalTitle).toEqual("Test Title");
      expect(wrapper.vm.$data.modalBody).toEqual("Test instructions");
    })

    it("sets modalOpen to the opposite of what it is currently", () => {
      const mockRecipe = {
        id: 402,
        title: "Test Title",
        instructions: "Test instructions"
      };

      expect(wrapper.vm.$data.modalOpen).toEqual(false);
      wrapper.vm.openModal(mockRecipe);
      expect(wrapper.vm.$data.modalOpen).toEqual(true);
    })
  })

  describe("filterRecipes", () => {
    it("should filter the recipes by title based on the value in search", () => {
      const startingRecipes = [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }];
      const expectedRecipes = [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }];

      expect(wrapper.vm.$data.recipes).toEqual(startingRecipes);
      wrapper.vm.$data.search = "fir";
      wrapper.vm.filterRecipes();
      expect(wrapper.vm.$data.recipes).toEqual(expectedRecipes);
    })
  })

  describe("deleteRecipe", () => {
    it("calls deleteRecipe from the store", () => {
      const mockRecipe = {
        id: 402,
        title: "Test Title",
        instructions: "Test instructions"
      };

      wrapper.vm.deleteRecipe(mockRecipe);
      expect(mutations.deleteRecipe).toHaveBeenCalled();
    })

    it("resets the recipes to what is in the store", () => {
      const mockRecipe = {
        id: 402,
        title: "Test Title",
        instructions: "Test instructions"
      };
      const expected = [{ id: 1, title: 'First Recipe', instructions: 'Some food and stuff' }, { id: 2, title: 'Second Recipe', instructions: 'Different instructions' }];

      wrapper.vm.$data.recipes = [];
      expect(wrapper.vm.$data.recipes).toEqual([]);
      wrapper.vm.deleteRecipe(mockRecipe);
      expect(wrapper.vm.$data.recipes).toEqual(expected);

    })
  })

});
