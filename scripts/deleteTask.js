export function deleteTask(taskElement) {
  const todoList = document.querySelector("ul");
  todoList.removeChild(taskElement);
}
