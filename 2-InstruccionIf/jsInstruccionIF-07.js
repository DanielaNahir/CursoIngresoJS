/*
Ejercicio 1:

Apellido:
Nombre:
Comisión:
Tutor:

El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto.
*/
function mostrar()
{
	let nombreComprador;
	let edadComprador;
	let cantidadProductos;
	let totalGastado;
	let metodoDePago;
	let contadorCompradores = 0;
	let acumuladorEdadCompradores = 0;
	let promedioEdadCompradores;
	let acumuladorDineroMenores25 = 0;
	let contadorCompradoresMenores25 = 0;
	let promedioDineroGAstadoMenores25;
	let acumuladorTotalGastado = 0;
	let acumuladorDineroTarjetaDebito = 0;
	let porcentajeGastadoDebito;
	let minimoGastado;
	let nombreMinimoGastado;
	let cantidadminimoGastado;
	let bandera = false;
	let respuesta = true;

	while(respuesta == true)
	{
		nombreComprador = prompt("Ingrese nombre");
		edadComprador = prompt("Ingrese edad");
		edadComprador = parseInt(edadComprador);
		while(edadComprador < 18)
		{
			edadComprador = prompt("Ingrese edad");
			edadComprador = parseInt(edadComprador);
		}
		cantidadProductos = prompt("Ingrese cantidad de productos");
		cantidadProductos = parseInt(cantidadProductos);
		while(cantidadProductos < 1)
		{
			cantidadProductos = prompt("Ingrese cantidad de productos");
			cantidadProductos = parseInt(cantidadProductos);
		}
		totalGastado = prompt("Ingrese total gastado");
		totalGastado = parseFloat(totalGastado);
		while(totalGastado < 1)
		{
			totalGastado = prompt("Ingrese total gastado");
			totalGastado = parseInt(totalGastado);
		}
		metodoDePago = prompt("Ingrese metodo de pago");
		while(metodoDePago != "credito" && metodoDePago != "debito" && metodoDePago != "efectivo")
		{
			metodoDePago = prompt("Ingrese metodo de pago");
		}

		if(edadComprador < 25)
		{
			contadorCompradoresMenores25++;
			acumuladorDineroMenores25 = acumuladorDineroMenores25 + totalGastado;
		}

		if(metodoDePago == "debito")
		{
			acumuladorDineroTarjetaDebito = acumuladorDineroTarjetaDebito + totalGastado;
		}

		if(contadorCompradores == 0 || totalGastado < minimoGastado)
		{
			minimoGastado = totalGastado;
			nombreMinimoGastado = nombreComprador;
			cantidadminimoGastado = cantidadProductos;
		}

		acumuladorTotalGastado = acumuladorTotalGastado + totalGastado;

		acumuladorEdadCompradores = acumuladorEdadCompradores + edadComprador;
		contadorCompradores++;
		respuesta = confirm("Desea ingresar otra compra?");
		
	}

	promedioEdadCompradores = acumuladorEdadCompradores / contadorCompradores;
	porcentajeGastadoDebito = acumuladorDineroTarjetaDebito / acumuladorTotalGastado *100;

	document.write("A) El promedio de edad entre todos los compradores: " + promedioEdadCompradores + "<br>");

	if(contadorCompradoresMenores25 == 0)
	{
		document.write("B) no hay menores de 25" + "<br>");
	}
	else
	{
		promedioDineroGAstadoMenores25 = acumuladorDineroMenores25 / contadorCompradoresMenores25;
		document.write("B) El promedio de dinero gastado por los compradores menores a 25 años: $" + promedioDineroGAstadoMenores25 + "<br>");
	}
	document.write("C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito: %" + porcentajeGastadoDebito + "<br>");
	document.write("D) Nombre y cantidad de productos del comprador que menos gasto: " + nombreMinimoGastado + " " + cantidadminimoGastado + "<br>");

}//FIN DE LA FUNCIÓN  txtIdEdad		estadoCivil