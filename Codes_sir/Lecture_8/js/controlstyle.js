
var MOVE = "";
var BREAD = true;
var BUTTER = true;


function play(move){
MOVE = move;
console.log(MOVE);
}

function put(obj){
	if(MOVE == ""){
		alert("Please select a move. Either X or O.");
		return false;
	}
	obj.innerHTML = MOVE;
	console.log(obj);
}

function clearBoard(){
	for(i=1;i<10;i++){
		document.getElementById(i).innerHTML = "";
	}
}


function Bread(obj){
	if(BREAD){
		obj.src = "";
		BREAD = false;
	}
	else{
		obj.src = "../images/bread.png";
		BREAD = true;
	}
}	



function Butter(obj){
	if(BUTTER){
		obj.src = "";
		BUTTER = false;
	}
	else{
		obj.src = "../images/butter.png";
		BUTTER = true;
	}
}	




function showHide(cc){
	obj = document.getElementById(cc);
	
	
	if (obj.style.visibility == "") {
		obj.style.visibility = "visible";
	} 
	
	if (obj.style.visibility == "visible") {
		obj.style.visibility = "hidden";
	} else {
		obj.style.visibility = "visible";
	}
}


function displayONOFF(ic){
	 x = document.getElementById(ic);
	 
	if (x.style.display == "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}



function updateCSS(todo,clsid){
	obj = document.getElementById("panel1");
	
	switch(todo){
		case "add":
			obj.classList.add("class"+clsid);
		break;
		case "remove":
			obj.classList.remove("class"+clsid);
	}
	
}
	
