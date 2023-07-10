import React, { useState } from 'react';
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false }
];

function ExampleTodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    const todo = todos.find((t) => t.id === nextTodo.id);
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
    setTodos((currentTodos) => {
      return currentTodos.map((currentTodo) => {
        if (currentTodo.id === nextTodo.id) {
          return todo;
        } else {
          return currentTodo;
        }
      });
    });
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex((t) => t.id === todoId);
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
export default ExampleTodoList;

