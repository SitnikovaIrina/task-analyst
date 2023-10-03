function addData() {
  // переменные
  let number = document.querySelector(".number-input").value;
  let sity = document.querySelector(".city-input").value;
  let quantity = document.querySelector(".quantity-input").value;
  let table = document.querySelector(".table");

  // вставляем новую строку
  let newRow = table.insertRow(table.rows.length);

  // вставляем данные в ячейки новой строки
  newRow.insertCell(0).innerHTML = number;
  newRow.insertCell(1).innerHTML = sity;
  newRow.insertCell(2).innerHTML = quantity;
  newRow.insertCell(3).innerHTML =
    '<button onclick="editData(this)">Редактировать</button>'+
    '<button onclick="deleteData(this)">Удалить</button>';

  // Очистить поля ввода
  clearInputs();
}

function editData(button) {

  // Получаем строку при нажатии кнопки
  let row = button.parentNode.parentNode;

  row.cells[0].setAttribute('contenteditable', true);
  row.cells[1].setAttribute('contenteditable', true);
  row.cells[2].setAttribute('contenteditable', true);

  // Открываем и закрываем подсказку
  let popap = document.querySelector('.popap');

  setTimeout(function () {
    popap.classList.add('is-visible')
  }, 200)

  setTimeout(function () {
    popap.classList.remove('is-visible')
  }, 3000)
}

function deleteData(button) {

  // Получаем строку при нажатии кнопки
  let row = button.parentNode.parentNode;

  // Удалить строку из таблицы
  row.parentNode.removeChild(row);
}

function clearInputs() {

  // Очистка полей ввода
  document.querySelector(".number-input").value = "";
  document.querySelector(".city-input").value = "";
  document.querySelector(".quantity-input").value = "";
}
