document.getElementById("botao").addEventListener("click",
function(){
	document.getElementById('lampadaApagada').src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
});

document.getElementById("reset").addEventListener("click",
function(){
	location.reload(); //atualiza a pagina
});