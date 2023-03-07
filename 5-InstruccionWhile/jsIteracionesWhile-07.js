/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let seguir;

	contador = 0;
	acumulador = 0;
	seguir = true;
	//seguir = "si";

	while(seguir == true)  //seguir == "si"
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		seguir = confirm("Desea ingresar otro numero?");
		//seguir = prompt("Desea ingresar otro numero? si/no");

	}

	/*contador = 0;
	acumulador = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		seguir = prompt("Desea ingresar otro numero? si/no");

	}while(seguir == "si");*/

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	//txtIdSuma
	//txtIdPromedio
}//FIN DE LA FUNCIÓN