function welcome(){
	message = "Welcome to the world of JavaScript\n";
	message += "This is from Basic IO";
	alert(message);
	}
	
function log(){
	console.log("But I have promises to keep. And miles to go before I sleep");
}

function inElement(){
	message = "<p style='color:red;background:black;padding:20px;font:18px;width:400px;' >";
	message += "When the things go wrong as they sometimes will<br/>";
	message += "When the road you're trudging seems all uphill<br/>";
	message += "When the funds are low and the debts are high<br/>";
	message += "And you want to smile, but you have to sigh<br/>";
	message += "When care is pressing you down a bit...<br/>";
	message += "Rest, if you must, but don't you quit</p>";
	
	document.getElementById("result1").innerHTML = message;
}

function cleanUp(id){
	document.getElementById(id).innerHTML = "";
}

function inDocument(){
	response = "<html><body style='background:wheat;text:maroon'>";
	response +="<h1>Keeping time, time, time...</h1>";
	response +="<h2>In a sort of runic rhyme...</h2>";
	response += "</body></html>";
	
	doc = document.getElementById("result2").contentDocument;
	
	doc.open();
	doc.write(response);
	doc.close();
}

function ask(){
	name = prompt("What is your name?");
	result = "Welcome aboard "+name;
	document.getElementById("answer").value = result;
}