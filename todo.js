var _a;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task) {
        var newTodo = { id: this.nextId++, task: task };
        this.todos.push(newTodo);
        this.displayTodos();
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.displayTodos();
    };
    TodoList.prototype.editTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.task = newTask;
            this.displayTodos();
        }
    };
    TodoList.prototype.displayTodos = function () {
        var _this = this;
        var taskList = document.getElementById("taskList");
        if (taskList) {
            taskList.innerHTML = "";
            this.todos.forEach(function (todo) {
                var listItem = document.createElement("li");
                var taskText = document.createElement("span");
                taskText.textContent = todo.task;
                taskText.contentEditable = "false";
                listItem.appendChild(taskText);
                var editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.style.marginLeft = "10px";
                editButton.style.fontSize = "10px";
                editButton.style.backgroundColor = "white";
                editButton.style.color = "blue";
                editButton.style.padding = "5px 10px";
                editButton.addEventListener("click", function () {
                    if (editButton.textContent === "Edit") {
                        taskText.contentEditable = "true";
                        taskText.focus();
                        editButton.textContent = "Save";
                    }
                    else {
                        taskText.contentEditable = "false";
                        _this.editTodo(todo.id, taskText.textContent || "");
                        editButton.textContent = "Edit";
                    }
                });
                listItem.appendChild(editButton);
                var deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.style.marginLeft = "10px";
                deleteButton.style.backgroundColor = "white";
                deleteButton.style.fontSize = "10px";
                deleteButton.style.color = "red";
                deleteButton.style.padding = "5px 10px";
                deleteButton.addEventListener("click", function () { return _this.removeTodo(todo.id); });
                listItem.appendChild(deleteButton);
                taskList.appendChild(listItem);
            });
        }
    };
    return TodoList;
}());
var myTodoList = new TodoList();
(_a = document.getElementById("addTaskButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        myTodoList.addTodo(taskValue);
        taskInput.value = "";
    }
    else {
        alert("enter a task");
    }
});
