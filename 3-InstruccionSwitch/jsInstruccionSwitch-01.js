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
	let nombreDelCOmprador;
	let edadComprador;
	let cantidadDeProductosComprados;
	let totalGAstados;
	let metodoPago;
	let promedioEdad;
	let acumuladorEdadCompradores = 0;
	let contadorCompradores = 0;
	let contadorMenores25 = 0;
	let promedioDineroGastado;
	let acumuladorDineroGastadoMenores = 0;
	let acumuladorDinero = 0;
	let porcentajeDineroDebito;
	let acumuladorDineroDebito = 0;
	let nombreCompradorMenosGastos;
	let compraMenosGastos; // = 0;
	let cantidadMenosGastos; // = 0;
	let respuesta = true;

	while(respuesta == true)
	{
		nombreDelCOmprador = prompt("Ingrese nombre del comprador");
		edadComprador = prompt("Ingrese edad del comprador");
		edadComprador = parseInt(edadComprador);
		while(edadComprador < 18)
		{
			edadComprador = prompt("El comprador debe ser mayor de edad");
			edadComprador = parseInt(edadComprador);
		}
		cantidadDeProductosComprados = prompt("Ingrese cantidad de productos comprados");
		cantidadDeProductosComprados = parseInt(cantidadDeProductosComprados);
		while(cantidadDeProductosComprados <1)
		{
			cantidadDeProductosComprados = prompt("Ingrese una cantidad de productos correcta");
			cantidadDeProductosComprados = parseInt(cantidadDeProductosComprados);
		}
		totalGAstados = prompt("Ingrese el total gastado");
		totalGAstados = parseFloat(totalGAstados);
		while(totalGAstados < 1)
		{
			totalGAstados = prompt("Ingrese el total gastado");
			totalGAstados = parseFloat(totalGAstados);
		}
		metodoPago = prompt("Ingrese metodo de pago");
		while(metodoPago != "efectivo" && metodoPago != "credito" && metodoPago != "debito")
		{
			metodoPago = prompt("Ingrese metodo de pago");
		}

		//D
		if(contadorCompradores == 0 || totalGAstados < compraMenosGastos)
		{
			compraMenosGastos = totalGAstados;
			nombreCompradorMenosGastos = nombreDelCOmprador;
			cantidadMenosGastos = cantidadDeProductosComprados;
		}

		//B
		if(edadComprador < 25)
		{
			acumuladorDineroGastadoMenores = acumuladorDineroGastadoMenores + totalGAstados;
			contadorMenores25++;
		}

		//C
		if(metodoPago == "debito")
		{
			acumuladorDineroDebito = acumuladorDineroDebito + totalGAstados;
		}
		acumuladorDinero = acumuladorDinero + totalGAstados;

		//A
		acumuladorEdadCompradores = acumuladorEdadCompradores + edadComprador;
		contadorCompradores++;

		respuesta = confirm("Desea registrar otra venta?");
	}

	
	//A bien
	promedioEdad = acumuladorEdadCompradores / contadorCompradores;

	document.write("A) El promedio de edad entre todos los compradores: " + promedioEdad + "<br>");
	
	//------------------------
	//B
	if(contadorMenores25 >0)
	{
		promedioDineroGastado = acumuladorDineroGastadoMenores / contadorMenores25; //acumuladorDinero;
		document.write("B) El promedio de dinero gastado por los compradores menores a 25 años: " + promedioDineroGastado + "<br>");

	}
	else
	{
		document.write("B) No hay menores de 25" + "<br>");
	}
	//------------------------
	
	//C bien
	porcentajeDineroDebito = acumuladorDineroDebito / acumuladorDinero *100;
	document.write("C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito: %" + porcentajeDineroDebito + "<br>");
	
	document.write("D) Nombre y cantidad de productos del comprador que menos gasto: " + nombreCompradorMenosGastos + ", cantidad de productos: " + cantidadMenosGastos + "<br>");

}//FIN DE LA FUNCIÓN

	


































/*//tomo el mes
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("felices fiestas!!!");
			break;
	}*/

