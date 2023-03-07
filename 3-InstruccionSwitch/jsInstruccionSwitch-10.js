function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Otoño":
			switch(destinoIngresado)
			{
				default:
					alert("Se viaja");
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
			}
			break;
	}

}//FIN DE LA FUNCIÓN