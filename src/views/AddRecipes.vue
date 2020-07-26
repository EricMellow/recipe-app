<template>
  <div class="add">
    <h3 style="color: #CBC9CF;">Create a new recipe</h3>
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
