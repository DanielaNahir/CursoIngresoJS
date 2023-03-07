/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
realizar una carga de datos validada e ingresada por ventanas emergentes solamente
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

//Daniela Nuñez DIV D, grupo 1 (clase 8)
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada;

	edadIngresada = prompt("Ingrese su edad:");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Ingrese una edad correcta:");
		edadIngresada = parseInt(edadIngresada);
	}

	sexoIngresado = prompt("Ingrese su sexo:" + "\n" + "(M para masculino o F para femenino)");

	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Ingrese un sexo correcto:" + "\n" + "(M para masculino o F para femenino)");
	}

	estadoCivilIngresado = prompt("Ingrese su estado civil:" + "\n" + "1-para soltero" + "\n" + "2-para casados" + "\n" + "3-para divorciados" + "\n" + "4-para viudos");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt("Ingrese un estado civil correcto:" + "\n" + "1-para soltero" + "\n" + "2-para casados" + "\n" + "3-para divorciados" + "\n" + "4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	sueldoIngresado = prompt("Ingrese su sueldo bruto:");
	sueldoIngresado = parseFloat(sueldoIngresado);

	while(sueldoIngresado < 8000)
	{
		sueldoIngresado = prompt("Ingrese un sueldo bruto correcto:");
		sueldoIngresado = parseFloat(sueldoIngresado);
	}

	legajoIngresado = prompt("Ingrese su numero de legajo:");
	legajoIngresado = parseInt(legajoIngresado);

	while(legajoIngresado < 1000 || legajoIngresado  > 9999 )
	{
		legajoIngresado = prompt("Ingrese un numero de legajo correcto:");
		legajoIngresado = parseInt(legajoIngresado);
	}

	nacionalidadIngresada = prompt("Ingrese su nacionalidad:" + "\n" + "A para argentinos" + "\n" + "E para extranjeros" + "\n" + "N para nacionalizados");

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("Ingrese una nacionalidad correcta:" + "\n" + "A para argentinos" + "\n" + "E para extranjeros" + "\n" + "N para nacionalizados");
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value =  estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoIngresado;
	document.getElementById("txtIdLegajo").value = legajoIngresado;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;

}
