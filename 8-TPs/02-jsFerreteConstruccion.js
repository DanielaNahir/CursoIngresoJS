/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro = (largo + ancho) *2; 
    let alambre = perimetro *3;

    alert("Se necesitan " + alambre + "m de alambre");

}
function Circulo () 
{
    let radio = parseFloat(document.getElementById("txtIdRadio").value);
    const PI = 3.14;    
    let perimetro = 2 *PI *radio;
    let alambre = perimetro *3;

    alert("Se necesitan " + alambre + "m de alambre");


}
function Materiales () 
{
    let largo = parseFloat(document.getElementById("txtIdLargo").value);
    let ancho = parseFloat(document.getElementById("txtIdAncho").value);
    let area = largo * ancho;
    let cemento = area  *2;
    let cal = area *3;

    alert("Se necesitan un total de " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	
}