/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	
	let contador;
	let tipoDeProducto;
	let precio;
	let cantidadDeUnidades;
	let marca;
	let fabricante;
	let fabricanteAlcohol;
	let unidadesDeAlcohol;
	let acumuladorDeJabones;
	let acumuladorDeAlcohol;
	let acumuladorDeBarbijo;
	let mayorCantidadUnidades;
	let tipoConMasUnidades;
	let promedio;
	let contadorBabijos;
	let contadorJabones;
	let contadorAlcohol;

	contador = 0;
	acumuladorDeJabones = 0;
	acumuladorDeAlcohol = 0;
	acumuladorDeBarbijo = 0;
	contadorBabijos = 0;
	contadorAlcohol = 0;
	contadorJabones = 0;

	while(contador < 5)
	{
		//pido tipo
		tipoDeProducto = prompt("Ingrese tipo de producto \n(barbijo, jabon o alcohol)");
		//valido tipo
		while(tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" &&tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt("Ingrese tipo de producto valido \n(barbijo, jabon o alcohol)");
		}

		//pido precio
		precio = prompt("Ingrese un precio \n(entre 100 y 300)");
		precio = parseFloat(precio);
		//valido precio
		while(precio < 100 || precio > 300)
		{
			precio = prompt("Ingrese un precio valido \n(entre 100 y 300)");
			precio = parseFloat(precio);
		}

		//pido cantidad
		cantidadDeUnidades = prompt("Ingrese la cantidad de productos");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		//valido cantidad
		while(cantidadDeUnidades > 1000 || cantidadDeUnidades < 1)
		{
			cantidadDeUnidades = prompt("Ingrese una cantidad de productos correcta \n(entre 1 y 1000)");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}

		//pido marca
		marca = prompt("Ingrese la marca");
		//pido fabricante
		fabricante = prompt("Ingrese nombre del fabricante");

		//A
		if(tipoDeProducto == "alcohol")
		{
			if(contadorAlcohol == 0 || precio < precioAlcoholBarato)
			{
				precioAlcoholBarato = precio;
				fabricanteAlcohol = fabricante;
				unidadesDeAlcohol = cantidadDeUnidades;
			}
			acumuladorDeAlcohol = acumuladorDeAlcohol + cantidadDeUnidades;
			contadorAlcohol++;

		}
		else 
		{
			if(tipoDeProducto == "jabon") //C
			{
				acumuladorDeJabones = cantidadDeJabones + cantidadDeUnidades;
				contadorJabones++;
			}
			else
			{
				acumuladorDeBarbijo = acumuladorDeBarbijo + cantidadDeUnidades;
				contadorBabijos++;
			}
		}
		contador++;
	}

	if(acumuladorDeAlcohol > acumuladorDeBarbijo && acumuladorDeAlcohol > acumuladorDeJabones)
	{
		tipoConMasUnidades = "Alcohol";
		promedio = acumuladorDeAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorDeBarbijo > acumuladorDeAlcohol && acumuladorDeBarbijo > acumuladorDeJabones)
		{
			tipoConMasUnidades = "Barbijo";
			promedio = acumuladorDeBarbijo / contadorBabijos;
		}
		else
		{
			if(acumuladorDeJabones > acumuladorDeAlcohol && acumuladorDeJabones > acumuladorDeBarbijo)
			{
				tipoConMasUnidades = "Jabon";
				promedio = acumuladorDeJabones/ contador;
			}
		}
	}

	if(contadorAlcohol > 0)
	{
		document.write("A- El alcohol mas barato sale: $" + precioAlcoholBarato + "<br>Cantidad de unidades: " + unidadesDeAlcohol + "<br>Fabricante: " + fabricanteAlcohol + "<br>");
	}
	else
	{
		document.write("A- No se ingreso alcohol <br>");

	}
	
	document.write("B- Tipo con mas unidades es: " + tipoConMasUnidades + " con un promedio de: " + promedio + "<br>");

	if(cantidadDeJabones > 0)
	{
		document.write("C- La cantidad de jabones es de " + acumuladorDeJabones + "<br>");
	}
	else
	{
		document.write("C- No se ingresaron jabones");

	}


}

