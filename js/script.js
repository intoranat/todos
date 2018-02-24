const todos = ['Item 01', 'Item 02', 'Item 03'];

function displayTodos() {
  const x = 'My List: ';
  document.querySelector('#myTodos').innerHTML = x + '<br />' + todos.join('<br />');
}

function addTodos() {
  todos.push(document.querySelector('#addTodosInput').value);
  displayTodos();
}

document.querySelector('#todos').addEventListener("click", displayTodos);
document.querySelector('#addTodos').addEventListener("click", addTodos);