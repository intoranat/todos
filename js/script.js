const todos = [];
const qs = document.querySelector('#myTodos');

function addTodo() {
  const x = document.querySelector('#addTodosInput').value;
  todos.push(x);

  for (let i = 0; i < todos.length; i++) {
    var removeItem = " <a href='#' onClick='removeTodo(" + i + ");'>X</a> " + todos[i];
  };

  qs.innerHTML += removeItem;
}

function removeTodo(i) {
  todos.splice(i, 1);
  var removeItem2 = "";

  for (let i = 0; i < todos.length; i++) {
    removeItem2 += " <a href='#' onClick='removeTodo(" + i + ");'>X</a> " + todos[i];
  };

  qs.innerHTML = removeItem2;
}

document.querySelector('#addTodo').addEventListener('click', addTodo);