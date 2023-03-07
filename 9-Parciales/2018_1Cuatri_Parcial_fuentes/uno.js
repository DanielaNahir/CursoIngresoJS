/*
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese el ancho del rectangulo");
    ancho = parseFloat(ancho);
    largo = prompt("Ingrese el largo del rectangulo");
    largo = parseFloat(largo);

    perimetro = (largo + ancho) *2;

    alert("El perimetro es de " + perimetro);

}*/

/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.



*******************************************************************************/

function mostrar()
{
    let respuesta;
    let nombre;
    let nacionalidad;
    let posicion;
    let tarjetasRojasrecibidas;
    let contadorJugadores;
    let goles;
    let contadorJugadoresIngleses;
    let goleador;
    let golesDelGoleador;
    let jugadorArgentino;
    let rojasRecibidasArgentinas;
    let porcentajeIngleses;

    respuesta = true;
    contadorJugadoresIngleses = 0;
    contadorJugadores = 0;
    golesDelGoleador = 0;
    rojasRecibidasArgentinas = 0;
    jugadorArgentino = 0;
    

    while(respuesta == true)
    {
        nombre = prompt("Ingrese nombre del jugador");
        nacionalidad = prompt("Ingrese nacionalidad del jugador");
        posicion = prompt("Ingrese la posicion del jugador");
        while(posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero")
        {
            posicion = prompt("Ingrese una posicion correcta");
        }
        tarjetasRojasrecibidas = prompt("Ingrese la cantidad de tarjetas rojas recibidas");
        tarjetasRojasrecibidas = parseInt(tarjetasRojasrecibidas);
        while(tarjetasRojasrecibidas < 0)
        {
            tarjetasRojasrecibidas = prompt("Ingrese la cantidad de tarjetas rojas correcta");
            tarjetasRojasrecibidas = parseInt(tarjetasRojasrecibidas);
        }
        goles = prompt("Ingrese la cantidad de goles anotados");
        goles = parseInt(goles);
        while(goles < 0)
        {
            goles = prompt("Ingrese una cantidad de goles correcta");
            goles = parseInt(goles);
        }

        //A
        if(contadorJugadores == 0 || goles > golesDelGoleador)
        {
            goleador = nombre;
            golesDelGoleador = goles;
        }

        switch(nacionalidad)
        {
            case "argentina": //B
                if(rojasRecibidasArgentinas == 0 || tarjetasRojasrecibidas < rojasRecibidasArgentinas)
                {
                    jugadorArgentino = nombre;
                    rojasRecibidasArgentinas = tarjetasRojasrecibidas;
                }
                break;
            case "inglesa": //C
                contadorJugadoresIngleses++;
                break;
        }
        contadorJugadores++;
        respuesta = confirm("Desea ingresar otro jugador?");
    }

    porcentajeIngleses = contadorJugadoresIngleses / contadorJugadores *100;

    document.write("A- Goleador del torneo: " + goleador + "<br>");

    if(jugadorArgentino == 0)
    {
        document.write("B- No se ingresaron jugadores argentinos <br>");
    }
    else
    {
        document.write("B- Jugador Argentino con menos rojas recibidas: " + jugadorArgentino + "<br>");
    }
    

    if(contadorJugadoresIngleses > 0)
    {
        document.write("C- Porcentaje de jugadores Ingleses de la liga: %" + porcentajeIngleses + "<br>");
    }
    else
    {
        document.write("C- No se ingresaron jugadores ingleses");
    }
    

}