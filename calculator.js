// TO-DO: Add Keyboard key listeners for better functionality!

var operations = ['*','+','-','/'];
var currentValue = [];

$('#clear').click(function(){
  currentValue = [];
	updateDisplay();
});

$('#decimal').click(function(event){
	var value = '.';
	console.log('decimal clicked');
	
	if(currentValue[currentValue.length-1] != '-' &&					currentValue[currentValue.length-1] != '+' && currentValue[currentValue.length-1] != '*' && currentValue[currentValue.length-1] != '/' && currentValue[currentValue.length-1] != '.')
		{
			currentValue.push(value);
		}else{
			currentValue[currentValue.length-1] = value;
		}
	console.log(currentValue[currentValue.length-1]);
	
	console.log(currentValue);
	
	updateDisplay();
});


$('.number').click(function(event){
	var value = (event.target.id);
	currentValue.push(value);
	console.log(currentValue);
	updateDisplay();
});

$('.operator').click(function(event){
	var value = (event.target.id);
	console.log("operation clicked: " + event.target.id);
	console.log(currentValue[currentValue.length-1]);
	
	if(currentValue[currentValue.length-1] != '-' &&					currentValue[currentValue.length-1] != '+' && currentValue[currentValue.length-1] != '*' && currentValue[currentValue.length-1] != '/' && 
currentValue[currentValue.length-1] != '.')
		{
			currentValue.push(value);
		}else{
			currentValue[currentValue.length-1] = value;
		}
	console.log(currentValue);
	
	updateDisplay();
})

function updateDisplay(){
	document.querySelector('#display').innerHTML = currentValue.join('');
}

$('#equals').click(function(){
		console.log('clicked equals');	
		var newValue = currentValue.join('')
		newValue = eval(newValue);
		console.log('new value: ' + newValue);
	
		//This line here is required for type conversion.
		newValue = newValue +'';
	
	
		currentValue = newValue.split('');
		console.log('new value: ' + newValue);
		updateDisplay();
});