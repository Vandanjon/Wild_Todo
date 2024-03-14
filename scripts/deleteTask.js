export function deleteTask(taskElement) {
  taskElement.classList.add("fade-out");

  const todoList = document.querySelector("ul");

  todoList.addEventListener("transitionend", () => {
    todoList.removeChild(taskElement);
  });
}
