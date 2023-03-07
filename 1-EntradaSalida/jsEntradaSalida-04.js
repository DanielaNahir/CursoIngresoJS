/******************************************************************************
Ejercicio 2

Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al 
siguiente detalle:
PC (“DESKTOP” o “LAPTOP”)
Marca (“DELL”, “HP”, “ACER”)
Modelo
Precio (No puede ser menor a 100.000 pesos)
Informar:
a) El precio de la PC más barata.
b) La cantidad total de PC marca HP del tipo DESKTOP.
c) El promedio del precio de las PC marca ACER.
d) Porcentaje de computadoras de cada marca.
e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
Pedir datos por prompt y mostrar la información por document.write.


*******************************************************************************/
function mostrar()
{
	let pc;
	let marca;
	let modelo;
	let precio;
	let precioPcBarata;
	let contadorHpDesktop;
	let hp;
	let porcentajeHp;
	let dell;
	let porcentajeDell;
	let acer;
	let porcentajeAcer;
	let acumuladorPrecioAcer;
	let promedioAcer;
	let modeloMasCaroDell;
	let precioCaroDell;
	let respuesta;
	let contador;

	respuesta = true;
	precioPcBarata = 0;
	contadorHpDesktop = 0;
	hp = 0;
	dell = 0;
	acer = 0;
	acumuladorPrecioAcer = 0;
	contador = 0;
	precioCaroDell = 0;

	while(respuesta == true)
	{
		pc = prompt("Ingrese tipo de pc");
		while(pc != "desktop" && pc != "laptop")
		{
			pc = prompt("Ingrese tipo correcto de pc");
		}
		marca = prompt("Ingrese marca");
		while(marca != "dell" && marca != "hp" && marca != "acer")
		{
			marca = prompt("Ingrese una marca correcta");
		}
		modelo = prompt("Ingrese modelo");
		precio = prompt("Ingrese precio");
		precio = parseFloat(precio);
		while(precio < 100000)
		{
			precio = prompt("Ingrese precio");
			precio = parseFloat(precio);
		}

		if(contador == 0 || precio < precioPcBarata)
		{
			precioPcBarata = precio;
		}

		if(marca == "hp" && pc == "desktop")
		{
			contadorHpDesktop++;
		}

		switch(marca)
		{
			case "acer":
				acer++;
				acumuladorPrecioAcer = acumuladorPrecioAcer + precio;
				break;
			case "dell":
				dell++;
				if(precio > precioCaroDell)
				{
					modeloMasCaroDell = modelo;
					precioCaroDell = precio;
				}
				break;
			case "hp":
				hp++;
				break;
		}
		
		contador++;
		respuesta = confirm("Desea seguir?");
	}

	porcentajeAcer = acer/contador *100;
	porcentajeDell = dell/contador *100;
	porcentajeHp = hp/contador *100;

	promedioAcer = acumuladorPrecioAcer/acer;

	document.write("a) El precio de la PC más barata: " + precioPcBarata + "<br>");

	if(hp == 0)
	{
		document.write("b) Nose ingreso PC marca HP del tipo DESKTOP: <br>");
	}
	else
	{
		document.write("b) La cantidad total de PC marca HP del tipo DESKTOP: " + contadorHpDesktop + "<br>");
	}

	if(acer == 0)
	{
		document.write("c) No se ingreso PC marca ACER: <br>");
	}
	else
	{
		document.write("c) El promedio del precio de las PC marca ACER: "+ promedioAcer + "<br>");
	}
	document.write("d) Porcentaje de computadoras de cada marca: -Acer: %" + porcentajeAcer + " -Dell: %" + porcentajeDell + " -Hp: %" + porcentajeHp + "<br>");

	if(dell == 0)
	{
		document.write("e) No se ingreso DESKTOP de marca DELL <br>");
	}
	else
	{
		document.write("e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara: " + modeloMasCaroDell + "<br>");
	}
}

