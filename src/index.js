document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target["new-task-description"].value;
    submitTodo(inputValue);
    form.reset()
  })
});

const submitTodo = (todo) => {
  const ul = document.querySelector("#tasks")
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.addEventListener("click", deleteList)
  btn.innerHTML = "<strong>DELETE</strong>";
  li.textContent =`${todo} `;
  li.appendChild(btn)
  ul.appendChild(li);
  
}

const deleteList = (event) => {
   event.target.parentNode.parentNode.remove();
}