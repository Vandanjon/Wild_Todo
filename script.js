const todoList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const myTodo = input.value;

  const listItem = document.createElement("li");

  listItem.textContent = myTodo;

  input.value = "";

  todoList.appendChild(listItem);
});
