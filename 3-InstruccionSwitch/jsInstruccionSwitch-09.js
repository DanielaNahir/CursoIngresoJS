function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let tarifa;
	let precioFinal;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	tarifa = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal = tarifa * 1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = tarifa - tarifa * 0.1;
					break;
				case "Mar del plata":
					precioFinal = tarifa - tarifa * 0.2;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					precioFinal = tarifa - tarifa * 0.2;
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = tarifa * 1.1;
					break;
				case "Mar del plata":
					precioFinal = tarifa * 1.2;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = tarifa * 1.1;
					break;
				case "Cordoba":
					precioFinal = tarifa;
					break;
			}
			break;
		
	}

	alert("Estación del año: " + estacionIngresada + "\n" + "Destino ingresado: " + destinoIngresado +
	       "\n" + "Precio final: " + precioFinal);	

}//FIN DE LA FUNCIÓN