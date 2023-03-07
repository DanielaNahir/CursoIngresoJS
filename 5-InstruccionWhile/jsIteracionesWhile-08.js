/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let seguir;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	seguir = true;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}

		seguir = confirm("Desea ingresar otro numero?");
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN