function mostrar()
{
	let numeroRandom;

	numeroRandom = Math.floor((Math.random() * 10) + 1);

	if (numeroRandom > 8)
	{
		alert("Nota: " + numeroRandom + "\n" + "EXCELENTE");
	}
	else
	{
		if (numeroRandom > 3)
		{
			alert("Nota: " + numeroRandom + "\n" + "APROBÓ");
		}
		else
		{
			alert("Nota: " + numeroRandom + "\n" + "Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN