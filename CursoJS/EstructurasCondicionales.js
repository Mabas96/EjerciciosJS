let n = 3;
let valor = n==='3';
console.log(valor)

//*Estructura condicional if 
if (n==17) {
    console.log("Es mayor de edad");
}else {
    console.log("Es menor de edad");
}
//*Estructura condicional Switch

switch (n) {
    case 1,2,3:
        console.log("Verano")
        break;
    case 4,5,6:
        console.log("Otoño")
        break;
    case 7,8,9:
        console.log("Primavera")
        break;
    case 10,11,12:
        console.log("Invierno")
        break;
    default:
        console.log("No es un mes el año");
        break;
}

