/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//let sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	let aumento = sueldo *10 /100;
	let resultado = sueldo + aumento;
    
    

	document.getElementById("txtIdResultado").value = resultado;

}
