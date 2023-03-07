function mostrar()
{
    let precio;
    let descuento;
    let precioConDescuento;

    precio = prompt("Ingrese el precio");
    precio = parseFloat(precio);
    descuento = prompt("Ingrese el porcentaje")
    descuento = parseFloat(descuento);

    precioConDescuento = precio * descuento /100;

    document.getElementById("elPrecioFinal").value = precioConDescuento;

}
