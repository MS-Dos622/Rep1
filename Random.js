
function loadRandomNumber() {
		document.getElementById('w').addEventListener("touchstart", writeNumber);
		document.getElementById('w').addEventListener("click", writeNumber);
	}
		function writeNumber() {
		//Math.random(); gibt eine "zufällige" Zahl zwischen 0 und 1 zurück
		var number = Math.random()*6;
		//Math.ceil(zahl1); rundet die Zahl "zahl1" auf die nächstgrössere ganze Zahl auf
		number = Math.ceil(number);
		document.getElementById('numberBox').innerHTML = number;
		
	}