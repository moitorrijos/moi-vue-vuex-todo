<template>
  <form @submit.prevent="addTask">
    <label for="new-todo">¿Qué necesitas hacer hoy?</label>
    <div class="todo-input-button">
      <input
        type="text"
        name="new-todo"
        id="new-todo"
        v-model="newTask"
        placeholder="Conquistar el mundo"
      />
      <button type="submit" :disabled="!newTask.length">Agregar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<style scoped>
form {
  box-shadow: 0 -1px 22px rgba(0, 0, 0, 0.35);
}
label {
  display: block;
  padding: 0.5rem 1rem;
  background: var(--light-gray);
}
.todo-input-button {
  display: flex;
}
input {
  flex-grow: 1;
  border: none;
  padding: 1rem;
  font: inherit;
}
input:focus {
  outline: 2px solid var(--gold);
}
button {
  border: none;
  border-radius: 0;
  padding: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: var(--gold);
  color: black;
  text-transform: uppercase;
}
</style>