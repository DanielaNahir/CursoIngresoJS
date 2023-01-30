/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    // creo la varible y guardo el texto introducido en el prompt 
    let nombre = prompt("Ingrese su nombre:");
    
	//le asigno al ID el nombre introducido en la pagina 
	document.getElementById("txtIdNombre").value = nombre;
    
	alert(txtIdNombre.value);

}

