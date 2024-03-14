const todoList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const myTodo = input.value;

  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const span = document.createElement("span");
  span.textContent = myTodo;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "supprimer";

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  input.value = "";
});
