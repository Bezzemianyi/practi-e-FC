import { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};
export default App;
