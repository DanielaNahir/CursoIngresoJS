/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena. x
d) Porcentaje disponible de cada bodega.X

*******************************************************************************/

function mostrar()
{
	let respuesta;
	let bodega;
	let producto;
	let nuevoPesoEnBodega;
	let productoConMasPeso;
	let bodegaConMasIngresos;
	let ingresosAvellaneda; 
	let ingresosCaba;
	let ingresosLanus;
	let bodegaMasLlena;
	let porcentajeAvellaneda;
	let porcentajeCaba;
	let porcentajeLanus;
	let pesoAvellaneda;
	let pesoCaba;
	let pesoLanus;

	respuesta = true;
	pesoAvellaneda;
	pesoCaba = 0;
	pesoLanus = 0;
	ingresosAvellaneda = 0; 
	ingresosCaba = 0;
	ingresosLanus = 0;

	while(respuesta == true)
	{
		bodega = prompt("Ingrese el deposito en el que quiere almacenar");
		while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus")
		{
			prompt("Ingrese un deposito correcto");
		}

		producto = prompt("Ingrese el tipo de producto");
		nuevoPesoEnBodega = prompt("Ingrese el peso que sera ingresado a la bodega");
		nuevoPesoEnBodega = parseInt(nuevoPesoEnBodega);

		switch(bodega)
		{
			case "avellaneda":
				pesoAvellaneda = pesoAvellaneda + nuevoPesoEnBodega;
				ingresosAvellaneda++;
				break;
			case "caba":
				pesoCaba = pesoCaba + nuevoPesoEnBodega;
				ingresosCaba++;
				break;
			case "lanus":
				pesoLanus = pesoLanus + nuevoPesoEnBodega;
				ingresosLanus++;
				break;
		}
	}

	if(pesoAvellaneda > pesoCaba && pesoAvellaneda > pesoLanus)
	{
		bodegaMasLlena = "Avellaneda";
	}
	else
	{
		if(pesoCaba > pesoAvellaneda && pesoCaba > pesoLanus)
		{
			bodegaMasLlena = "CABA";
		}
		else
		{
			if(pesoLanus > pesoAvellaneda && pesoLanus > pesoCaba)
			{
				bodegaMasLlena = "Lanus";
			}
		}
	}

	if(ingresosAvellaneda > ingresosCaba && ingresosAvellaneda > ingresosLanus)
	{
		bodegaConMasIngresos = "Avellaneda";	
	}
	else
	{
		if(ingresosCaba > ingresosAvellaneda && ingresosCaba > ingresosLanus)
		{
			bodegaConMasIngresos = "CABA";
		}
		else
		{
			if(ingresosLanus > ingresosCaba && ingresosLanus > ingresosAvellaneda)
			{
				bodegaConMasIngresos = "Lanus";
			}
		}
	}
	porcentajeAvellaneda = pesoAvellaneda /20.000 *100;
	porcentajeCaba = pesoCaba /25.000 *100;
	porcentajeLanus = pesoLanus /15.000 *100;

	document.write("B- Bodega con mas ingresos: "+ bodegaConMasIngresos + "<br>");
	document.write("C- Bodega mas llena: " + bodegaMasLlena + "<br>");
	document.write("D- Porcentaje disponible de cada bodega: -Avellaneda: %" + porcentajeAvellaneda + " -CABA: %" + porcentajeCaba + "-Lanus: %" + porcentajeLanus + "<br>");

}