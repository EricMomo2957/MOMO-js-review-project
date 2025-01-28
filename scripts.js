let todos = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list'); // ID updated to match HTML

function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>`;
        todoList.appendChild(li);
    });
}

// Function to add a todo
function addTodo(event) {
    event.preventDefault(); // Prevent form submission
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // Clear the input
        renderTodos(); // Call renderTodos() with parentheses
    }
}

// Function to edit a todo
function editTodo(index) {
    const updatedTodo = prompt('Edit your todo: ', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos(); // Call renderTodos() with parentheses
    }
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) { // Fixed typo from "comform" to "confirm"
        todos.splice(index, 1); // Remove the todo
        renderTodos(); // Call renderTodos() with parentheses
    }
}

// Event Listener
todoForm.addEventListener('submit', addTodo);

// Initial render (optional if you want to render an empty list initially)
renderTodos();

