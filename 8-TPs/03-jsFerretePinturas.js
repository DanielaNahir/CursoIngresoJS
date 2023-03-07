/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosFahrenheit;
    let gradosCentigrados;

    gradosFahrenheit = document.getElementById("txtIdTemperatura").value;
    gradosFahrenheit = parseFloat(gradosFahrenheit);
    
    gradosCentigrados = (gradosFahrenheit - 32) /1.8;

    alert(gradosFahrenheit + " grados fahrenheit equivalen a " + gradosCentigrados.toFixed(1) + " grados centigrados");

}

function CentigradosFahrenheit () 
{
	let gradosCentigrados;
    let gradosFahrenheit;

    gradosCentigrados = document.getElementById("txtIdTemperatura").value;
    gradosCentigrados = parseFloat(gradosCent);

    gradosFahrenheit = (gradosCentigrados *1.8) +32;

    alert(gradosCentigrados + " grados centigrados equivalen a " + gradosFahrenheit.toFixed(1) + " grados fahrenheit");

}
