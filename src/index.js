document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#create-task-form");
  
  form.addEventListener("submit", function (event) {
    const todoItem = event.value
    const todolist = document.getElementById("tasks")
    const lineitem = document.createElement("li")
    lineitem.innerText = `#{todoItem}`
  });
});