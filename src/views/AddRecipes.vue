<template>
  <div class="add">
    <h1 style="color: #CBC9CF;">Create a new recipe</h1>
    <AddForm />
  </div>
</template>

<script>
import AddForm from "@/components/AddForm.vue";

export default {
  name: "Add",
  components: {
    AddForm
  }
};
</script>

<style scoped>
@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
