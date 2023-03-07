/******************************************************************************
Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro 
de la venta diaria de cafés, medialunas y churros.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente
Tipo de producto (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el tipo de producto con más unidades vendidas.
c) De la venta con más unidades el nombre del cliente y el tipo de producto.
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.


Tener en cuenta:
Si se compran más de dos docenas de medialunas/churros por ejemplo. El descuento del 30% se sigue aplicando, eso aplica para cualquier otro caso similar.
Por cada venta que se hace se ingresa un sólo tipo de producto (café o medialunas o churros)

*******************************************************************************/
function mostrar()
{	
	let nombreCliente;
	let tipoProducto;
	let cantidadProducto;
	let precioBaseCafe = 100;
	let precioBaseMedialunas = 60;
	let precioBaseChurros = 50;
	let respuesta = true;
	let totalMedialunas;
	let totalChurro;
	let totalCafe;
	let masUnidades;
	let precioPorCompra;
	let precioFinal;
	let precioFinalTotal;
	let tipoProductoMasVentas;
	let mayorCantidadProducto;
	let clienteMayorCompra;
	let bandera = false;
	
	totalMedialunas = 0;
	totalCafe = 0;
	totalChurro = 0;
	precioFinalTotal = 0;
	mayorCantidadProducto = 0;

	while(respuesta == true)
	{
		nombreCliente = prompt("Ingrese nombre del cliente");
		tipoProducto = prompt("Ingrese tipo de producto");
		while(tipoProducto != "cafe" && tipoProducto != "medialuna" && tipoProducto != "churro")
		{
			tipoProducto = prompt("Ingrese tipo de producto correcto");
		}
		cantidadProducto = prompt("Ingrese la cantidad de producto");
		cantidadProducto = parseInt(cantidadProducto);

		switch(tipoProducto)
		{
			case "medialuna":
				totalMedialunas = totalMedialunas + cantidadProducto;
				precioPorCompra = precioBaseMedialunas * cantidadProducto;

				if(cantidadProducto >23)
				{
					precioFinal = precioPorCompra - precioPorCompra *0.3;
				}
				else
				{
					switch(cantidadProducto)
					{
						case 12:
							precioFinal = precioPorCompra - precioPorCompra *0.2;
							break;
						case 10:
							precioFinal = precioPorCompra - precioPorCompra *0.1;
							break;
						case 5:
							precioFinal = precioPorCompra - precioPorCompra *0.05;
							break;
						default:
							precioFinal = precioPorCompra;
					}
				}
				break;
			case "cafe":
				totalCafe = totalCafe + cantidadProducto;
				precioPorCompra = precioBaseCafe * cantidadProducto;
				break;
			case "churro":
				totalChurro = totalChurro + cantidadProducto;
				precioPorCompra = precioBaseChurros* cantidadProducto;

				if(cantidadProducto >23)
				{
					precioFinal = precioPorCompra - precioPorCompra *0.3;
				}
				else
				{
					switch(cantidadProducto)
					{
						case 12:
							precioFinal = precioPorCompra - precioPorCompra *0.2;
							break;
						case 10:
							precioFinal = precioPorCompra - precioPorCompra *0.1;
							break;
						case 5:
							precioFinal = precioPorCompra - precioPorCompra *0.05;
							break;
						default:
							precioFinal = precioPorCompra;
					}
				}
				break;
		}

		if(bandera == false || cantidadProducto > mayorCantidadProducto)
		{
			mayorCantidadProducto = cantidadProducto;
			tipoProductoMasVentas = tipoProducto;
			clienteMayorCompra = nombreCliente;

			bandera = true;
		}

		precioFinalTotal = precioFinalTotal + precioFinal;

		respuesta = confirm("Desea registrar otra compra?")
	}

	

	if(totalMedialunas == 0)
	{
		document.write("a) no se compraron medialunas<br>");
	}
	else
	{
		document.write("a) Cuantas Medialunas se compraron durante toda la jornada: " + totalMedialunas + "<br>");
	}

	if(totalMedialunas > totalCafe && totalMedialunas > totalChurro)
	{
			masUnidades = "Medialunas";
	}
	else
	{
		if(totalCafe > totalChurro && totalCafe > totalMedialunas)
		{
			masUnidades = "Cafe";
		}
		else
		{
			if(totalChurro > totalCafe && totalChurro > totalMedialunas)
			{
				masUnidades = "Churro";
			}
		}
	}
	document.write("b) Cuál fue el tipo de producto con más unidades vendidas: " + masUnidades + "<br>");
	document.write("c) De la venta con más unidades el nombre del cliente y el tipo de producto: -Cliente: " + clienteMayorCompra + " -Tipo de producto: " + tipoProductoMasVentas + "<br>");	

	if(precioFinalTotal > 1300)
	{
		precioFinalTotal = precioFinalTotal *1.20;

		document.write("d) Excedio el monto de $1300 se suma un 20% de impuestos: " + precioFinalTotal + "<br>");
	}
	else
	{
		document.write("d) No se excedio del monto $1300 asi que no se aplican impuestos, precio final: " + precioFinalTotal + "<br>");
	}
}

