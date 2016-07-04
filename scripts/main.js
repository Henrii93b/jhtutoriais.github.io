
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/stock-photos.jpg') {
      myImage.setAttribute ('src','imagens/note.jpg');
    } else {
      myImage.setAttribute ('src','imagens/stock-photos.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'JH Tutoriais, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'JH Tutorias, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}