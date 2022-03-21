import React from "react";
import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
