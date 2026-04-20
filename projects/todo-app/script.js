let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll("[data-filter]");

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";

  let filtered = todos;

  if (currentFilter === "active") {
    filtered = todos.filter(t => !t.completed);
  }

  if (currentFilter === "completed") {
    filtered = todos.filter(t => t.completed);
  }

  filtered.forEach(todo => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${todo.completed ? "completed" : ""}" 
            contenteditable="true" 
            onblur="editTodo(${todo.id}, this.innerText)">
        ${todo.text}
      </span>

      <div class="actions">
        <button onclick="toggleTodo(${todo.id})">✔</button>
        <button onclick="deleteTodo(${todo.id})">✖</button>
      </div>
    `;

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!input.value.trim()) return;

  todos.push({
    id: Date.now(),
    text: input.value,
    completed: false
  });

  input.value = "";
  save();
  render();
});

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  save();
  render();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);

  save();
  render();
}

function editTodo(id, newText) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: newText } : todo
  );

  save();
  render();
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    render();
  });
});

render();
