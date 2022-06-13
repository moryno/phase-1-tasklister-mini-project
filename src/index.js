document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = form.querySelector("#new-task-description").value;
    submitTodo(inputValue)
  })
});

const submitTodo = (todo) => {
  const ul = document.querySelector("#tasks")
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const select = document.createElement("select");
  const option = document.createElement("option");
  select.appendChild(option);
  option.append(li);
  btn.addEventListener("click", deleteList)
  btn.innerHTML = "<strong>DELETE</strong>";
  li.textContent =`${todo} `;
  li.appendChild(btn)
  ul.appendChild(select);
  
}

const deleteList = (event) => {
   event.target.parentNode.parentNode.remove();
}
