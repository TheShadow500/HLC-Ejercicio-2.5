let vendedores = 3;                                     // Número de Vendedores
let zonas = 4;                                          // Número de Zonas
let ordenadores = [];                                   // Array de Ordenadores

// Orden Posición Vendedores, Posición Zonas, Total
// Creamos el array y lo inicializamos a 0 en todas sus posiciones
let ventas = Array(vendedores + zonas + 1).fill(0);     // Ventas Almacenadas

// Recorremos el array bidimensional y vamos asignando los valores aleatorios entre 0 y 100
// Al mismo tiempo vamos realizando las sumas correspondientes y almacenando en el array de las ventas
for(let i = 0; i < vendedores; i++){
    ordenadores[i] = [];

    for(let j = 0; j < zonas; j++){
        ordenadores[i][j] = Math.floor(Math.random() * (100 + 1));

        // Sumamos las ventas al vendedor
        ventas[i] += ordenadores[i][j];

        // Sumamos las ventas a la zona
        ventas[vendedores + j] += ordenadores[i][j];

        // Sumamos las ventas totales
        ventas[vendedores + zonas] += ordenadores[i][j];
    }
}

let zonaMayorVenta = 0;
let vendedorMenorVenta = ventas[ventas.length - 1];

// Comprobamos los totales para ver cual es la zona con mayor venta y el vendedor con menos venta
for(let i = 0; i < ventas.length; i++){
    if((vendedorMenorVenta > ventas[i]) && (i < vendedores)){
        vendedorMenorVenta = ventas[i];
    }

    if((zonaMayorVenta < ventas[i]) && (i >= vendedores) && (i < ventas.length - 1)){
        zonaMayorVenta = ventas[i];
    }
}

// Recorremos el array para mostrar los valores por pantalla
document.write("HLC - Actividad 2.5");
document.write("<br>Daniel Amores");
document.write("<br><br><b><u>ARRAY DE VENTAS</u></b><br>");
document.write("<div class='container'>");
for(let i = 0; i < vendedores; i++){
    document.write("Vendedor: " + (i + 1) + "<br>");
    for(let j = 0; j < zonas; j++){
        document.write("Zona " + (j + 1) + ": " + ordenadores[i][j] + " ventas<br>");
    }
    document.write("<br>");
}
document.write("<br>TOTALES<br>");



for(let i = 0; i < ventas.length; i++){
    if(i < vendedores){
        if(ventas[i] == vendedorMenorVenta){
            document.write("<span class='menor'>Vendedor " + (i + 1) + ": " + ventas[i] + " ventas (Menor Vendedor)</span>");
        }
        else{
            document.write("Vendedor " + (i + 1) + ": " + ventas[i] + " ventas<br>");
        }
    }
    else if((i < ventas.length - 1) && (ventas[i] == zonaMayorVenta)){
        document.write("<span class='mayor'>Zona " + (i - vendedores + 1) + ": " + ventas[i] + " ventas (Zona Mayor Venta)</span>");
    }
    else if(i == ventas.length - 1){
        document.write("<br>Total: " + ventas[i] + " ventas totales");
    }
    else{
        document.write("Zona " + (i - vendedores + 1) + ": " + ventas[i] + " ventas<br>");
    }
}