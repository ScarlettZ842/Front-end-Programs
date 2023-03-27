import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here
const btn = document.getElementById("Add-button");
const input = document.getElementById("text-info");
const list = document.getElementById("Update-Todo");

btn.onclick = async function () {
  const todo = {
    content: input.value,
    isCompleted: false,
  };
  try {
    const result = await todoApi.addTodo(todo);
    //list.innerHTML = "";
    const newTodo = document.createElement("li");
    newTodo.textContent = todo.content;
    const button = document.createElement("button");
    button.textContent = "Delete Todo";
    button.setAttribute("type", "button");
    button.setAttribute("class", "Delete-button");
    newTodo.appendChild(button);
    list.appendChild(newTodo);
    console.log(list);
    input.value = "";
  } catch (error) {
    console.log(error);
  }
};

list.ondblclick = async function (event) {
  //console.log("double-click detected");
  if (event.target && event.target.matches("li")) {
    const listItem = event.target;
    const index = Array.from(list.children).indexOf(listItem);
    try {
      const result = await todoApi.modTodo(index);
      listItem.classList.toggle("completed");
    } catch (error) {
      console.log(error);
    }
  }
};

list.onclick = async function (event) {
  //this in the event handler may refers to list element rather than the button, so this may not find the parent element
  if (event.target && event.target.matches("button.Delete-button")) {
    const li = event.target.parentNode; // （使用this）事件如果绑定list元素而不是按钮元素，this无法找到正确的父元素节点
    const index = Array.from(list.children).indexOf(li);
    try {
      const result = await todoApi.delTodo(index);
      li.remove();
    } catch (error) {
      console.log(error);
    }
  }
};

async function loadTodos() {
  try {
    const todos = await todoApi.getAllTodos();
    todos.forEach((todo) => {
      const newTodo = document.createElement("li");
      newTodo.textContent = todo.content;
      list.appendChild(newTodo);
    });
  } catch (error) {
    console.log(error);
  }
}
loadTodos();
