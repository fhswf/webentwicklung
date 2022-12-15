
let todos = [];
const status = ["offen", "in Bearbeitung", "erledigt"];

function createTodoElement(todo) {
    let list = document.getElementById("todo-list");
    let due = new Date(todo.due);
    list.insertAdjacentHTML("beforeend",
        `<div>${todo.title}</div> 
         <div>${due.toLocaleDateString()}</div>
         <button class="status" onclick="changeStatus(${todo.id})">${status[todo.status || 0]}</button>
         <button class="edit" onclick="editTodo(${todo.id})">Bearbeiten</button>
         <button class="delete" onclick="deleteTodo(${todo.id})">Löschen</button>`);
}

function showTodos() {
    let todoList = document.getElementById("todo-list");

    // Clear the todo list
    todoList.innerHTML = "";

    // Add all todos to the list
    todos.forEach(todo => {
        createTodoElement(todo);
    });
}

function initForm(event) {
    event.preventDefault();

    // Reset the form
    event.target.title.value = "";
    event.target.submit.value = "Todo hinzufügen";
    // Reset the id. This is used to determine if we are editing or creating a new todo.
    event.target.dataset.id = "";

    // Set the default due date to 3 days from now
    event.target.due.valueAsDate = new Date(Date.now() + 3 * 86400000);
}

function init() {
    // Get todos from loacal storage
    todos = loadTodos();
    console.log("Loaded todos: %o", todos);

    // Reset the form
    document.getElementById("todo-form").reset();

    // Show all todos
    showTodos();
}

function saveTodo(evt) {
    evt.preventDefault();

    // Get the id from the form. If it is not set, we are creating a new todo.
    let id = Number.parseInt(evt.target.dataset.id) || Date.now();

    let todo = {
        id,
        title: evt.target.title.value,
        due: evt.target.due.valueAsDate,
        status: Number.parseInt(evt.target.status.value) || 0
    }

    let index = todos.findIndex(t => t.id === todo.id);
    if (index >= 0) {
        todos[index] = todo;
        console.log("Updating todo: %o", todo);
    } else {
        todos.push(todo);
        console.log("Saving new todo: %o", todo);
    }

    showTodos();
    evt.target.reset();
    localStorage.setItem("todos", JSON.stringify(todos));
}

function editTodo(id) {
    let todo = todos.find(t => t.id === id);
    console.log("Editing todo: %o", todo);
    if (todo) {
        let form = document.getElementById("todo-form");
        form.title.value = todo.title;
        form.due.valueAsDate = new Date(todo.due);
        form.status.value = todo.status;
        form.submit.value = "Änderungen speichern";
        form.dataset.id = todo.id;
    }
}

function deleteTodo(id) {
    let todo = todos.find(t => t.id === id);
    console.log("Deleting todo: %o", todo);
    if (todo) {
        todos = todos.filter(t => t.id !== id);
        showTodos();
        saveTodos();
    }
}

function changeStatus(id) {
    let todo = todos.find(t => t.id === id);
    console.log("Changing status of todo: %o", todo);
    if (todo) {
        todo.status = (todo.status + 1) % status.length;
        showTodos();
        saveTodos();
    }
}

function loadTodos() {
    let todos = localStorage.getItem("todos");
    if (todos) {
        return JSON.parse(todos);
    } else {
        return [];
    }
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

