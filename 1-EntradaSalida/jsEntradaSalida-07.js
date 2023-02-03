/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	resultado = num1 + num2;

	alert("La suma es igual a " + resultado);
}

function restar()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	resultado = num1 - num2;

	alert("La resta es igual a " + resultado);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	resultado = num1 * num2;

	alert("La multiplicación es igual a " + resultado);
}

function dividir()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	resultado = num1 / num2;

	alert("La divición es igual a " + resultado);
}

