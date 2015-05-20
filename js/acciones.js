// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	var x = 1;
	var suma1 = 0;
	var suma2 = 0;
	var suma3 = 0;
	var suma4 = 0;
	
	$('#uno').on('click', function(){
		
		suma1 = suma1 + x;
		$('#puntuacion1').text(suma1)
		});
	
	$('#dos').on ('click', function(){
		suma2 = suma2 + x;
		$('#puntuacion2').text(suma2)
	});
	
	$('#tres').on ('click', function(){
		suma3 = suma3 + x;
		$('#puntuacion3').text(suma3)
	});
	
	$('#cuatro').on ('click', function(){
		suma4 = suma4 + x;
		$('#puntuacion4').text(suma4)
	});
		 
//}); 
});


