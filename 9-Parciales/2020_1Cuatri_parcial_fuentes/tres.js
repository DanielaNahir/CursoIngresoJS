/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	let respuesta;
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let bandera;
	let nombreMayorTemperatura;
	let mayorTemperatura;
	let contadorViudos;
	let contadorHombresSolterosViudos;
	let personasTerceraEdad;
	let acumuladorEdadHombresSoltero;
	let promedioEdad;
	let contadorHombresSoltros;

	respuesta = true;
	bandera = false;
	mayorTemperatura = 0;
	contadorViudos = 0;
	contadorHombresSolterosViudos = 0;
	personasTerceraEdad = 0;
	contadorHombresSoltros = 0;
	acumuladorEdadHombresSoltero = 0;
	
	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		sexo = prompt("Ingrese sexo \n(f o m)");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo de manera correcta \n(f o m)");
		}

		estadoCivil = prompt("Ingrese estado civil \n(soltero, casado o viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese un estado civil correcto \n(soltero, casado o viudo)");
		}

		temperaturaCorporal = prompt("Ingrese temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		//A
		if(bandera == false|| temperaturaCorporal > mayorTemperatura)
		{
			nombreMayorTemperatura = nombre;
			mayorTemperatura = temperaturaCorporal;
			bandera = true;
		}

		//B
		if(edad > 17 && estadoCivil == "viudo")
		{
			contadorViudos++;
		}

		//C
		if(sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo")
		{
			contadorHombresSolterosViudos++;
		}

		//D
		if(edad > 59 && temperaturaCorporal > 38)
		{
			personasTerceraEdad++;
		}

		//F
		if(sexo == "m" && estadoCivil == "soltero")
		{
			acumuladorEdadHombresSoltero = acumuladorEdadHombresSoltero + edad;
			contadorHombresSoltros++;
		}
		respuesta = confirm("Desea registrar otra persona?");
	}

	//F
	promedioEdad = acumuladorEdadHombresSoltero / contadorHombresSoltros;

	//A
	document.write("A- Nombre de la persona con mas temperatura: " + nombreMayorTemperatura + "<br>");
	//B
	if(contadorViudos > 0)
	{
		document.write("B- Cantidad de mayores de edad viudos: " + contadorViudos + "<br>");
	}
	else
	{
		document.write("B- No hay mayores de edad viudos <br>");
	}
	//C
	if(contadorHombresSolterosViudos > 0)
	{
		document.write("C- Cantidad de hombres solteros o viudos: " + contadorHombresSolterosViudos + "<br>");
	}
	else
	{
		document.write("C- No hay hombres solteros o viudos <br>");
	}
	//D
	if(personasTerceraEdad > 0)
	{
		document.write("D- Personas de la tercera edad (mas de 60 años) con mas de 38 de temperatura: " + personasTerceraEdad + "<br>");
	}
	else
	{
		document.write("D- No hay personas de tercera edad con mas de 38 de temperatura <br>");
	}
	//E
	if(acumuladorEdadHombresSoltero == 0)
	{
		document.write("E- No hay hombres solteros");
	}
	else
	{
		document.write("E- Promedio de edad entre los hombres solteros: " + promedioEdad);
	}
}
