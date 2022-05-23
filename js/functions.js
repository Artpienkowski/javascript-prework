function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function clearResult(){
	document.getElementById('result').innerHTML = '';
}