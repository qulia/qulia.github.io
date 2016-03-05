//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/flower.png') {
        myImage.setAttribute('src', 'images/flower-full-bloom.jpg');
    } else {
        myImage.setAttribute('src', 'images/flower.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
}

if (!localStorage.getItem('name')) {
    setUserName();
}

function setHeading() {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

setHeading();

myButton.onclick = function () {
    setUserName();
    setHeading();
}