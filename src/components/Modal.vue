<template>
  <transition name="modal" v-if="value">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              {{ title }}
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{ body }}
            </slot>
          </div>

          <button class="close-btn" v-on:click.prevent="close">
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="css" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #46424d;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: #fff;
}

.modal-header {
  margin-top: 0;
  color: #017fdd;
  font-size: 1.5rem;
}

.modal-body {
  margin: 20px 0;
  white-space: pre-line;
  text-align: justify;
  font-size: 1rem;
}

.close-btn {
  color: #017fdd;
  border-radius: 5px;
  border: none;
  border: 2px solid #017fdd;
  font-size: 1rem;
  padding: 6px;
  margin: 5px;
  background-color: #46424d;
}

.close-btn:hover {
  background-color: #342e3e;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
