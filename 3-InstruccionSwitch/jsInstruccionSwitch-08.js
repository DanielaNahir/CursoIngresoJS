/*
Ejercicio 3:

Apellido:
Nombre:
Comisión:
Tutor:

"Atención AFIP: ""Inspección de Bultos"": La administración federal de ingresos públicos tiene el ojo puesto
sobre una empresa de 
logística que opera en Argentina e importa productos desde  México, Colombia y Uruguay.
Nos piden que realicemos un programa que 
permita controlar los movimientos de dicha empresa: 
De cada pedido que recibe la empresa se conoce: la cantidad de bultos, el peso por bulto
(no debe superar los 1500 kilos), el lugar de origen.
Se establece que la tarifa regular por bulto es de $300 y la tarifa especial
(para pedidos de más de 300 kilos por bulto) es de $500.
La aplicación debe informar a la AFIP:

A) Total facturado
B) Porcentaje de bultos ingresados desde Colombia.
C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15% sobre
este total 
 (este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor.
D) Para incentivar el libre comercio con los países del MERCOSUR, si el total facturado de bultos
provenientes de Uruguay, 
 supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total.

*/
function mostrar()
{
	let cantidadBultos;
	let pesoPorBulto;
	let precioTotal;
	let lugarDeOrigen;
	let tarifaRegular = 300;
	let tarifaEspecial = 500;
	let totalFactutado = 0;
	let acumuladorBultosColombia = 0;
	let acumuladorBultosMexico = 0;
	let acumuladorBultosUruguay = 0;
	let respuesta = true;
	let porcentajeBultosColombia;
	let canonMexico;
	let acumuladorPrecioMexico = 0;
	let totalPagarUruguay = 0;
	let descuentoUruguay;


	while(respuesta == true)
	{
		cantidadBultos = prompt("Ingrese cantidad de bultos");
		cantidadBultos = parseInt(cantidadBultos);
		while(cantidadBultos < 1)
		{
			cantidadBultos = prompt("Ingrese cantidad de bultos");
			cantidadBultos = parseInt(cantidadBultos);
		}
		pesoPorBulto = prompt("Ingrese peso por bulto");
		pesoPorBulto =parseInt(pesoPorBulto);
		while(pesoPorBulto > 1500)
		{
			pesoPorBulto = prompt("Ingrese peso por bulto");
			pesoPorBulto =parseInt(pesoPorBulto);
		}
		lugarDeOrigen = prompt("Ingrese lugar de origen");
		while(lugarDeOrigen != "uruguay" && lugarDeOrigen != "colombia" && lugarDeOrigen != "mexico")
		{
			lugarDeOrigen = prompt("Ingrese lugar de origen");
		}

		if(pesoPorBulto > 300)
		{
			precioTotal = tarifaEspecial * cantidadBultos;
		}
		else
		{
			precioTotal = tarifaRegular * cantidadBultos;
		}

		switch(lugarDeOrigen)
		{
			case "colombia":
				acumuladorBultosColombia = acumuladorBultosColombia + cantidadBultos;
				break;
			case "mexico":
				acumuladorBultosMexico = acumuladorBultosMexico + cantidadBultos;
				acumuladorPrecioMexico = acumuladorPrecioMexico + precioTotal;
				break;
			case "uruguay":
				acumuladorBultosUruguay = acumuladorBultosUruguay + cantidadBultos;
				totalPagarUruguay = totalPagarUruguay + precioTotal;
				break;
		}

		totalFactutado = totalFactutado + precioTotal;
		respuesta = confirm("Desea ingresar otra operacion?");
	}

	porcentajeBultosColombia = acumuladorBultosColombia / (acumuladorBultosColombia + acumuladorBultosMexico + acumuladorBultosUruguay) *100;

	canonMexico = acumuladorPrecioMexico * 0.15;
		
	document.write("A) Total facturado: $"+ totalFactutado + "<br>");
	document.write("B) Porcentaje de bultos ingresados desde Colombia: "+ porcentajeBultosColombia + "<br>");
	document.write("C) Canon de 15% en bultos de mexico: " + canonMexico + "<br>");

	if(totalPagarUruguay > 15000000)
	{
		descuentoUruguay = totalPagarUruguay * 0.05;
		document.write("D) Devolucion del 5% en bultos de uruguay: " + descuentoUruguay + "<br>");
	}
	else
	{
		document.write("D) No se hizo ninguna devolucion" + "<br>");
	}
	
	
}//FIN DE LA FUNCIÓN