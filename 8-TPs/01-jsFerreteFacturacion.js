/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;

    alert("La suma es igual a $" + suma.toFixed(2));
    
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    resultado = suma /3;

    alert("El promedio es de $" + resultado.toFixed(2));

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    //iva = suma *21 /100;
    //resultado = suma + iva;
    resultado = suma *1.21;

    alert("El precio final es de $" + resultado.toFixed(2));
    //.toFixed() = redondear el resultado a ciertacantidad de sifras detras del punto

}