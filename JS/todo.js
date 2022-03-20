const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");

  button.innerText = "❌";
  button.style.verticalAlign = "50%";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "transparent";
  button.style.border = "none";
  button.style.outline = "none";
  button.style.fontSize = "20px";

  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  button.style.marginLeft = "10px";
  todoList.appendChild(li);
  li.style.listStyle = "none";
  li.style.padding = "5px";
}

function handleonSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleonSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintodo); //forEach function applies paintodo for each input
}

//this function needs to return true to keep the item, unless deleted.
