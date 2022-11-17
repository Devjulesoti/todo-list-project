let inputText = document.querySelector("input");
let submitBtn = document.querySelector(".submitbtn");
let tasks = document.querySelector(".tasks");

console.log(inputText);

submitBtn.addEventListener("click", () => {
  if (inputText.value == "") {
    alert("Enter a task");
  } else {
    let container = document.createElement("div");
    container.classList.add("task-item");
    let paragraph = document.createElement("p");
    paragraph.innerText = inputText.value;

    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btnDiv = document.createElement("div");
    btn1.innerText = "X";
    btn2.innerText = "Edit";

    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    container.appendChild(paragraph);
    container.appendChild(btnDiv);
    tasks.appendChild(container);
    tasks.classList.add("task-body");
    inputText.value = "";

    btn1.addEventListener("click", () => {
      tasks.removeChild(container);
    });
  }
});
