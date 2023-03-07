/*
Ejercicio 1:

Apellido:
Nombre:
Comisión:
Tutor:

"Un grupo de jugadores del muy conocido juego League Of Legends apodados ""la banda de Gio"", registran de sus 
partidas distintos parametros.
Para eso vamos a necesitar un programa que pida a cada uno de los jugadores:
Nombre
Campeón/ personaje recurrente (Riven, Jinx, Jax, Darius)
Cantidad de partidas ganadas (No debe ser negativo)
Cantidad de partidas perdidas (No debe ser negativo)
Queremos informar:
A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas.
B) El nombre del jugador con mas derrotas.
C) Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o 
Riven
"*/

function mostrar()
{
	let nombre;
	let personajeRecurrente;
	let partidasGanadas;
	let partidasPerdidas;
	let acumuladorVictoriasJinx = 0;
	let totalPartidasGanadas = 0;
	let porcentajeVictoriasJinx;
	let mayorCantDerrotas;
	let bandera = false;
	let nombreMyorCantDerrotas;
	let contadorJugadoresDariusRiven = 0;
	let respuesta = true;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");
		personajeRecurrente = prompt("Ingrese personaje recurrente");
		while(personajeRecurrente != "riven" && personajeRecurrente != "jinx" && personajeRecurrente != "jax" && personajeRecurrente != "darius")
		{
			personajeRecurrente = prompt("Ingrese personaje recurrente");	
		}
		partidasGanadas = prompt("Ingrese cantidad de partidas ganadas");
		partidasGanadas = parseInt(partidasGanadas);
		while(partidasGanadas < 0)
		{
			partidasGanadas = prompt("Ingrese cantidad de partidas ganadas");
			partidasGanadas = parseInt(partidasGanadas);
		}
		partidasPerdidas = prompt("Ingrese cantidad de partidas perdidas");
		partidasPerdidas = parseInt(partidasPerdidas);
		while(partidasPerdidas < 0)
		{
			partidasPerdidas = prompt("Ingrese cantidad de partidas perdidas");
			partidasPerdidas = parseInt(partidasPerdidas);
		}


		//A
		if(personajeRecurrente == "jinx")
		{
			acumuladorVictoriasJinx = acumuladorVictoriasJinx + partidasGanadas;
		}

		//B
		if(bandera == false || partidasPerdidas > mayorCantDerrotas)
		{
			mayorCantDerrotas = partidasPerdidas;
			nombreMyorCantDerrotas = nombre;
			bandera = true
		}

		//C Cuantos jugadores ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o Riven
		if(personajeRecurrente == "darius" || personajeRecurrente == "riven" && partidasGanadas > 5 && partidasPerdidas < 3)
		{
			contadorJugadoresDariusRiven++;
		}


		totalPartidasGanadas = totalPartidasGanadas + partidasGanadas;

		respuesta = confirm("Desea registrar otra partida?");
	}

	porcentajeVictoriasJinx = acumuladorVictoriasJinx / totalPartidasGanadas *100;

	document.write("A) Porcentaje de victorias del personaje Jinx, sobre el total de partidas ganadas: %" + porcentajeVictoriasJinx + "<br>");
	document.write("B) El nombre del jugador con mas derrotas: " + nombreMyorCantDerrotas + "<br>");
	document.write("C) Cantidad de jugadores que ganaron mas de 5 partidas y perdieron menos de 3 (en un mismo ingreso) jugando con Darius o Riven: " + contadorJugadoresDariusRiven + "<br>");

}//FIN DE LA FUNCIÓN