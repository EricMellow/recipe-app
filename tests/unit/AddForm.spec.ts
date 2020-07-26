import { shallowMount, createLocalVue } from "@vue/test-utils";
import AddForm from "@/components/AddForm.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("AddForm.vue", () => {
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
    wrapper = shallowMount(AddForm, { store, localVue });
  });

  describe("addSuccessful", () => {
    it("resets the title and instructions to empty strings", () => {
      wrapper.vm.$data.title = "Test title";
      wrapper.vm.$data.instructions = "Test instructions";

      expect(wrapper.vm.$data.title).toEqual("Test title");
      expect(wrapper.vm.$data.instructions).toEqual("Test instructions");
      wrapper.vm.addSuccessful();
      expect(wrapper.vm.$data.title).toEqual("");
      expect(wrapper.vm.$data.instructions).toEqual("");
    });

    it("sets showSuccessMessage to true and resets it to false after 3 seconds", () => {
      expect(wrapper.vm.$data.showSuccessMessage).toEqual(false);
      wrapper.vm.addSuccessful();
      expect(wrapper.vm.$data.showSuccessMessage).toEqual(true);
      setTimeout(() => {
        expect(wrapper.vm.$data.showSuccessMessage).toEqual(false);
      }, 3001);
    });
  })

  describe("storeRecipe", () => {
    it("should call addSuccessful", () => {
      wrapper.vm.addSuccessful = jest.fn();
      wrapper.vm.storeRecipe();
      expect(wrapper.vm.addSuccessful).toHaveBeenCalled();
    });

    it("should call addRecipe from the $store", () => {
      wrapper.vm.storeRecipe();
      expect(mutations.addRecipe).toHaveBeenCalled();
    });
  })

});
