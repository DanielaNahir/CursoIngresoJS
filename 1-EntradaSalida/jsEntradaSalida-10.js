/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//let sueldo = parseInt(document.getElementById("txtIdImporte").value);

	let sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	let descuento = sueldo *25 /100;
	let resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}
