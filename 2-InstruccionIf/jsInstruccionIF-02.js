function mostrar()
{
	let contador = 0;
	let nombreEquipoContario;
	let localVisitante;
	let golesRival;
	let golesEquipoPropio;
	let contadorEmpate;
	let contadorVictorias;
	let contadorDerrotas;
	let acumuladorGolesHechos;
	let acumuladorGolesRecibidos;
	let nombreMasGoles;
	let mayorGolesRecibidos;
	let porcentajeVictorias;
	let mensaje;
	

	acumuladorGolesHechos = 0;
	acumuladorGolesRecibidos = 0;
	contadorDerrotas = 0;
	contadorEmpate = 0;
	contadorVictorias = 0;

	while(contador < 10)
	{
		nombreEquipoContario = prompt("Ingrese nombre del equipo contrario");
		localVisitante = prompt("Se jugo de local o visitante?");
		while(localVisitante != "local" && localVisitante != "visitante")
		{
			localVisitante = prompt("Se jugo de local o visitante?\n ingrese una respuesta correcta");
		}
		golesRival = prompt("Ingrese cuantos goles metio el rival durante el partido");
		golesRival = parseInt(golesRival);
		while(golesRival < 0)
		{
			golesRival = prompt("Ingrese cuantos goles metio el rival durante el partido");
			golesRival = parseInt(golesRival);	
		}
		golesEquipoPropio = prompt("Ingrese los goles que metio el equipo durante el partido");
		golesEquipoPropio = parseInt(golesEquipoPropio);
		while(golesEquipoPropio < 0)
		{
			golesEquipoPropio = prompt("Ingrese los goles que metio el equipo durante el partido");
			golesEquipoPropio = parseInt(golesEquipoPropio);
		}

		if(contador == 0 || mayorGolesRecibidos < golesRival)
		{
			mayorGolesRecibidos = golesRival;
			nombreMasGoles = nombreEquipoContario;
		}


		if(golesEquipoPropio == golesRival)
		{
			contadorEmpate++;
		}
		else
		{
			if(golesEquipoPropio > golesRival)
			{
				contadorVictorias++;
				if(contadorVictorias == 1 && localVisitante == "visitante")
				{
					mensaje = "la primer victoria fue de visitante";
				}
				else
				{
					mensaje = "La primer victoria no fue de visitante";
				}
			}
			else
			{
				contadorDerrotas++;
			}
		}

		acumuladorGolesHechos = acumuladorGolesHechos + golesEquipoPropio;
		acumuladorGolesRecibidos = acumuladorGolesRecibidos + golesRival;

		contador++;
	}

	porcentajeVictorias = contadorVictorias /10 *100;

	document.write("el porcentaje de victorias de nuestro equipo: " + porcentajeVictorias + "<br>");
	document.write("cantidad de goles hechos y recibidos: -Hechos: " + acumuladorGolesHechos + " -Recibidos: " + acumuladorGolesRecibidos + "<br>");
	document.write("nombre y cantidad de goles del equipo que nos hizo más goles: " + nombreMasGoles + ", goles: " + mayorGolesRecibidos + "<br>");
	document.write(mensaje+ "<br>");

}//FIN DE LA FUNCIÓN