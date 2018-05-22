// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("deslizó hacia la izquierda",function(){"aplicación 7","Ok"});
		});//cerrar deslizar izquierda
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;

				}
			},"aplicación 7","Beepear,Vibrar,Cancelar");
		});//cerrar deslizar derecha
	},false);//cerrar deviceready		
});//cerrar document