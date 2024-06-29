//CALCULADOR PAGO PATENTE

let cantVehiculos = prompt("Ingrese la cantidad de vehiculos");
let costoPatente = 0;

if(cantVehiculos >= 1){
    for(let i=1;i<=cantVehiculos;i++){
        let patenteVehiculo = prompt("Ingrese el ultimo numero de la patente del vehiculo N°"+i);
        switch (patenteVehiculo){
            case "0":
                costoPatente += 100;
                break;
            case "1":
                costoPatente += 200;
                break;
            case "2":
                costoPatente += 300;
                break;
            case "3":
                costoPatente += 400;
                break;
            case "4":
                costoPatente += 500;
                break;
            case "5":
                costoPatente += 600;
                break;
            case "6":
                costoPatente += 700;
                break;
            case "7":
                costoPatente += 800;
                break;
            case "8":
                costoPatente += 900;
                break;
            case "9":
                costoPatente += 1000;
                break;
            default:
                costoPatente;
        }
    }
    console.log(`El costo que debera pagar de patente por ${cantVehiculos} sera de ${costoPatente}`);
    let totalPorVehiculo = (cantVehiculos,costoPatente) => { return costoPatente / cantVehiculos;};
    let totalAMostrar = totalPorVehiculo(cantVehiculos,costoPatente);
    console.log(`El costo que debera pagar por vehiculo sera de ${totalAMostrar}`);
}else{
    alert("Ingrese una cantidad valida de vehiculos");
}


