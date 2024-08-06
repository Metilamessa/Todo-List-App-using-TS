interface Todo {
  id: number;
  task: string;
}

class TodoList {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(task: string): void {
    const newTodo: Todo = { id: this.nextId++, task };
    this.todos.push(newTodo);
    this.displayTodos();
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.displayTodos();
  }

  editTodo(id: number, newTask: string): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.task = newTask;
      this.displayTodos();
    }
  }

  displayTodos(): void {
    const taskList = document.getElementById("taskList");
    if (taskList) {
      taskList.innerHTML = "";
      this.todos.forEach((todo) => {
        const listItem = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = todo.task;
        taskText.contentEditable = "false";
        listItem.appendChild(taskText);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.marginLeft = "10px";
        editButton.style.fontSize = "10px";
        editButton.style.backgroundColor = "white";
        editButton.style.color = "blue";
        editButton.style.padding = "5px 10px";
        editButton.addEventListener("click", () => {
          if (editButton.textContent === "Edit") {
            taskText.contentEditable = "true";
            taskText.focus();
            editButton.textContent = "Save";
          } else {
            taskText.contentEditable = "false";
            this.editTodo(todo.id, taskText.textContent || "");
            editButton.textContent = "Edit";
          }
        });
        listItem.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.style.backgroundColor = "white";
        deleteButton.style.fontSize = "10px";
        deleteButton.style.color = "red";
        deleteButton.style.padding = "5px 10px";
        deleteButton.addEventListener("click", () => this.removeTodo(todo.id));
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
      });
    }
  }
}

const myTodoList = new TodoList();

document.getElementById("addTaskButton")?.addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const taskValue = taskInput.value.trim();
  if (taskValue !== "") {
    myTodoList.addTodo(taskValue);
    taskInput.value = "";
  } else {
    alert("enter a task");
  }
});
