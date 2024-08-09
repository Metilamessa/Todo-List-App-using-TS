import React, { useState } from "react";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";
import "./styles.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index: number) => {
    const newTodo = prompt("Edit Todo:", todos[index]);
    if (newTodo) {
      const newTodos = [...todos];
      newTodos[index] = newTodo;
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default App;
