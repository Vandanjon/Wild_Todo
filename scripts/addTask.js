export function addTask(todoText) {
  const todoList = document.querySelector("ul");

  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const span = document.createElement("span");
  span.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "supprimer";

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);
}
