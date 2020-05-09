  //
  // let page = document.querySelector('.box');
  // page.onclick = function() {
  //   page.classList.toggle('added');
  // }
  //

var element = document.getElementById("tours-list-for-mark");

var countOfElements = element.children.length;

for (var i = 0; i < countOfElements; i++) {
  element.children[i].getElementsByClassName('box')[0].addEventListener('click', (event) => event.target.classList.toggle('added'))
}


// element.addEventListener('click', (event) => event.target.classList.toggle('added'));
