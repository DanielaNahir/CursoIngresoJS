/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x
3-Cantidad de positivos. x
4-Cantidad de negativos. x
5-Cantidad de ceros. x
6-Cantidad de números pares. x
7-Promedio de positivos. x
8-Promedios de negativos. x
9-Diferencia entre positivos y negativos, (positvos-negativos). x
10-Porcentaje de números positivos y negativos. x
11-De los positivos el más grande. x
12-De los negativos el más chico. x
 */
function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let sumaDeNumerosPositivos;
	let sumaDeNumerosNegativos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorDeCeros;
	let promedioPositivo;
	let promedioNegativo;
	let numerosPares;
	let totalDeNumeros;
	let numerosPositivos;
	let numerosNegativos;

	respuesta = true;
	sumaDeNumerosNegativos = 0;
	contadorNegativos = 0;
	sumaDeNumerosPositivos = 0;
	contadorPositivos = 0;
	contadorDeCeros = 0;
	numerosPares = 0;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > 0)
		{
			sumaDeNumerosPositivos = sumaDeNumerosPositivos + numeroIngresado;

			if(contadorPositivos == 0 || numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			/*else
			{
				if(numeroIngresado > numeroMaximo)
				{
					numeroMaximo = numeroIngresado;
				}
			}*/
			contadorPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				sumaDeNumerosNegativos = sumaDeNumerosNegativos + numeroIngresado;

				if(contadorNegativos == 0 || numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
				/*else
				{
					if(numeroIngresado < numeroMinimo)
					{
						numeroMinimo = numeroIngresado;
					}
				}*/
				contadorNegativos++;
			}
			else
			{
				contadorDeCeros++;
			}
		}
		
		if(numeroIngresado % 2 == 0 && numeroIngresado != 0)
		{
			numerosPares++;
		}

		respuesta = confirm("Desea ingresar otro numero?");
	}

	totalDeNumeros = contadorNegativos + contadorPositivos + contadorDeCeros;
	numerosNegativos = contadorNegativos / totalDeNumeros *100;
	numerosPositivos = contadorPositivos / totalDeNumeros *100;

	document.write("1- La suma de negativos es: " + sumaDeNumerosNegativos + "<br>");
	document.write("2- La suma de positivos es: " + sumaDeNumerosPositivos + "<br>");
	document.write("3- Cantidad de numeros positivos: " + contadorPositivos + "<br>");
	document.write("4- Cantidad de numeros negativos: " + contadorNegativos + "<br>");
	document.write("5- Cantidad de ceros: " + contadorDeCeros + "<br>");
	document.write("6- Cantidad de números pares: " + numerosPares + "<br>");
	
	if(contadorPositivos > 0)
	{
		promedioPositivo = sumaDeNumerosPositivos / contadorPositivos;
		document.write("7- Promedio de positivos: " + promedioPositivo + "<br>");
	}
	else
	{
		document.write("7- No se pudo calcular el promedio positivo porque no ingreso ningun numero positivo" + "<br>");
	}
	
	if(contadorNegativos > 0)
	{
		promedioNegativo = sumaDeNumerosNegativos / contadorNegativos;
		document.write("8- Promedio de negativos: " + promedioNegativo + "<br>");
	}
	else
	{
		document.write("8- No se pudo calcular el promedio negativo porque no ingreso ningun numero negativo" + "<br>");
	}
	document.write("9- Diferencia entre positivos y negativos: " + (sumaDeNumerosPositivos - sumaDeNumerosNegativos) + "<br>");
	document.write("10- Porcentaje de números:  -Positivos: %" + numerosPositivos.toFixed(1) + "  -Negativos: %" + numerosNegativos.toFixed(1) + "<br>");
	
	if(contadorPositivos > 0)
	{
		document.write("11- El más grande de los positivos: " + numeroMaximo + "<br>");
	}
	else
	{
		document.write("11- No se pudo calcular el maximo de los positivos porque no ingreso ningun numero positivo" + "<br>");
	}

	if(contadorNegativos > 0)
	{
		document.write("12- El más chico de los negativos: " + numeroMinimo);
	}
	else
	{
		document.write("12- No se pudo calcular el minimo de los negativos porque no ingreso ningun numero negativo" + "<br>");
	}

}//FIN DE LA FUNCIÓN