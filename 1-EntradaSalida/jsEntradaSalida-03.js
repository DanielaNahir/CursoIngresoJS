/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre = document.getElementById("txtIdNombre").value;

    //nombre = txtIdNombre.value   -no es la programacion estandar pero funciona

	alert(nombre);

	document.getElementById("txtIdNombre").value = "";
}

