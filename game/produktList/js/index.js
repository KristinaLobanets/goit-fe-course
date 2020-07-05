const formTodo = document.forms.formTodo;
const list = document.querySelector(".list");

let masive = [];

// console.dir(formTodo.elements.task.value);
const markUp = (o) => {
  return ` <li><span>${o.task}</span><button data-id = ${o.id} name="delete">delete</button></li>`;
};

const addCard = (event) => {
  event.preventDefault();

  let obj = { task: formTodo.elements.task.value, id: `${Date.now()}` };

  masive.push(obj);
  console.log(masive);
  list.insertAdjacentHTML("afterbegin", markUp(obj));
  formTodo.reset();
};

formTodo.addEventListener("submit", addCard);

const deleteFunk = (event) => {
  if (event.target.nodeName === "BUTTON") {
    const thisElement = masive.filter(
      (obj) => obj.id !== event.target.dataset.id
    );
    masive = thisElement;
    const newMasive = thisElement.reduce(
      (acc, element) => acc + markUp(element),
      ""
    );
    list.innerHTML = newMasive;
  }
};

list.addEventListener("click", deleteFunk);
