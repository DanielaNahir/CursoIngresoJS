/*
Ejercicio 2
Apellido:
Nombre:
Comision:
Tutor:


"Una empresa de energía eléctrica conocida como “Dejamos sin luz a medio país” nos pide realizar un programa 
para analizar el consumo eléctrico de los 1200 usuarios de un pueblo de la provincia de Buenos Aires.
Para ello, es necesario ingresar de cada uno de los clientes:
Nombre del titular.
DNI del titular (no puede ser negativo ni menor a 2 millones)
Edad (Debe ser mayor de edad)
Género (Masculino - Femenino - Otro)
Consumo eléctrico mensual medido en KWh (No menor a 0 y no mayor a 400).

En base a estos datos se pide informar:
A) El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado.
B) El porcentaje que representa el género femenino del total de clientes.
C) El género que más consumo eléctrico haya tenido EN TOTAL.
D) El promedio de consumo eléctrico de las personas mayores a 60 años. 
"*/
function mostrar()
{
    let respuesta = true;
    let nombreTitular;
    let dniTitular;
    let edad;
    let genero;
    let consumoElectrico;
    let contador = 0;
    let usuarioMasculinoMasConsumo;
    let maximoConsumoUsuarioMasculino;
    let contadorClienteFemeninos = 0;
    let porcentajeClienteFemeninos;
    let generoMayorConsumo;
    let acumuladorConsumoFemenino = 0;
    let acumuladorConsumoMasculino = 0;
    let acumuladorConsumoOtro = 0;
    let acumuladorConsumoMayores60 = 0;
    let contadorClienteMayores60 = 0;
    let promedioConsumoMAYORES60;
    let bandera = false;

    while(contador < 1200)
    {
        nombreTitular = prompt("Ingrese nombre");
        dniTitular = prompt("Ingrese DNI");
        dniTitular = parseInt(dniTitular);
        while(dniTitular < 2000000)
        {
            dniTitular = prompt("Ingrese un DNI correcto");
            dniTitular = parseInt(dniTitular);
        }
        edad = prompt("Ingrese edad");
        edad = parseInt(edad);
        while(edad < 18)
        {
            edad = prompt("Ingrese una edad correcta");
            edad = parseInt(edad);
        }
        genero = prompt("Ingrese genero");
        while(genero != "femenino" && genero != "masculino" && genero != "otro")
        {
            genero = prompt("Ingrese un genero correcto");
        }
        consumoElectrico = prompt("Ingrese el consumo electrico");
        consumoElectrico = parseFloat(consumoElectrico);
        while(consumoElectrico < 0 && consumoElectrico > 400)
        {
            consumoElectrico = prompt("Ingrese un consumo electrico correcto");
            consumoElectrico = parseFloat(consumoElectrico);
        }
        
        switch(genero)
        {
            case "femenino":
                acumuladorConsumoFemenino = acumuladorConsumoFemenino + consumoElectrico;
                contadorClienteFemeninos++;
                break;
            case "masculino":
                acumuladorConsumoMasculino = acumuladorConsumoMasculino + consumoElectrico;
                if( bandera == false || consumoElectrico > maximoConsumoUsuarioMasculino)
                {
                    maximoConsumoUsuarioMasculino = consumoElectrico;
                    usuarioMasculinoMasConsumo = nombreTitular;
                    bandera = true;
                }
                break;
            case "otro":
                acumuladorConsumoOtro = acumuladorConsumoOtro + consumoElectrico;
                break;
        }

        if(edad > 60)
        {
            acumuladorConsumoMayores60 = acumuladorConsumoMayores60 + consumoElectrico;
            contadorClienteMayores60++;
        }

        contador++;
    }
    
    if(acumuladorConsumoMasculino = 0)
    {
        document.write("A) no hay clientes masculinos" + "<br>");

    }
    else
    {
        document.write("A) El usuario de género masculino y menor de 30 años que más consumo eléctrico haya alcanzado: " + usuarioMasculinoMasConsumo + "<br>");
    }

    porcentajeClienteFemeninos = contadorClienteFemeninos / contador *100;
    
    document.write("B) El porcentaje que representa el género femenino del total de clientes: %" + porcentajeClienteFemeninos + "<br>");

    if( acumuladorConsumoFemenino > acumuladorConsumoMasculino && acumuladorConsumoFemenino > acumuladorConsumoOtro)
    {
        generoMayorConsumo = "Femenino";
    }
    else
    {
        if( acumuladorConsumoMasculino > acumuladorConsumoFemenino && acumuladorConsumoMasculino > acumuladorConsumoOtro)
        {
            generoMayorConsumo = "Masculino";
        }
        else
        {
            if( acumuladorConsumoOtro > acumuladorConsumoMasculino && acumuladorConsumoOtro > acumuladorConsumoFemenino)
            {
                generoMayorConsumo = "Otro";
            }
        }
    }

    document.write("C) El género que más consumo eléctrico haya tenido EN TOTAL: " + generoMayorConsumo + "<br>");

    if(contadorClienteMayores60 == 0)
    {
        document.write("D) no hay personas mayores a 60 años" + "<br>");
    }
    else
    {
        promedioConsumoMAYORES60 = acumuladorConsumoMayores60 / contadorClienteMayores60;
        document.write("D) El promedio de consumo eléctrico de las personas mayores a 60 años: " + promedioConsumoMAYORES60 + "<br>");

    }
}
	
