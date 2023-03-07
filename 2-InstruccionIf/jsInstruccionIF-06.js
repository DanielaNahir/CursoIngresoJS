/*
Ejercicio 3:

Apellido:
Nombre:
Comisión:
Tutor:

"Un cliente de ""Gonzi-Expres"" desea agregar a su carrito de compras (no sabemos cuantos productos son).
Para ello se ingresa:
- Nombre del producto
- Precio (EN USD)
- Origen (EEUU, China, España)
Por cada producto proveniente de CHINA se agregará al precio del mismo un 5%, debido al impuesto de productos Electronicos provenientes de ese pais.
Si el importe final de todos los productos comprados supera los 50 usd tendrá que pagar un 50% de impuestos por la importación de los mismos.
Por ejemplo ""Si gaste 45 usd en total sólo pago 45, pero si gaste 100 usd tengo que pagar 150""
Como la compra es en dolares, al total de la misma se le deberá agregar el impuesto pais del 35%.
A) Mostrar el total a pagar en pesos (1DOLAR oficial = $205)
B) Cual es el total a pagar, pero solo de productos provenientes de EEUU.
C) El nombre del producto mas caro, de origen Español.
D) Cantidad de productos cuyo precio este entre USD 5 y USD 15 (incluyendo impuestos), provenientes de China o EEUU"
*/

function mostrar()
{
	let nombreProducto;
	let precio;
	let origen;
	let AUMENTO_CHINA = 1.05;
	let AUMENTO_IMPORTACION = 1.5;
	let IMPUESTO_PAIS = 1.35;
	let precioFinal;
	let acumuladorPrecioEEUU = 0;
	let totalEnPesos;
	let precioProductoMasCaro;
	let nombreProductoMasCaro;
	let bandera = false;
	let contadorProductosChinaEEUU = 0;
	let acumuladorPrecioTotal = 0;
	let respuesta = true;

	while(respuesta == true)
	{
		nombreProducto = prompt("Ingrese nombre del producto");
		precio = prompt("Ingrese precio (en USD)");
		precio = parseFloat(precio);
		while(precio < 1)
		{
			precio = prompt("Ingrese precio (en USD)");
			precio = parseFloat(precio);
		}
		origen = prompt("Ingrese el origen del producto");
		while(origen != "eeuu" && origen != "china" && origen != "españa")
		{
			origen = prompt("Ingrese el origen del producto");
		}

		switch(origen)
		{
			case "china":
				precio = precio * AUMENTO_CHINA;
				if(precio > 4 && precio < 16)
				{
					contadorProductosChinaEEUU++;
				}
				break;
				case "eeuu":
					acumuladorPrecioEEUU = acumuladorPrecioEEUU + precio;
					if(precio > 4 && precio < 16)
					{
						contadorProductosChinaEEUU++;
					}
					break;
					case "españa":
						if(bandera == false || precio > precioProductoMasCaro)
						{
							precioProductoMasCaro = precio;
							nombreProductoMasCaro = nombreProducto;
						}
						break;

		}

		acumuladorPrecioTotal = acumuladorPrecioTotal + precio;
		respuesta = confirm("Desea registrar otr0 producto?");
	}

	if(acumuladorPrecioTotal > 50)
	{
		precioFinal = acumuladorPrecioTotal * AUMENTO_IMPORTACION * IMPUESTO_PAIS;	
	}
	else
	{
		precioFinal = acumuladorPrecioTotal * IMPUESTO_PAIS;
	}

	totalEnPesos = precioFinal * 205;

	document.write("A) Total a pagar en pesos (1DOLAR oficial = $205): $" + totalEnPesos + "<br>");
	document.write("B) Cual es el total a pagar, pero solo de productos provenientes de EEUU: $" + acumuladorPrecioEEUU + "<br>");
	document.write("C) El nombre del producto mas caro, de origen Español: " + nombreProductoMasCaro + "<br>");
	document.write("D) Cantidad de productos cuyo precio este entre USD 5 y USD 15 provenientes de China o EEUU: " + contadorProductosChinaEEUU + "<br>");

}//FIN DE LA FUNCIÓN