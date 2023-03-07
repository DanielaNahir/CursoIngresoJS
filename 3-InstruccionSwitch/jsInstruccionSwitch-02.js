/*
Ejercicio 2:

Apellido: daniela
Nombre: nuñez
Comisión: division d
Tutor: mariano

"El gimnasio ""Te pago la cuota pa no ir"",  quiere medir el progreso de sus clientes y saber quien es el
más fuerte.
Debemos pedirle al cliente:
Nombre
Edad(debe ser mayor a 12)
Peso(No debe ser negativo)
Género(masculino, femenino, otro)
Peso levantado en press de banca(No debe ser negativo)
Peso levantado en sentadilla(No debe ser negativo)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) El promedio de peso levantado en sentadilla.
B) El porcentaje de clientes por género
C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca 
D) El genero que mas peso ha levantado en total realizando sentadillas"

*/


function mostrar()
{
	let nombre;
	let edad;
	let peso;
	let genero;
	let pesoLevantadoPressBanca;
	let pesoLevantadoSentadilla;
	let acumuladorPesoSentadilla = 0;
	let contadorPesoSentadilla = 0;
	let promedioPesoLevantadoSentadilla;
	let contadorMasculino = 0;
	let acumuladorSentadillaMasculino = 0;
	let contadorFemenino = 0;
	let acumuladorSentadillaFemenino = 0;
	let contadorOtro = 0;
	let acumuladorSentadillaOtro = 0;
	let porcentajeMasculino;
	let porcentajeFemenino;
	let porcentajeOtro;
	let bandera = false;
	let masculinoMAsPesoPressBanca;
	let mayorPesoPressBanca;
	let generoMasSentadillas;
	let mayorPesoSentadilla;
	let respuesta = true;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(edad < 13)
		{
			edad = prompt("Ingrese edad correcta");
			edad = parseInt(edad);
		}
		peso = prompt("Ingrese peso");
		peso = parseFloat(peso);
		while(peso < 0)
		{
			peso = prompt("Ingrese peso correcto");
			peso = parseFloat(peso);
		}
		genero = prompt("Ingrese genero");
		while(genero != "masculino" && genero != "femenino" && genero != "otro")
		{
			genero = prompt("Ingrese genero correcto");
		}
		pesoLevantadoPressBanca = prompt("Ingrese peso levantadoo en press banca");
		pesoLevantadoPressBanca = parseFloat(pesoLevantadoPressBanca);
		while(pesoLevantadoPressBanca < 0)
		{
			pesoLevantadoPressBanca = prompt("Ingrese peso levantado en press banca");
			pesoLevantadoPressBanca = parseFloat(pesoLevantadoPressBanca);
		}
		pesoLevantadoSentadilla = prompt("Ingrese peso levantado en sentadilla");
		pesoLevantadoSentadilla = parseFloat(pesoLevantadoSentadilla);
		while(pesoLevantadoPressBanca < 0)
		{
			pesoLevantadoSentadilla = prompt("Ingrese peso levantado en sentadilla");
			pesoLevantadoSentadilla = parseFloat(pesoLevantadoSentadilla);
		}

		if(pesoLevantadoSentadilla > 0)
		{
			contadorPesoSentadilla++;
		}

		switch(genero)
		{
			case "femenino":
				contadorFemenino++;
				acumuladorSentadillaFemenino = acumuladorSentadillaFemenino + pesoLevantadoSentadilla;
				break;
			case "masculino":
				contadorMasculino++;
				if(contadorMasculino == o /*bandera == true */ || pesoLevantadoPressBanca > mayorPesoPressBanca)
				{
					mayorPesoPressBanca = pesoLevantadoPressBanca;
					masculinoMAsPesoPressBanca = nombre;
					bandera = true;
				}
				acumuladorSentadillaMasculino = acumuladorSentadillaFemenino + pesoLevantadoSentadilla;
				break;
			case "otro":
				contadorOtro++;
				acumuladorSentadillaOtro = 	acumuladorSentadillaOtro + pesoLevantadoSentadilla;
				break;
		}

		acumuladorPesoSentadilla = acumuladorPesoSentadilla + pesoLevantadoSentadilla;
		

		respuesta = confirm("Desea registrar a otra persona?");
	}

	if(acumuladorSentadillaFemenino > acumuladorSentadillaMasculino && acumuladorSentadillaFemenino > acumuladorSentadillaOtro)
	{
		generoMasSentadillas = "Femenino";
	}
	else
	{
		if(acumuladorSentadillaMasculino > acumuladorSentadillaFemenino && acumuladorSentadillaMasculino > acumuladorSentadillaOtro)
		{
			generoMasSentadillas = "masculino";
		}
		else
		{
			if(acumuladorSentadillaOtro > acumuladorSentadillaMasculino && acumuladorSentadillaOtro> acumuladorSentadillaFemenino)
			{
				generoMasSentadillas = "otro";
			}
		}
	}
	//A
	promedioPesoLevantadoSentadilla = acumuladorPesoSentadilla / contadorPesoSentadilla;
	porcentajeFemenino = contadorFemenino /(contadorFemenino + contadorMasculino + contadorOtro) *100;
	porcentajeMasculino = contadorMasculino /(contadorFemenino + contadorMasculino + contadorOtro) *100;
	porcentajeOtro = contadorOtro /(contadorFemenino + contadorMasculino + contadorOtro) *100;

	document.write("A) El promedio de peso levantado en sentadilla: " + promedioPesoLevantadoSentadilla + "<br>");
	document.write("B) El porcentaje de clientes por género: -masculino: " + porcentajeMasculino + " -femenino: " + porcentajeFemenino + " -otro: " + porcentajeOtro + "<br>");
	document.write("C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca: " + masculinoMAsPesoPressBanca + " peso levantado: " + mayorPesoPressBanca + "<br>");
	document.write("D) El genero que mas peso ha levantado en total realizando sentadillas: " + generoMasSentadillas + "<br>");
}//FIN DE LA FUNCIÓN




