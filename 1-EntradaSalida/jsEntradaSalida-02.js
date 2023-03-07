/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	let pepepeposoRecaudacion;
	let quinotoRecaudacion;
	let huesosRecaudacion;
	let nombreVendedor;
	let nombreComprador;
	let cantidadPasajes;
	let precioPaquete;
	let tipoAsiento;
	let tipoViaje;
	let tipodestino;
	let respuesta;
	let mayorRecaudador;
	let mayorRecaudacion;
	let contadorNacionales;
	let contadorInternacionales;
	let porcentajeNacionales;
	let porcentajeInternacionales;
	let contadorDirectos;
	let contadorIndirectos;
	let aumento;
	let precioFinal;
	let economico;
	let ejecutico;
	let primeraClase;
	let promedioEconomico;
	let promedioEjecutivo;
	let promedioPromeraclase;
	let precioPasaje;

	precioPasaje = 10000;
	economico = 0;
	ejecutico = 0;
	primeraClase = 0;
	respuesta = true;
	pepepeposoRecaudacion = 0;
	quinotoRecaudacion = 0;
	huesosRecaudacion = 0;
	contadorInternacionales = 0;
	contadorNacionales = 0;
	contadorDirectos = 0;
	contadorIndirectos = 0;


	while(respuesta == true)
	{
		nombreVendedor = prompt("Ingrese nombre del vendedor");
		while(nombreVendedor != "pepepeposo" && nombreVendedor != "quinoto" && nombreVendedor != "hueso")
		{
			nombreVendedor = prompt("Ingrese un nombre de vendedor correcto");
		}

		nombreComprador = prompt("Ingrese nombre del comprador");
		while(nombreComprador == true)
		{
			nombreComprador = prompt("Ingrese un nombre de comprador que no sea un numero");
		}

		cantidadPasajes = prompt("Ingrese la cantidad de pasajes");
		cantidadPasajes = parseInt(cantidadPasajes);
		while(cantidadPasajes < 1 || cantidadPasajes > 5)
		{
			cantidadPasajes = prompt("Ingrese la cantidad de pasajes \nDebe ser de 1 a 5");
			cantidadPasajes = parseInt(cantidadPasajes);
		}
		tipoAsiento = prompt("Ingrese tipo de asiento");
		while(tipoAsiento != "economico" && tipoAsiento != "ejecutivo" && tipoAsiento != "primera clase")
		{
			tipoAsiento = prompt("Ingrese un tipo de asiento correcto");
		}
		tipoViaje = prompt("Ingrese el tipo de viaje");
		while(tipoViaje != "directo" && tipoViaje != "escala")
		{
			tipoViaje = prompt("Ingrese un tipo de viaje valido");
		}
		tipodestino = prompt("Ingrese el tipo de destino")
		while(tipodestino != "internacional" && tipodestino != "nacional")
		{
			tipodestino = prompt("Ingrese un tipo de destino correcto")
		}

		precioPaquete = precioPasaje * cantidadPasajes;

		if(tipodestino == "internacional")
		{
			contadorInternacionales++;
		}
		else
		{
			contadorNacionales++;
		}

		switch(nombreVendedor)
		{
			case "pepepeposo":
				pepepeposoRecaudacion = pepepeposoRecaudacion + precioPaquete;
				break;
			case "quinoto":
				quinotoRecaudacion = quinotoRecaudacion + precioPaquete;
				break;
			case "hueso":
				huesosRecaudacion = huesosRecaudacion + precioPaquete;
				break;
		}

		if(tipoViaje == "directo")
		{
			contadorDirectos++;
		}
		else
		{
			contadorIndirectos++;
		}

		if(tipoAsiento == "ejecutivo")
		{
			precioFinal = precioPaquete * 1.20;
			alert("el precio total seria. $" + precioFinal);
			ejecutico++;
		}
		else
		{
			if(tipoAsiento == "primera clase")
			{
				precioFinal = precioPaquete * 1.35;
				alert("el precio total seria. $" + precioFinal);
				primeraClase++;
			}
			else
			{
				economico++;
			}
		}



		respuesta = confirm("Desea registrar otra venta?");

	}


	if(pepepeposoRecaudacion > quinotoRecaudacion && pepepeposoRecaudacion > huesosRecaudacion)
	{
		mayorRecaudador = "Pepepeposo";
		mayorRecaudacion = pepepeposoRecaudacion;
	}
	else
	{
		if(quinotoRecaudacion > pepepeposoRecaudacion && quinotoRecaudacion > huesosRecaudacion)
		{
			mayorRecaudador = "Quinoto";
			mayorRecaudacion = quinotoRecaudacion;
		}
		else
		{
			if(huesosRecaudacion > pepepeposoRecaudacion && huesosRecaudacion > quinotoRecaudacion)
			{
				mayorRecaudador = "Hueso";
				mayorRecaudacion = huesosRecaudacion;
			}
		}
	}

	promedioEconomico = (economico + ejecutico + primeraClase) / economico;
	promedioEjecutivo = ejecutico /(economico + ejecutico + primeraClase) *100;
	promedioPromeraclase = primeraClase /(economico + ejecutico + primeraClase) *100;

	porcentajeInternacionales = contadorInternacionales /(contadorInternacionales + contadorNacionales) *100;
	porcentajeNacionales = contadorNacionales /(contadorInternacionales + contadorNacionales) *100;

	

	document.write("Total de pesos recaudados: -Pepepeposo: $" + pepepeposoRecaudacion + " -Quinoto: $" + quinotoRecaudacion + " -Hueso: $" + huesosRecaudacion + "<br>")
	document.write("El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor: " + mayorRecaudador + " $" + mayorRecaudacion + "<br>")
	document.write("Porcentaje de vuelos naconales: %" + porcentajeNacionales + " porcentaje de vuelos internacionales: %" + porcentajeInternacionales+  "<br>")
	document.write("Cantidad de viajes directos " + contadorDirectos + "cantidad de viajes con escala " + contadorIndirectos +  "<br>")
	document.write("Promedio de asientos: -economicos: " + promedioEconomico + " -ejecutivo: "+ promedioEjecutivo+ " -primera clase"+ promedioPromeraclase+  "<br>")


}
/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Se sabe que el precio de cada pasaje vendido dentro del paquete de viaje es de 10000 pesos.
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor. *
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor. *
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos. *
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert*
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/

