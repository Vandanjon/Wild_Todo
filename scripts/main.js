import { addTask } from "./addTask.js";
import { updateTask } from "./updateTask.js";
import { deleteTask } from "./deleteTask.js";

function render() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input");
    const todoText = input.value;

    if (todoText.trim() !== "") {
      addTask(todoText);
      input.value = "";
    }
  });

  const todoList = document.querySelector("ul");

  todoList.addEventListener("change", (event) => {
    if (
      event.target.tagName === "INPUT" &&
      event.target.getAttribute("type") === "checkbox"
    ) {
      const taskElement = event.target.parentElement.children[1];
      updateTask(taskElement);
    }
  });

  todoList.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.textContent === "supprimer"
    ) {
      const taskElement = event.target.parentElement;
      deleteTask(taskElement);
    }
  });
}

window.onload = render;
