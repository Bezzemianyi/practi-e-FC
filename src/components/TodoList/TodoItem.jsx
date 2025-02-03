import s from "./TodoItem.module.css";
const TodoItem = ({ id, completed, todo, handleDelete, toggleComplete }) => {
  return (
    <div>
      <li className={s.item}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        <span>{todo}</span>
        <button className={s.btn} onClick={() => handleDelete(id)}>
          {" "}
          Delete{" "}
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
