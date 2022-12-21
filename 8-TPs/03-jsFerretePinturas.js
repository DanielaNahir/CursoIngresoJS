/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahr = parseFloat(document.getElementById("txtIdTemperatura").value);
    let cent = (fahr - 32) /1.8;

    alert(fahr + " grados fahrenheit equivalen a " + cent.toFixed(1) + " grados centigrados");

}

function CentigradosFahrenheit () 
{
	let cent = parseFloat(document.getElementById("txtIdTemperatura").value);
    let fahr = (cent + 32) *1.8;

    alert(cent + " grados centigrados equivalen a " + fahr.toFixed(1) + " grados fahrenheit");

}
