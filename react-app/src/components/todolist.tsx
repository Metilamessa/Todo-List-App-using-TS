import React from 'react';
import Todo from './todo';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo
            todo={todo}
            onDelete={() => onDelete(index)}
            onEdit={() => onEdit(index)}
          />
          {index < todos.length - 1 && <hr />} {}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
