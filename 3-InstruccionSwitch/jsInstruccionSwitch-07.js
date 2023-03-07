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
	let pesoPressBanca;
	let pesoSentadilla;
	let respuesta = true;
	let acumuladorPesoSentadilla = 0;
	let contadorPesoSentadilla = 0;
	let promedioPesoSentadilla;
	let contadorFemenino = 0;
	let contadorMasculino = 0;
	let contadorOtro = 0;
	let porcentajeFemenino;
	let porcentajeMasculino;
	let porcentajeOtro;
	let mayorPesoPressBanca;
	let nombreMayorPesoPressBanca;
	let pesoMayorPesoPressBanca;
	let acumuladorPesoSentadillaFemenino = 0;
	let acumuladorPesoSentadillaMasculino = 0;
	let acumuladorPesoSentadillaOtro = 0;
	let generoMayorSentadillas;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while(edad < 12)
		{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}
		peso = prompt("Ingrese peso");
		peso = parseFloat(peso);
		while(peso < 1)
		{
			peso = prompt("Ingrese peso");
			peso = parseFloat(peso);
		}
		genero = prompt("Ingrese su genero");
		while(genero != "masculino" && genero != "femenino" && genero != "otro")
		{
			genero = prompt("Ingrese su genero");
		}
		pesoPressBanca = prompt("Ingrese peso press banca levantado");
		pesoPressBanca = parseFloat(pesoPressBanca);
		while(pesoPressBanca < 0)
		{
			pesoPressBanca = prompt("Ingrese peso press banca levantado");
			pesoPressBanca = parseFloat(pesoPressBanca);
		}
		pesoSentadilla = prompt("Ingrese peso press banca levantado");
		pesoSentadilla = parseFloat(pesoSentadilla);
		while(pesoSentadilla < 0)
		{
			pesoSentadilla = prompt("Ingrese peso sentadilla levantado");
			pesoSentadilla = parseFloat(pesoSentadilla);
		}

		//A
		if(pesoSentadilla > 0)
		{
			acumuladorPesoSentadilla = acumuladorPesoSentadilla + pesoSentadilla;
			contadorPesoSentadilla++;
		}

		//B
		switch(genero)
		{
			case "femenino":
				contadorFemenino++;
				acumuladorPesoSentadillaFemenino = acumuladorPesoSentadillaFemenino + pesoSentadilla;
				break;
			case "masculino":
				contadorMasculino++;
				if(contadorMasculino == 1 || pesoPressBanca > mayorPesoPressBanca)
				{
					mayorPesoPressBanca = pesoPressBanca;
					nombreMayorPesoPressBanca = nombre;
					pesoMayorPesoPressBanca = peso;
				}
				acumuladorPesoSentadillaMasculino = acumuladorPesoSentadillaMasculino + pesoSentadilla;
				break;
			case "otro":
				contadorOtro++;
				acumuladorPesoSentadillaOtro = acumuladorPesoSentadillaOtro + pesoSentadilla;
				break;
		}
		respuesta = confirm("Desea registrar otro cliente?");
	}

	promedioPesoSentadilla = acumuladorPesoSentadilla / contadorPesoSentadilla;
	porcentajeFemenino = contadorFemenino /(contadorFemenino + contadorMasculino + contadorOtro) *100;
	porcentajeMasculino = contadorMasculino /(contadorFemenino + contadorMasculino + contadorOtro) *100;
	porcentajeOtro = contadorOtro /(contadorFemenino + contadorMasculino + contadorOtro) *100;

	document.write("A) El promedio de peso levantado en sentadilla: " + promedioPesoSentadilla + "<br>");
	document.write("B) El porcentaje de clientes por género: femenino %" +porcentajeFemenino+ " masculino %" + porcentajeMasculino+ " otro %"+ porcentajeOtro + "<br>");
	if(contadorMasculino == 0)
	{
		document.write("C) no hay pesonas masculinas" + "<br>");
	}
	else
	{
		document.write("C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca:"+ nombreMayorPesoPressBanca + " " + pesoMayorPesoPressBanca + "<br>");
	}

	if(acumuladorPesoSentadillaFemenino > acumuladorPesoSentadillaMasculino && acumuladorPesoSentadillaFemenino > acumuladorPesoSentadillaOtro)
	{
		generoMayorSentadillas = "femenino";
	}
	else
	{
		if(acumuladorPesoSentadillaMasculino > acumuladorPesoSentadillaFemenino && acumuladorPesoSentadillaMasculino > acumuladorPesoSentadillaOtro)
		{
			generoMayorSentadillas = "masculino";
		}
		else
		{
			if(acumuladorPesoSentadillaOtro > acumuladorPesoSentadillaMasculino && acumuladorPesoSentadillaOtro > acumuladorPesoSentadillaFemenino)
			{
				generoMayorSentadillas = "otro";
			}
		}
	}
	document.write("D) El genero que mas peso ha levantado en total realizando sentadillas" + generoMayorSentadillas + "<br>");
	
}//FIN DE LA FUNCIÓN