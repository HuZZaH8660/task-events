/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);
    button.addEventListener('click', () => document.body.removeChild(button));
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let element = document.createElement('ul');
    document.body.append(element);
    for (let i in arr) {
        let elementLi = document.createElement('li');
        elementLi.textContent = arr[i];
        elementLi.addEventListener('mouseover', () =>
            elementLi.setAttribute('title', arr[i]),
        );
        element.append(elementLi);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let element = document.createElement('a');
    element.textContent = 'tensor';
    element.href = 'https://tensor.ru/';
    element.addEventListener(
        'click',
        () => (element.textContent = element.textContent + ' ' + element.href),
    );
    document.body.append(element);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let elementUL = document.createElement('ul');
    document.body.append(elementUL);

    let elementLi = document.createElement('li');
    elementUL.append(elementLi);
    elementLi.textContent = 'Пункт';
    elementLi.addEventListener(
        'click',
        () => (elementLi.textContent = elementLi.textContent.concat('!')),
    );

    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.append(button);

    button.addEventListener('click', () => {
        let elementLi = document.createElement('li');
        elementUL.append(elementLi);
        elementLi.textContent = 'Пункт';
        elementLi.addEventListener(
            'click',
            () => (elementLi.textContent = elementLi.textContent.concat('!')),
        );
    });
}
