var num=[];

function espar(num){

	var ep=false; 
	if (num % 2 == 0){
		ep=true;
	}
	return ep;
}

function esprimo(num){

	var prim = 0;

	var esprim = true; 

	for (var i=4; i<num-1; i++){
		if(num % i == 0){
			prim ++;
		}
	}

	if(prim>1){
		esprim = false;
	} 
	
	return esprim;
	
}


$(document).ready(function(){

	$('#btn2').prop('disabled', true);
	$('#btn3').prop('disabled', true);
	$('#btn4').prop('disabled', true);
	$('#btn5').prop('disabled', true);

	$("#btn1").click(function(){

		for(var i=0; i<20; i++){
			num[i] = Math.trunc(Math.random()*100);
		}

		var texto = "";
		
		for(var j=0; j<20; j++){
			texto += num[j] + " - ";
		}
		
		$("#boxtxt").val(texto);

		$('#btn2').prop('disabled', false);
		$('#btn3').prop('disabled', false);
		$('#btn4').prop('disabled', false);
		$('#btn5').prop('disabled', false);
		
	});

	$("#btn2").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (espar(num[i]) == false)
				texto += num[i] + " - ";
		}
		$("#boxtxt").val(texto);
		
    });
    
    $("#btn3").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (espar(num[i]) == true)
				texto += num[i] + " - ";
		}
		$("#boxtxt").val(texto);
		
    });
    
    $("#btn4").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (esprimo(num[i]) == true)
				texto += num[i] + " - ";
		}
		$("#boxtxt").val(texto);
		
    });
    
    $("#btn5").click(function(){
		
		var texto = "";
		for(var i=0; i<num.length; i++){
			if (esprimo(num[i]) == false)
				texto += num[i] + " - ";
		}
		$("#boxtxt").val(texto);
		
	});

});