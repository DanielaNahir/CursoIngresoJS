/*
Ejercicio 3
Apellido:
Nombre:
Comision:
Tutor:

"Se nos solicita desarrollar un programa para llevar registro de las ventas y compras en una tienda electrónica. 
Para ello, se solicitará al usuario la siguiente información para cada transacción:

Nombre del cliente
Tipo de transacción (vende o compra)
Precio de la publicación
Tipo de producto (teléfono, tablet o tv)
Para las ventas, se aplicará un 15% en concepto de comisiones de la compañia. Para las compras de tablets, a partir 
de los $10000, se aplicará un descuento del 5%.

 Se deberá mostrar:

A) Dinero total en concepto de compras.
B) Precio promedio de las ventas de tv
C) Total de comisiones recaudadas.
"*/

function mostrarAumento()
{
    let respuesta = true;
    let nombreCliente;
    let tipoTransaccion;
    let precioPublicacion;
    let tipoProducto;
    let comicionCompañia = 0.15;
    let descuentoTablets = 0.05;
    let precioFinalProducto;
    let acumuladorTotalDineroCompras = 0;
    let acumuladorPrecioVentasTv = 0;
    let contadorVentasTv = 0;
    let promedioVentasTv;
    let totalComisionesRecaudadas = 0;

    while(respuesta == true)
    {
        nombreCliente = prompt("Ingrese nombre cliente");
        tipoTransaccion = prompt("Ingrese tipo de transaccion");
        while(tipoTransaccion != "vende" && tipoTransaccion != "compra")
        {
            tipoTransaccion = prompt("Ingrese tipo correcto de transaccion");
        }
        precioPublicacion = prompt("Ingrese precio de publicacion");
        precioPublicacion = parseFloat(precioPublicacion);
        while(precioPublicacion < 1)
        {
            precioPublicacion = prompt("Ingrese precio correcto de la publicacion");
            precioPublicacion = parseFloat(precioPublicacion);
        }
        tipoProducto = prompt("Ingrese tipo de producto");
        while(tipoProducto != "telefono" && tipoProducto != "tablet" && tipoProducto != "tv" )
        {
            tipoProducto = prompt("Ingrese tipo correcto de producto");
        }

        switch(tipoTransaccion)
        {
            case "compra":

                if(tipoProducto == "tablet" && precioPublicacion > 10000)
                {
                    precioFinalProducto = precioPublicacion - precioPublicacion * descuentoTablets;
                }
                else
                {
                    precioFinalProducto = precioPublicacion;
                }
                acumuladorTotalDineroCompras = acumuladorTotalDineroCompras + precioFinalProducto;
                break;
            case "vende":
                totalComisionesRecaudadas = totalComisionesRecaudadas + precioPublicacion * comicionCompañia;
        }

        if(tipoTransaccion == "vende" && tipoProducto == "tv")
        {
            acumuladorPrecioVentasTv = acumuladorPrecioVentasTv + precioPublicacion;
            contadorVentasTv++;
        }
       
        respuesta = confirm("Desea ?");
    }
    
    document.write("A) Dinero total en concepto de compras: $" + acumuladorTotalDineroCompras + "<br>");

    if(contadorVentasTv == 0)
    {
        document.write("B) no se vendieron TVs" + "<br>");
    }
    else
    {
        promedioVentasTv = acumuladorPrecioVentasTv / contadorVentasTv;
        document.write("B) Precio promedio de las ventas de tv: " + promedioVentasTv + "<br>");
    }
    
    document.write("C) Total de comisiones recaudadas: $" + totalComisionesRecaudadas + "<br>");
}
	
