import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import s from "./TodoList.module.css";
const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("todos"));
    if (saveData?.length) {
      return saveData;
    }
    return [];
  });
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const newObj = {
      id: crypto.randomUUID(),
      todo: newValue,
      completed: false,
    };
    setTodos((prev) => [...prev, newObj]);
    setNewValue("");
  };
  const handleDelete = (id) => {
    const newData = todos.filter((item) => item.id !== id);
    setTodos(newData);
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div>
      <div className={s.parantBox}>
        <div className={s.flexBox}>
          <input
            className={s.input}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            type="text"
          />
          <button className={s.btn} onClick={addTodo}>
            Add
          </button>
        </div>
        <ul>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
