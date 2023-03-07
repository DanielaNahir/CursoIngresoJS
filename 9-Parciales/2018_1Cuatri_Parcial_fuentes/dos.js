/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 
Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.



*******************************************************************************/

function mostrar()
{
    let nombre;
    let edad;
    let tipo;
    let peso;
    let respuesta;
    let diagnostico;
    let vacunaAntirrabica;
    let edadMascotaMasVieja;
    let nombreMascotaMasVieja;
    let contadorSinVacunayconParasitos;
    let mascotaProblemasDigestivos;
    let problemasDigestivoPerros;
    let problemasDigestivoGatos;
    let problemasDigestivoHamsters;
    let mascotaJoven;
    let contadorOtitis;
    let bandera;

    respuesta = true;
    bandera = false;
    edadMascotaMasVieja = 0;
    contadorSinVacunayconParasitos = 0;
    contadorOtitis = 0;
    problemasDigestivoPerros = 0;
    problemasDigestivoGatos= 0;
    problemasDigestivoHamsters = 0;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese nombre de la moscota");
        edad = prompt("Ingrese la edad de la mascota");
        edad = parseInt(edad);
        while(edad < 1 || edad > 20)
        {
            edad = prompt("Ingrese una edad correcta");
            edad = parseInt(edad);
        }
        tipo = prompt("Ingrese la especie de la mascota");
        while(tipo != "gato" && tipo != "perro" && tipo != "hamster")
        {
            tipo = prompt("Ingrese una especie correcta");
        }
        peso = prompt("Ingrese el peso de la mascota");
        while(peso < 1)
        {
            peso = prompt("Ingrese un peso correcto");
        }
        diagnostico = prompt("Ingrese diagnostico");
        while(diagnostico != "problemas digestivos" && diagnostico != "otitis" && diagnostico != "alergias en la piel" && diagnostico != "parasitos" && diagnostico != "picazon de abeja")
        {
            diagnostico = prompt("Ingrese un diagnostico correcto");
        }
        vacunaAntirrabica = prompt("Recibio la vacuna antirrabica? \nsi o no");
        while(vacunaAntirrabica != "si" && vacunaAntirrabica != "no")
        {
            vacunaAntirrabica = prompt("Ingrese una respuesta correcta \nRecibio la vacuna antirrabica? \nsi o no");
        }

        //A
        if(bandera = false || edad > edadMascotaMasVieja)
        {
            nombreMascotaMasVieja = nombre;
            edadMascotaMasVieja = edad;
        }
        
        //B
        if(vacunaAntirrabica == "no" && diagnostico == "parasitos")
        {
            contadorSinVacunayconParasitos++;
        }

        //C
        switch(diagnostico)
        {
            case "problemas digastivos":
                if(tipo == "perro")
                {
                    problemasDigestivoPerros++;
                }
                else
                {
                    if(tipo == "gato")
                    {
                        problemasDigestivoGatos++;
                    }
                    else
                    {
                        problemasDigestivoHamsters++;
                    }
                }
        }

        //E
        if(tipo == "perro" && diagnostico == "otitis")
        {
            contadorOtitis++;
        }


    }

    if(problemasDigestivoGatos > problemasDigestivoHamsters && problemasDigestivoGatos > problemasDigestivoPerros)
    {
        mascotaProblemasDigestivos = "gatos";
    }
    else
    {
        if(problemasDigestivoHamsters > problemasDigestivoGatos && problemasDigestivoHamsters > problemasDigestivoPerros)
        {
            mascotaProblemasDigestivos = "hamsters";
        }
        else
        {
            
        }
    }
}
