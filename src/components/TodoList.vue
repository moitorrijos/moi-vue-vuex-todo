<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
    >
      <span class="text">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleCompleted(todo.id)"
        />
        <input type="text" v-model="todo.text" />
      </span>
      <button @click="deleteTask(todo.id)">
        <img src="../assets/delete.svg" alt="delete icon" />
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "TodoList",
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["getTodoById"]),
  },
  methods: {
    toggleCompleted(id) {
      this.$store.commit("toggleCompleted", id);
    },
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--gold);
  min-height: 50vh;
}
li {
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--gold);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
li span.text {
  flex-grow: 1;
}
input[type="text"] {
  font: inherit;
  border: 0;
}
li.completed input[type="text"] {
  text-decoration: line-through;
}
button {
  background: transparent;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  align-items: center;
}
button img {
  width: 20px;
  height: 1rem;
}
</style>