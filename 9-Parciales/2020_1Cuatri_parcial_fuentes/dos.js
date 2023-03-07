/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
	let tipoDeProducto;
	let contadorBolsas;
	let precioPorBolsa;
	let respuesta;
	let descuento;
	let importeButoTotal;
	let importeConDescuento;
	let acumuladorArena;
	let acumuladorCal;
	let acumuladorCemento;
	let tipoConMasUnidades;
	let tipoMasCaro;
	let precioArena;
	let precioCal;
	let precioCemento;

	respuesta = true
	importeButoTotal = 0;
	acumuladorArena = 0;
	acumuladorCal = 0;
	acumuladorCemento = 0;
	precioArena = 0;
	precioCal = 0;
	precioCemento = 0;
	importeButoTotal = 0;
	contadorBolsas = 0;

	while(respuesta == true)
	{
		tipoDeProducto = prompt("Ingrese un tipo de producto \n(arena, cal o cemento)");
		while(tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento")
		{
			tipoDeProducto = prompt("Ingrese un tipo de producto correcto \n(arena, cal o cemento)");
		}

		cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
		cantidadBolsas = parseInt(cantidadBolsas);
		contadorBolsas = contadorBolsas + cantidadBolsas;

		precioPorBolsa = prompt("Ingrese el precio por bolsa");
		precioPorBolsa = parseFloat(precioPorBolsa);
		while(precioPorBolsa < 1)
		{
			precioPorBolsa = prompt("Ingrese el precio por bolsa");
			precioPorBolsa = parseFloat(precioPorBolsa); 
		}

		if(tipoDeProducto == "arena")
		{
			acumuladorArena = acumuladorArena + cantidadBolsas;
			precioArena = precioArena + precioPorBolsa;
		}
		else 
		{
			if(tipoDeProducto == "cal")
			{
				acumuladorCal = acumuladorCal + cantidadBolsas;
				precioCal = precioCal + precioPorBolsa;
			}
			else
			{
				acumuladorCemento = acumuladorCemento + cantidadBolsas;
				precioCemento =  precioCemento + precioPorBolsa;
			}
		}
		//A
		importeButoTotal = importeButoTotal + precioPorBolsa * cantidadBolsas;

		respuesta = confirm("Desea ingresar otra compra?");
	}
	//fin del while

	//A
	document.write("A- Importe total sin descuento: " + importeButoTotal + "<br>");

	//B
	if(contadorBolsas > 9 && contadorBolsas < 30)
	{
		descuento = 0.15;
	}
	else
	{
		if(contadorBolsas > 29)
		{
			descuento = 0.25;
		}
	}
	importeConDescuento = importeButoTotal - importeButoTotal * descuento;
	if(contadorBolsas > 9)
	{
		document.write("B- Importe total con descuento: " + importeConDescuento + "<br>");
	}
	else
	{
		document.write("B- No se realizo ningun descuento <br>");
	}
	
	//D
	if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
	{
		tipoConMasUnidades = "Arena";
	}
	else
	{
		if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
		{
			tipoConMasUnidades = "Cal";
		}
		else
		{
			if(acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal)
			{
				tipoConMasUnidades = "Cemento";
			}
		}
	}
	document.write("D- El tipo con mayor cantidad de bolsas es: " + tipoConMasUnidades + "<br>");

	//F
	if(precioArena > precioCal && precioArena > precioCemento)
	{
		tipoMasCaro = "Arena";
	}
	else
	{
		if(precioCal > precioArena && precioCal > precioCemento)
		{
			tipoMasCaro = "Cal";
		}
		else
		{
			if(precioCemento > precioArena && precioCemento > precioCal)
			{
				tipoMasCaro = "Cemento";
			}
		}
	}
	document.write("F- El tipo mas caro es: " + tipoMasCaro);
}
