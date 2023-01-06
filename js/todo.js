const todoform = document.getElementById('todoForm');
const todolist = document.getElementById('todoList');
const todoInput = todoform.querySelector('input');

let todoListData = [];

function SaveDataLocalStorage() {
  localStorage.setItem('todolist', JSON.stringify(todoListData));
}

function paintToDo(eachData) {
  const liTag = document.createElement('li');
  liTag.id = eachData.id;
  const spanTag = document.createElement('span');
  spanTag.innerText = ` ${eachData.todo}`;

  const spanTagDate = document.createElement('span');
  spanTagDate.style.fontSize = '10px';
  spanTagDate.innerText = `  ${String(
    new Date(eachData.id).getMonth() + 1
  ).padStart(2, 0)}-${String(new Date(eachData.id).getDay()).padStart(
    2,
    0
  )}  ${String(new Date(eachData.id).getHours()).padStart(2, 0)}:${String(
    new Date(eachData.id).getMinutes()
  ).padStart(2, '0')}`;

  const deleteBtnTag = document.createElement('button');

  deleteBtnTag.innerText = 'X';
  deleteBtnTag.style.margin = '5px';

  liTag.appendChild(deleteBtnTag);
  liTag.appendChild(spanTag);
  liTag.appendChild(spanTagDate);

  todolist.appendChild(liTag);

  deleteBtnTag.addEventListener('click', () => {
    todoListData = todoListData.filter((item) => {
      if (eachData.id === item.id) {
        return false;
      } else {
        return true;
      }
    });

    SaveDataLocalStorage();
    liTag.remove();
  });
}

todoform.addEventListener('submit', (e) => {
  e.preventDefault();

  const eachData = {
    id: Date.now(),
    todo: todoInput.value,
  };
  todoListData.push(eachData);
  paintToDo(eachData);
  SaveDataLocalStorage();

  todoInput.value = '';
});

const savedToDos = localStorage.getItem('todolist');

if (savedToDos !== null) {
  const parseToObject = JSON.parse(savedToDos);
  todoListData = parseToObject;
  parseToObject.forEach(paintToDo);
}
