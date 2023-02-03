/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let divisor;
	let dividendo;
	let resultado;

	divisor = document.getElementById("txtIdNumeroDivisor").value;
	dividendo = document.getElementById("txtIdNumeroDividendo").value;

	divisor = parseFloat(divisor);
	dividendo = parseFloat(dividendo);

	resultado = dividendo % divisor;

	alert("El resto es igual a " + resultado);
	
}
