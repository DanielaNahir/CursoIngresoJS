function mostrar()
{
	let edad;
	let estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	else
	{
		if(edad < 18 && estadoCivil != "Soltero")
		{
		alert("Es muy pequeño para NO ser soltero");
		}
	}
}//FIN DE LA FUNCIÓN