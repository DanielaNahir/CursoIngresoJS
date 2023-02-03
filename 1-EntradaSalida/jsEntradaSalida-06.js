/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseFloat(numero1);
	numero2 = parseFloat(numero2);

	resultado = numero1 + numero2;

	alert("El resultado es " + resultado);

}

