import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, completed: false, text: "Aprender Vuex" },
      { id: 2, completed: true, text: "Instalar Vue + Vuex" }
    ]
  },
  getters: {
    tasksCount: (state) => {
      return state.todos.length;
    },
    completedTasks: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
    pendingTasksCount: (state) => {
      return state.todos.filter((todo) => !todo.completed).length;
    },
    completedTasksCount: (state, getters) => {
      return getters.completedTasks.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    }
  },
  mutations: {
    addTask(state, newTask) {
      state.todos.push({
        id: Date.now(),
        completed: false,
        text: newTask
      });
    },
    toggleCompleted(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      const index = state.todos.indexOf(todo);
      if (index === -1) return;
      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTask(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      const index = state.todos.indexOf(todo);
      if (index === -1) return;
      state.todos.splice(index, 1);
    }
  }
});

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
