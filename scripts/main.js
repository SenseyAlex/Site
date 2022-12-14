var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello!';

/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
/*Существуют множество способов прикрепить событие к элементу. Здесь мы выбираем 
<html> элемент и устанавливаем ему обработчик свойства onclick (en-US) анонимной функцией 
(т.е. безымянной) которая содержит код, который мы хотим запустить для события клика.
*/


/* Мы получаем значение из атрибута src изображения.
Мы используем условие для проверки значения src, равен ли путь к исходному изображению:
Если это так, мы меняем значение src на путь ко 2-му изображению, заставляя другое 
изображение загружаться внутри элемента <image>.
Если это не так (значит, оно должно было уже измениться), мы меняем значение src, 
возвращаясь к первоначальному пути изображения, каким он был изначально.
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}


/*он захватит ссылки на новую кнопку и заголовок, и сохранит их в переменные:*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

/*функцию для установки персонализированного приветствия - она ничего не будет делать, 
но мы будем использовать её позже*/ 
/*Эта функция содержит функцию prompt() (en-US), которая вызывает диалоговое окно, 
немного похожее на alert() кроме того, что prompt() просит пользователя ввести некоторые 
данные, и сохраняет эти данные в переменной, после того как пользователь нажимает OK. 
В данном случае, мы просим пользователя ввести его имя. Далее, мы вызываем API под 
названием localStorage, который позволяет нам хранить данные в браузере и извлекать 
их позднее. Мы используем функцию setItem() из localStorage для создания и хранения 
данных в свойстве под названием 'name', и устанавливаем это значение в переменную myName, 
которая содержит имя введённое пользователем. В конце мы устанавливаем textContent заголовку 
в виде строки и имени пользователя.*/

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

/*Этот блок сначала использует оператор отрицания (логическое НЕ, представленное в 
виде !) чтобы проверить, существуют ли данные в пункте name. Если нет, то 
функция setUserName() запускается для их создания. Если данные существуют 
(то есть, пользователь установил его во время предыдущего посещения), 
мы извлекаем сохранённое имя, с помощью getItem() и устанавливаем textContent 
заголовку в виде строки плюс имя пользователя, так же, как мы делали внутри setUserName().*/



if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

/*установите обработчик события onclick на кнопку. При нажатии кнопки запускается 
функция setUserName(). Это позволяет пользователю установить новое имя, всякий раз, 
когда он захочет, нажатием кнопки:*/


myButton.onclick = function() {
  setUserName();
}