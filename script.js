
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = task;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done", checkbox.checked);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.append(checkbox, span, deleteButton);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
