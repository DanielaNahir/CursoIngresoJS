/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let resultado = precio1 + precio2 + precio3;

    alert("La suma es igual a $" + resultado.toFixed(2));
    
}
function Promedio () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let resultado = (precio1 + precio2 + precio3) /3;

    alert("El promedio es de $" + resultado.toFixed(2));

}
function PrecioFinal () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    let iva = (precio1 + precio2 + precio3) *21 /100;
    let resultado = precio1 + precio2 + precio3 + iva;

    alert("El precio final es de $" + resultado.toFixed(2)); //      toFixed() = redondear el resultado a solo dos sifras detras del punto

}