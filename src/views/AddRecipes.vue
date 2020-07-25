<template>
  <div class="add">
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
