document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#create-task-form");
  
  form.addEventListener("submit", function (event) {
    var todoItem = event.value
    var todolist = document.getElementById("tasks")
    var lineitem = document.createElement("li")
    lineitem.innerText = `#{todoItem}`
  });
});



// Bonus:
// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list(e.g.red for high priority, yellow for medium, green for low)
//   As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field(e.g.user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM