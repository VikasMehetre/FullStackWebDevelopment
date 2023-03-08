function tables(){
	num = 5;
	tables = "";
	
	for(i=1;i<11;i++){
		tables += num+" x "+i+" = "+(num*i)+"<br/>";
	}
	
	document.getElementById("tables").innerHTML = tables;
		
}