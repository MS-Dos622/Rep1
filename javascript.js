function Buttonium() {
	document.getElementById('button').addEventListener("click" , Buttonium_Load);
	document.getElementById('button').addEventListener("touchstart", Buttonium_Load);
}

function Buttonium_Load() {
    var number = Math.random()*6;
    number = Math.ceil(number);
	document.getElementById('w1').innerHTML = '<img src="'+number+'.jpg">';
}