function mostrar()
{
	let nombre;
	let edad;
	let tipoPizza;
	let precioTotal;
	let contadorPizzaMuzzaCebolla;
	let contadorMuzza;
	let acumuladorMuzza;
	let promedioMuzza;
	let contadorCebolla;
	let acumuladorCebolla;
	let promedioCebolla;
	let contadorRellena;
	let acumuladorRellena;
	let promedioRellena;
	let precioCompraBarata;
	let nombreCompraBarata;
	let totalRecaudacion;
	let respuesta = true;
	let bandera = false;

	precioCompraBarata = 0;
	totalRecaudacion = 0;
	acumuladorCebolla = 0;
	acumuladorMuzza = 0;
	acumuladorRellena = 0;
	contadorCebolla = 0;
	contadorMuzza = 0;
	contadorRellena = 0;
	contadorPizzaMuzzaCebolla =0;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");
		edad = prompt("Ingrese edad");
		tipoPizza = prompt("Ingrese tipo de pizza");
		while(tipoPizza != "muzza" && tipoPizza != "cebolla" && tipoPizza != "rellena")
		{
			tipoPizza = prompt("Ingrese tipo de pizza");
		}
		precioTotal = prompt("Ingrese precio total del pedido");
		precioTotal = parseInt(precioTotal);

		if(edad > 25 && tipoPizza == "cebolla" || tipoPizza == "muzza")
		{
			contadorPizzaMuzzaCebolla++;
		}

		switch (tipoPizza)
		{
			case "muzza":
				contadorMuzza++;
				acumuladorMuzza = acumuladorMuzza + precioTotal;
				break;
			case "cebolla":
				contadorCebolla++;
				acumuladorCebolla = acumuladorCebolla + precioTotal;
				break;
			case "rellena":
				contadorRellena++;
				acumuladorRellena = acumuladorRellena + precioTotal;
				break;
		}

		if(bandera == false || precioTotal < precioCompraBarata)
		{
			precioCompreBarata = precioTotal;
			nombreCompraBarata = nombre;
			bandera = true;
		}

		totalRecaudacion = totalRecaudacion + precioTotal;

		respuesta = confirm("Desea ingresar otra venta?");
	}

	promedioCebolla = acumuladorCebolla / contadorCebolla;
	promedioMuzza = acumuladorMuzza / contadorMuzza;
	promedioRellena = acumuladorRellena / acumuladorRellena;

	
	document.write("a) La cantidad de personas cuya edad supere los 25 años, que hayan comprado una pizza de muzza o cebolla" + contadorPizzaMuzzaCebolla + "<br>");
	document.write("b) Cuál fue el promedio de precios por tipo de pizza: -Cebolla: $" + promedioCebolla + " -Muzza: $" + promedioMuzza + " -Rellena: $" + promedioRellena + "<br>");
	document.write("c) El nombre de la persona que realizó la compra más barata: " + nombreCompraBarata + "<br>");
	document.write("d) Total de dinero que recaudó la pizzeria: " + totalRecaudacion + "<br>");

}//FIN DE LA FUNCIÓN