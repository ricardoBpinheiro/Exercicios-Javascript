document.getElementById("lampada").addEventListener("mouseover", mouseOver);
document.getElementById("lampada").addEventListener("mouseout", mouseOut);

function mouseOver() {
	document.getElementById("lampada").src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
}

function mouseOut() {
	document.getElementById("lampada").src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";
}
