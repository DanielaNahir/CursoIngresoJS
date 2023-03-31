/*
Ejercicio 1
Apellido:
Nombre:
Comision:
Tutor:


"UTN-Gob realiza un censo en un barrio privado, se pregunta por:  nombre, genero (F/M/NB), edad, estado civil
(1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos).
Informar:

- Cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años.
- Porcentaje de habitantes de genero No Binario.
- Edad promedio de solteros mayores a 18.
- Nombre de la persona mas vieja."*/


function mostrarAumento()
{
    let respuesta = true;
    let nombre;
    let genero;
    let edad;
    let estadoCivil;
    let contadorSolteroViudo =0;
    let contadorNoBinarios = 0;
    let contadorHabitantes = 0;
    let porcentajeNoBinarios;
    let contadorSolteroMayores = 0;
    let acumuladorEdadSolteroMayores = 0;
    let promedioEdadSolteroMayores;
    let edadMasVieja;
    let nombreEdadMasVieja;


    while(respuesta == true)
    {
        nombre = prompt("Ingrese el nombre");
        genero = prompt("Ingrese el genero (F/M/NB)");
        while(genero != "F" && genero != "M" && genero != "NB")
        {
            genero = prompt("Ingrese el genero (F/M/NB)");
        }
        edad = prompt("Ingrese edad");
        edad = parseInt(edad);
        while(edad < 0)
        {
            edad = prompt("Ingrese edad");
            edad = parseInt(edad);
        }
        estadoCivil = prompt("Ingrese estado civil \n(1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos)")
        estadoCivil = parseInt(estadoCivil);
        while(estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4)
        {
            estadoCivil = prompt("Ingrese estado civil \n(1- para soltero, 2- para casados, 3- para divorciados y 4- para viudos)")
            estadoCivil = parseInt(estadoCivil);
        }

        if(genero == "M" && edad > 17 && edad < 34 && estadoCivil == 1 || estadoCivil == 4)
        {
            contadorSolteroViudo++;
        }

        if(genero == "NB")
        {
            contadorNoBinarios++;
        }

        if(estadoCivil == 1 && edad > 17)
        {
            acumuladorEdadSolteroMayores = acumuladorEdadSolteroMayores + edad;
            contadorSolteroMayores++;
        }

        if(contadorHabitantes == 0 || edad > edadMasVieja)
        {
            edadMasVieja = edad;
            nombreEdadMasVieja = nombre;
        }

        contadorHabitantes++;
        respuesta = confirm("Desea egistrar otra persona?");
    }

    porcentajeNoBinarios = contadorNoBinarios / contadorHabitantes * 100;
    
    document.write("Cantidad de ciudadanos solteros o viudos de genero masculino que tengan entre 18 y 33 años: " + contadorSolteroViudo + "<br>");
    document.write("Porcentaje de habitantes de genero No Binario: " + porcentajeNoBinarios + "<br>");

    if(contadorSolteroMayores == 0)
    {
        document.write("No hay soltero mayores" + "<br>");
    }
    else
    {
        promedioEdadSolteroMayores = acumuladorEdadSolteroMayores / contadorSolteroMayores;
        document.write("Edad promedio de solteros mayores a 18." + "<br>");
    }
    
    document.write("Nombre de la persona mas vieja: " + nombreEdadMasVieja + "<br>");
}
