<template>
  <div class="recipes">
    <div
      v-bind:key="recipe.id"
      v-for="recipe in recipes"
      v-on:click="openModal(recipe)"
    >
      {{ recipe.title }}
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
      recipes: this.$store.state.recipes,
      modalOpen: false,
      modalTitle: "",
      modalBody: ""
    };
  },
  methods: {
    openModal(recipe) {
      this.modalTitle = recipe.title;
      this.modalBody = recipe.instructions;
      this.modalOpen = !this.modalOpen;
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
