/*/*
Ejercicio 1:

Apellido:
Nombre:
Comisión:
Tutor:

El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras
realizadas por sus clientes en una jornada de trabajo.
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
	let nombre;
	let edad;
	let cantidadDeProductos;
	let totalGastado;
	let metodoDePago;
	let contadorCompradores = 0;
	let acumuladorEdadCompradores = 0;
	let promedioEdadCompradores;
	let contadormenores25 = 0;
	let acumuladorDineroGastadoMenores25;
	let promedioDineroMenores25;
	let acumuladorDinero = 0;
	let acumuladorDineroDebito = 0;
	let porcentajeDineroDebito;
	let precioMinimaCompra;
	let nombreMinimaCompra;
	let cantidadMinimaCompra;
	let respuesta = true;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(edad < 18)
		{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}
		cantidadDeProductos = prompt("Ingrese cantidad de productos");
		cantidadDeProductos = parseInt(cantidadDeProductos);
		while(cantidadDeProductos < 0)
		{
			cantidadDeProductos = prompt("Ingrese cantidad de productos");
			cantidadDeProductos = parseInt(cantidadDeProductos);
		}
		totalGastado = prompt("Ingrese total gastado");
		totalGastado = parseFloat(totalGastado);
		while(totalGastado < 0)
		{
			totalGastado = prompt("Ingrese total gastado");
			totalGastado = parseFloat(totalGastado);
		}
		metodoDePago = prompt("Ingrse metodo de pago");
		while(metodoDePago != "Efectivo" && metodoDePago != "Débito" && metodoDePago != "Crédito")
		{
			metodoDePago = prompt("Ingrse metodo de pago");
		}

		//D
		if(contadorCompradores == 0 || precioMinimaCompra > totalGastado)
		{
			precioMinimaCompra = totalGastado;
			nombreMinimaCompra = nombre;
			cantidadMinimaCompra = cantidadDeProductos;
		}

		//B
		if(edad > 25)
		{
			acumuladorDineroGastadoMenores25 = acumuladorDineroGastadoMenores25 + totalGastado;
			contadormenores25++;
		}

		//C
		if(metodoDePago == "Débito")
		{
			acumuladorDineroDebito = acumuladorDineroDebito + totalGastado;

		}

		//A
		acumuladorEdadCompradores = acumuladorEdadCompradores + edad;
		contadorCompradores++;

		acumuladorDinero = acumuladorDinero + totalGastado;

		respuesta = confirm("Desea registrar otra compra?");
	}

	promedioEdadCompradores = acumuladorEdadCompradores / contadorCompradores;
	promedioDineroMenores25 = acumuladorDineroGastadoMenores25 / contadormenores25;

	porcentajeDineroDebito = acumuladorDineroDebito / acumuladorDinero * 100;


	document.write("A) El promedio de edad entre todos los compradores: " + promedioEdadCompradores + "<br>");

	if(contadormenores25 == 0)
	{
		document.write("No hay menores de 25" + "<br>");
	}
	else
	{
		document.write("B) El promedio de dinero gastado por los compradores menores a 25 años: " + promedioDineroMenores25 + "<br>");
	}
	document.write("C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito: " + porcentajeDineroDebito + "<br>");
	document.write("D) Nombre y cantidad de productos del comprador que menos gasto: " + nombreMinimaCompra + " " + cantidadMinimaCompra + "<br>");

		
}//FIN DE LA FUNCIÓN