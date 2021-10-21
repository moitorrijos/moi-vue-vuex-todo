<template>
  <div id="app">
    <TodoHeader />
    <TodoList />
    <TodoForm />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoForm,
  },
};
</script>

<style>
:root {
  --midnight-blue: #14213d;
  --gold: #fca311;
  --light-gray: #e5e5e5;
}
* {
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background-color: var(--midnight-blue);
  display: grid;
  place-items: center;
}
#app {
  font-family: "Space Mono", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-top: 0.5rem solid var(--gold);
  color: var(--midnight-blue);
  background-color: white;
  width: 70vw;
  min-width: 380px;
  max-width: 600px;
}
button {
  cursor: pointer;
}
</style>
