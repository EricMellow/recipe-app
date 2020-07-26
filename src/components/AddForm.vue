<template>
  <div class="add-form">
    <input class="title" v-model="title" placeholder="title" />
    <textarea
      class="instructions"
      v-model="instructions"
      placeholder="instructions"
    />
    <button
      class="save-btn"
      v-on:click="storeRecipe"
      :disabled="!title || !instructions"
    >
      Save Recipe
    </button>
    <div class="success-msg" v-if="showSuccessMessage">
      Your recipe has been saved
    </div>
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
.add-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 200px;
}

.title {
  background-color: #46424d;
  border: none;
  font-size: 1.5rem;
  margin: 10px;
  border-radius: 4px;
  padding: 10px 10px 10px 10px;
  color: #fff;
  min-width: 325px;
}

.instructions {
  background-color: #46424d;
  border: none;
  font: 400 1.5rem Arial;
  margin: 10px;
  border-radius: 4px;
  padding: 10px 10px 10px 10px;
  color: #fff;
  min-width: 325px;
  min-height: 300px;
}

.save-btn {
  color: #017fdd;
  border-radius: 5px;
  border: none;
  border: 2px solid #017fdd;
  font-size: 1rem;
  padding: 6px;
  margin: 5px;
  background-color: #2b2833;
}

.save-btn:hover {
  background-color: #222025;
  cursor: pointer;
}

.save-btn:disabled {
  color: #46424d;
  border: 2px solid #46424d;
}

.save-btn:disabled:hover {
  background-color: #2b2833;
}

.success-msg {
  color: green;
  font-size: 1.5rem;
  margin-top: 10px;
  border: 2px solid green;
  border-radius: 5px;
  padding: 10px;
}

@media only screen and (max-width: 400px) {
  .instructions {
    width: 80vw;
    min-width: 0;
    height: 250px;
    min-height: 0;
    font-size: 1rem;
  }

  .title {
    min-width: 0;
    width: 80vw;
    font-size: 1rem;
  }

  .success-msg {
    width: 80vw;
  }
}
</style>
