function adder(){
	x = parseInt(document.getElementById("op1").value);
	y = parseInt(document.getElementById("op2").value);
	z = x + y;
	document.getElementById("result").value = z;
}

function doMod(){
	x = parseInt(document.getElementById("op1").value);
	y = parseInt(document.getElementById("op2").value);
	z = x % y;
	document.getElementById("result").value = z;
}