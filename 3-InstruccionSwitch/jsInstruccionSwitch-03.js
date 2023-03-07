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
C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15% sobre este total 
 (este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor.
D) Para incentivar el libre comercio con los países del MERCOSUR, si el total facturado de bultos provenientes de Uruguay, 
 supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total.

*/


function mostrar()
{
	let cantidadDeBultos;
	let pesoPorBulto;
	let lugardeOrigen;
	let tarifaregular = 300;
	let tarifaEspecial = 500;
	let tarifaaPagar;
	let totalFactutado = 0;
	let acumuladorColombia = 0;
	let acumuladorMexico = 0;
	let precioBrutoMexico = 0;
	let acumuladorUruguay = 0;
	let totalPagarUruguay = 0;
	let porcentajeColombia;
	let totalPagarUruguaydescuento;
	let respuesta = true;

	while(respuesta == true)
	{

		cantidadDeBultos = prompt("Cantidad de bultos");
		cantidadDeBultos = parseInt(cantidadDeBultos);
		while(cantidadDeBultos<1)
		{
			cantidadDeBultos = prompt("Cantidad de bultos");
			cantidadDeBultos = parseInt(cantidadDeBultos);
		}
		pesoPorBulto = prompt("peso por bulto");
		pesoPorBulto = parseFloat(pesoPorBulto);
		while(pesoPorBulto > 1500 || pesoPorBulto < 1)
		{
			pesoPorBulto = prompt("peso por bulto");
			pesoPorBulto = parseFloat(pesoPorBulto);
		}

//------------------------------------------------------------------------------------------
		if(pesoPorBulto > 300)
		{
			tarifaaPagar = tarifaEspecial * cantidadDeBultos;
		}
		else
		{
			tarifaaPagar = tarifaregular * cantidadDeBultos;
		}
		totalFactutado = totalFactutado + tarifaaPagar;

		switch(origin)
		{
			case "Mexico":
				acumuladorMexico = acumuladorMexico + cantidadDeBultos;
				precioBrutoMexico = precioBrutoMexico + tarifaaPagar;
				break;
			case "Uruguay":
				acumuladorUruguay = acumuladorUruguay + cantidadDeBultos;
				totalPagarUruguay = totalPagarUruguay = tarifaaPagar;
				break;
			case "Colombia":
				acumuladorColombia = acumuladorColombia + cantidadDeBultos;
		}

		respuesta = confirm("Desea ingresar otro bulto?");
	}

	if(totalPagarUruguay > 15000000)
	{
		totalPagarUruguaydescuento = totalPagarUruguay - totalPagarUruguay *0.05;
		totalFactutado = totalFactutado - totalPagarUruguaydescuento;
	}

	porcentajeColombia = acumuladorColombia /(acumuladorColombia + acumuladorMexico + acumuladorUruguay) *100;
	precioBrutoMexico = precioBrutoMexico *1.15;

	document.write("A) Total facturado: $" + totalFactutado + "<br>");
	document.write("B) Porcentaje de bultos ingresados desde Colombia: " + porcentajeColombia + "<br>");
	document.write("C) Sobre el total facturado de bultos provenientes de México, la empresa deberá pagar un canon del 15%: " + precioBrutoMexico + "<br>");
	document.write("D) si el bulto es de uruguay y excede los 15000000, se le devuelve el %5. Total a pagar: " + totalFactutado + "<br>");

	
}//FIN DE LA FUNCIÓN
