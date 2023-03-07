/******************************************************************************
Ejercicio 1

De los 50 participantes del torneo de TETRIS, se deben ingresar los datos de acuerdo a lo siguiente:
Nombre
Genero (“F”, “M”, "X")
Edad (validar de manera coherente)
Score (validar de manera coherente)
Informar:
a) La cantidad de participantes mayores de edad.
b) El promedio de edad de todos los participantes femeninos.
c) El nombre del participante (cualquiera sea el genero) con mejor score.
Pedir datos por prompt y mostrar la información por document.write.



*******************************************************************************/
function mostrar()
{
	
	let genero;
	let nombre;
	let edad;
	let score;
	let contadorMayoresDeEdad;
	let nombreMejorScore;
	let mejorScore;
	let contador;
	let promedioFemenino;
	let contadorParticipantesFemeninos;
	let acumuladorEdadFemenina;

	contador = 0;
	contadorMayoresDeEdad = 0;
	contadorParticipantesFemeninos = 0;
	acumuladorEdadFemenina = 0;

	while(contador < 50)
	{
		nombre = prompt("Ingrese el nombre");
		genero = prompt("Ingrese el genero (f, m o x)");
		while(genero != "f" && genero != "m" && genero != "x")
		{
			genero = prompt("Ingrese el genero (f, m o x)");
		}
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(edad < 1 || edad > 120)
		{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}
		score = prompt("Ingrese score");
		score = parseInt(score);
		while(score < 1)
		{
			score = prompt("Ingrese score");
			score = parseInt(score);
		}

		if(edad > 17)
		{
			contadorMayoresDeEdad++;
		}

		if(genero == "f")
		{
			acumuladorEdadFemenina = acumuladorEdadFemenina + edad;
			contadorParticipantesFemeninos++;
		}

		if(contador == 0 || score > mejorScore)
		{
			nombreMejorScore = nombre;
			mejorScore = score;

		}

		contador++;
	}

	promedioFemenino = acumuladorEdadFemenina / contadorParticipantesFemeninos;

	if(contadorMayoresDeEdad == 0)
	{
		document.write("A- No hay mayores de edad<br>");
	}
	else
	{
		document.write("A- cantidad de participantes mayores de edad: " + contadorMayoresDeEdad + "<br>");
	}

	if(contadorParticipantesFemeninos == 0)
	{
		document.write("B- No hay participantes femeninos<br>");
	}
	else
	{
		
	}
	
	document.write("C- nombre del participante con mejor score: " + nombreMejorScore + "<br>");
}
