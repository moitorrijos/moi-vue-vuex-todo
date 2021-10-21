<template>
  <div class="todo-app">
    <h1 v-if="tasksCount > 1">{{ tasksCount }} Tareas</h1>
    <h1 v-else-if="tasksCount == 1">1 Tarea</h1>
    <h1 v-else>No hay tareas, crea una abajo</h1>

    <h2 v-if="pendingTasksCount > 1">
      {{ pendingTasksCount }} tareas pendiente
    </h2>
    <h2 v-else-if="pendingTasksCount == 1">1 tarea pendiente</h2>
    <h2 v-else>No hay tareas pendientes, Buen trabajo!</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoHeader",
  computed: mapGetters(["tasksCount", "pendingTasksCount"]),
};
</script>

<style scoped>
h1,
h2 {
  margin: 1.5rem 1rem;
  text-align: center;
  line-height: 1.1;
}
</style>