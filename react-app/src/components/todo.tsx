import React, { useState } from "react";

interface TodoProps {
  todo: string;
  onDelete: () => void;
  onEdit: (newTodo: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(todo);
  };
  const buttonStyle = {
    backgroundColor: "rgb(160, 245, 216)",
    color: "black",
    border: "none",
    padding: "8px 16px",
  };
  const buttonStyles = {
    backgroundColor: "rgb(245, 160, 160)",
    color: "white",
    border: "none",
    padding: "8px 16px",
  };
  const savestyle = {
    color: "green",
    border: "none",
    padding: "8px 16px",
  };
  const canstyle = {
    color: "red",
    border: "none",
    padding: "8px 16px",
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave} style={savestyle}>
            Save
          </button>
          <button onClick={handleCancel} style={canstyle}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <button onClick={handleEdit} style={buttonStyle}>
            Edit
          </button>
          <button onClick={onDelete} style={buttonStyles}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
