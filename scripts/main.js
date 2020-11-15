let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src')
	if(mySrc === 'images/MosaicMath-header-blue.png'){
		myImage.setAttribute('src','images/uwc-headshot.png');
	}
	else{
		myImage.setAttribute('src', 'images/MosaicMath-header-blue.png');
	}
}

function setUserName() {
	let myName = prompt("Please enter your name:");
	if(!myName){
		setUserName();

	} else {
		localStorage.setItem('name', myName)
		myHeading.innerHTML = 'Mozilla is cool, ' + myName;
			}
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}