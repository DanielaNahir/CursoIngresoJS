/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y
si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace
un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si
es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 function CalcularPrecio ()
 {
    let cantidadDeLamparas;
    let marca;
    let precioFinal;
    let precio;
    let aumento;
    let precioConAumento;
    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marca = document.getElementById("Marca").value;

    precio = cantidadDeLamparas * 35;

    switch(cantidadDeLamparas)
    {
        case 5: //B
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioFinal = precio - precio * 0.4;
                    break;
                default:
                    precioFinal = precio - precio * 0.3;
                    break;
            }
            break;
        case 4: //C
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioFinal = precio - precio * 0.25;
                    break;
                default:
                    precioFinal = precio - precio * 0.2;
            }
            break;
        case 3: //D
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioFinal = precio - precio * 0.15;
                    break;
                case "FelipeLamparas":
                    precioFinal = precio - precio * 0.1;
                    break;
                default:
                    precioFinal = precio - precio * 0.05;
            }
            break;
        case 1:
        case 2:
            precioFinal = precio;
            break;
        default: //A
            precioFinal = precio * 0.5;
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
    if(precioFinal > 119)
    {
        aumento = precioFinal * 0.1;
        alert("Usted pago $" + aumento.toFixed(2) + " de IIBB.");

        precioConAumento = precioFinal + aumento;
        document.getElementById("txtIdprecioDescuento").value = precioConAumento.toFixed(2);
    }
 }

/*function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let marca;
    let precioFinal;
    let precio;
    let aumento;
    let precioConAumento;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marca = document.getElementById("Marca").value;

    precio = cantidadDeLamparas * 35;
    

    if(cantidadDeLamparas > 5)
    {
        precioFinal = precio * 0.5;
    }
    else
    {
        if(cantidadDeLamparas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                precioFinal = precio - precio * 0.4;
            }
            else
            {
                precioFinal = precio - precio * 0.3;
            }
        }
        else
        {
            if(cantidadDeLamparas == 4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    precioFinal = precio - precio * 0.25;
                }
                else
                {
                    precioFinal = precio - precio * 0.2;

                }
            }
            else
            {
                if(cantidadDeLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        precioFinal = precio - precio * 0.15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            precioFinal = precio - precio * 0.1;
                        }
                        else
                        {
                            precioFinal = precio - precio * 0.05;
                        }
                    }
                }
                else
                {
                    precioFinal = precio;
                }
            }
        }
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if(precioFinal > 119)
    {
        aumento = precioFinal * 0.1;
        alert("Usted pago $" + aumento.toFixed(2) + " de IIBB.");

        precioConAumento = precioFinal + aumento;
        document.getElementById("txtIdprecioDescuento").value = precioConAumento.toFixed(2);
    }

}
*/