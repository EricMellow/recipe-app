<template>
  <div class="add">
    <h1 style="color: #CBC9CF;">Create a new recipe</h1>
    <AddForm />
  </div>
</template>

<script>
// @ is an alias to /src
import AddForm from "@/components/AddForm.vue";

export default {
  name: "Add",
  components: {
    AddForm
  }
};
</script>
