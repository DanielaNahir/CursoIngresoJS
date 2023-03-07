/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	banderaDelPrimero = false;
	respuesta = true

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == false)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			banderaDelPrimero = true;

		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado <numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = confirm("Desea ingresar otro numero?");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN