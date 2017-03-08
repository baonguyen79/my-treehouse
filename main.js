// var profileContainer = document.getElementById("profileContainer");
// var obj = {
// 	earned_date:"2017-01-01T20:21:17.000Z",
// 	icon_url:"https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png",
// 	id:922,
// 	name:"HTML First",
// 	url:"https://teamtreehouse.com/library/how-to-make-a-website/html-first"
// }
function makeDom(obj){
    
    var profileContainer = document.getElementById("profileContainer");
    var liElement = document.createElement("ul");
    liElement.className="liObj";

	for (var i = 0;i < obj.length; i++){
	    liElement.innerHTML += `<img src=${obj[i].icon_url}  height="50" width="50"><br>`;
	    liElement.innerHTML += `<label>Earned date:</label>${obj[i].earned_date}<br>`;
	    liElement.innerHTML += `<label>Id:</label>${obj[i].id}<br>`;
	    liElement.innerHTML += `<label>Name:</label>${obj[i].name}<br>`;
	    liElement.innerHTML += `<a href=${obj.url}>${obj[i].url}</a><br>`;

	
	}
	profileContainer.appendChild(liElement);
}

function executeThisCodeAfterFileLoad(){
	var data = JSON.parse(this.responseText);
	console.log("It worked !!", data.badges);
	makeDom(data.badges);
}
    							  
 

function executeThisCodeAfterFileFails(){
	console.log("boooo");
}

var myRequest = new XMLHttpRequest();  //make request
myRequest.addEventListener("load", executeThisCodeAfterFileLoad); //Add eventListener
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","https://teamtreehouse.com/baonguyen10.json");  //get from dinosaurs.json , change dinisaurs.json to http for home work
myRequest.send();  //execute request
console.log("myRequest", myRequest);