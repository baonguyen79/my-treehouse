// var profileContainer = document.getElementById("profileContainer");

function executeThisCodeAfterFileLoad(){
	// var data = JSON.parse(this.responseText);
	// console.log("It worked !!", this.responseText);
	// profileContainer.innerHTML +=  this.responseText;
	document.getElementById("profileContainer").innerHTML =  this.responseText;
}

function executeThisCodeAfterFileFails(){
	console.log("boooo");
}

var myRequest = new XMLHttpRequest();  //make request
myRequest.addEventListener("load", executeThisCodeAfterFileLoad); //Add eventListener
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","https://teamtreehouse.com/baonguyen10");  //get from dinosaurs.json , change dinisaurs.json to http for home work
myRequest.send();  //execute request
console.log("myRequest", myRequest);