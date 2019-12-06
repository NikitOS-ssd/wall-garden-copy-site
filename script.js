// ПОКАЗ МЕНЮ ПРИ СКРОЛЛЕ
window.onscroll = showMenu;
function showMenu() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var menu = document.querySelector('.navbar-menu');
  if (scrolled < 10) {
    menu.style = '';
  } else {
    menu.style = 'position: fixed; margin-top: 0;';
  }
}

// ПРОГРАММА НУМЕРУЮЩАЯ ВЫБОРОЧНЫЕ ЭЛЕМЕНТЫ
var allPhoto = document.querySelectorAll('.gallery-photo-block'); // определяет элементы для нумерации

for (var i = 0; i < allPhoto.length; i++) {
  var iNum = i + 1;

  if (i == (allPhoto.length - 2)) {
    allPhoto[i].classList.add('photo-pre-last');
  } else if (i == (allPhoto.length - 1)) {
    allPhoto[i].classList.add('photo-last');
  } else {
    allPhoto[i].classList.add('photo-' + iNum);
  }
}

// ЗАМЕНА ФОТОГРАФИИ В МАЛОМ КАТАЛОГЕ
var blocks = document.querySelectorAll('.little-photo-catalog');

for (var i = 0; i < blocks.length; i++) {
  var block = blocks[i];
  block.addEventListener("click", changePhoto);
}

function changePhoto(event) {
  var event = event || window.event;
  var elem = event.target;

  var showPage = elem.closest('.block');
  showPage = showPage.querySelector('img');

  var changeSrc = elem.getAttribute('data-src');

  if (changeSrc) {
    showPage.src = changeSrc;
  }
}

//ВЫБОР ВАЛЮТЫ
function viborDollar(event) {
  event = event || window.event;
  var elem = event.target;

  var valutes = document.querySelectorAll('.elem1 > .price > span');
  for(var i = 0; i < valutes.length; i++) {
    var valute = valutes[i];
    valute.classList.remove('active');
  }

  elem.classList.add('active');
}



//ПОКАЗ БЛОКОВ ANIMO2
window.onscroll = fun1;

function fun1() {
  var animoBlock = document.querySelector('.animo-2');
  var animoParam = animoBlock.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  var show = document.querySelector('.show');


  //Отладочные переменные
  //console.log(windowHeight / 100 * 3); // Вывод в логи
  //show.innerHTML = windowHeight; // Высота окна
  //show.innerHTML += '<br>' + animoParam.bottom; // Вывод нижней границы animo2

  var animoDivs = document.querySelectorAll('.animo-2 > div');

  if (animoParam.bottom < windowHeight) {
    for(var i = 0; i < animoDivs.length; i++) {
      animoDivs[i].style.transform = 'translateY(10px) rotateY(-13deg)';
    }
  } else {
    for(var i = 0; i < animoDivs.length; i++) {
      animoDivs[i].style = null;
    }
  }
}
