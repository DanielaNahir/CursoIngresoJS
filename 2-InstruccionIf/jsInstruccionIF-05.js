/*
Ejercicio 2:

Apellido:
Nombre:
Comisión:
Tutor:

"Es la gala de eliminación en Gran Hermano y la producción nos pide un programa para contar los
votos de los televidentes y saber cuál será el participante que deberá abandonar la casa más famosa del mundo.
Los participantes en la placa son: La Tora, Romina, Julieta y Camila. Nacho no fue nominado y
Marcos no está en la placa esta semana por haber ganado la inmunidad.
El televidente debe ingresar:
Nombre del votante
Edad del votante (debe ser mayor a 13)
Género del votante (masculino, femenino, otro)
El nombre del participante a quien le dará el voto negativo (Debe estar en placa)
No se sabe cuántos votos entrarán durante la gala.
Se debe informar al usuario:
A) El promedio de edad de las votantes de género femenino
B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta.
C) Nombre del votante más joven qué voto a La Tora.
D) Nombre de cada participante y porcentaje de los votos qué recibió.
E) El nombre del participante que debe dejar la casa (El que tiene más votos)
¡No decepciones a Santiago Del Moro!
"
*/

function mostrar()
{
	let nombreDelVotante;
	let edadDelVotante;
	let generoDelVotante;
	let participanteVotoNegativo;
	let contadorVotantesFemeninos = 0;
	let acumuladorEdadFemenina = 0;
	let promedioEdadFemenina;
	let contadorMasculinos25a40 = 0;
	let edadMasJoven;
	let nombreEdadMasJoven;
	let acumuladorVotosLatora = 0;
	let acumuladorVotosRomina = 0;
	let acumuladorVotosJulieta = 0;
	let acumuladorVotosCamila = 0;
	let porcentajeLatora;
	let porcentajeRomina;
	let porcentajeJulieta;
	let porcentajeCamila;
	let participanteEliminado;
	let bandera = false;
	let respuesta = true;

	while(respuesta == true)
	{
		nombreDelVotante = prompt("Ingrese su nombre");
		edadDelVotante = prompt("INgrese su edad");
		edadDelVotante = parseInt(edadDelVotante);
		while(edadDelVotante < 14)
		{
			edadDelVotante = prompt("INgrese su edad");
			edadDelVotante = parseInt(edadDelVotante);
		}
		generoDelVotante = prompt("Ingrese su genero");
		while(generoDelVotante != "masculino" && generoDelVotante != "femenino" && generoDelVotante != "otro")
		{
			generoDelVotante = prompt("Ingrese su genero");
		}
		participanteVotoNegativo = prompt("Ingrese el participante al que vota");
		while(participanteVotoNegativo != "la tora" && participanteVotoNegativo != "romina" && participanteVotoNegativo != "julieta" && participanteVotoNegativo != "camila")
		{
			participanteVotoNegativo = prompt("Ingrese el participante al que vota");
		}

	
		switch(generoDelVotante)
		{
			case "femenino": //A
				acumuladorEdadFemenina = acumuladorEdadFemenina + edadDelVotante;
				contadorVotantesFemeninos++;
				break;
			case "masculino": //B
				if(edadDelVotante > 24 && edadDelVotante < 41 && participanteVotoNegativo == "julieta")
				{
					contadorMasculinos25a40++;
				}
		}

		if(bandera == false && participanteVotoNegativo == "la tora" || edadDelVotante < edadMasJoven && participanteVotoNegativo == "la tora")
		{
			edadMasJoven = edadDelVotante;
			nombreEdadMasJoven = nombreDelVotante;
		}

		switch(participanteVotoNegativo)
		{
			case "camila":
				acumuladorVotosCamila++;
				break;
			case "julieta":
				acumuladorVotosJulieta++;
				break;
			case "la tora":
				acumuladorVotosLatora++;
				break;
			case "romina":
				acumuladorVotosRomina++;
		}


		respuesta = confirm("Desea registrar otro voto?");
	}

	promedioEdadFemenina = acumuladorEdadFemenina / contadorVotantesFemeninos;
	porcentajeCamila = acumuladorVotosCamila / ( acumuladorVotosCamila + acumuladorVotosJulieta + acumuladorVotosLatora + acumuladorVotosRomina) * 100;
	porcentajeJulieta = acumuladorVotosJulieta / ( acumuladorVotosCamila + acumuladorVotosJulieta + acumuladorVotosLatora + acumuladorVotosRomina) * 100;
	porcentajeLatora = acumuladorVotosLatora / ( acumuladorVotosCamila + acumuladorVotosJulieta + acumuladorVotosLatora + acumuladorVotosRomina) * 100;
	porcentajeRomina = acumuladorVotosRomina / ( acumuladorVotosCamila + acumuladorVotosJulieta + acumuladorVotosLatora + acumuladorVotosRomina) * 100;

	document.write("A) El promedio de edad de las votantes de género femenino: " + promedioEdadFemenina + "<br>");
	document.write("B) Cantidad de personas de género masculino entre 25 y 40 años que votaron a Nacho o Julieta: "+ contadorMasculinos25a40 + "<br>");
	
	if(acumuladorVotosLatora == 0)
	{
		document.write("C) Nadie voto a la tora <br>");
	}
	else
	{
		document.write("C) Nombre del votante más joven qué voto a La Tora: " + nombreEdadMasJoven + "<br>");
	}
	document.write("D) Camila: %"+ porcentajeCamila + " Julieta: %" + porcentajeJulieta +" La tora: %" + porcentajeLatora + " Romina: %" + porcentajeRomina + "<br>");
	
	if(porcentajeCamila > porcentajeJulieta && porcentajeCamila > porcentajeLatora && porcentajeCamila > porcentajeRomina)
	{
		participanteEliminado = "Camila";
	}
	else
	{
		if(porcentajeJulieta > porcentajeCamila && porcentajeJulieta > porcentajeLatora && porcentajeJulieta > porcentajeRomina)
		{
			participanteEliminado = "Julieta";
		}
		else
		{
			if(porcentajeLatora> porcentajeCamila && porcentajeLatora > porcentajeJulieta && porcentajeLatora > porcentajeRomina)
			{
				participanteEliminado = "La tora";
			}
			else
			{
				if(porcentajeRomina > porcentajeCamila && porcentajeRomina > porcentajeLatora && porcentajeRomina > porcentajeJulieta)
				{
					participanteEliminado = "Romina";
				}
				else
				{
					participanteEliminado = "hubo un empate";
				}
			}
		}
	}
	document.write("E) El nombre del participante que debe dejar la casa (El que tiene más votos): " + participanteEliminado + "<br>");

}//FIN DE LA FUNCIÓN