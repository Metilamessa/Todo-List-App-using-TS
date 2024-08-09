import React, { useState } from "react";

interface TodoFormProps {
  onAdd: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  const buttonStyles = {
    backgroundColor: "orange",
    color: "black",
    border: "none",
    padding: "8px 16px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" style={buttonStyles}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
