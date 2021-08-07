let valor = true 
let valor2 = !valor;
valor2

function Saludar(){
    return "Hola a todos";
}
function Sumar(a,b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;  
    }
    return 'Parametros no permitidos';

}
function Resta(a=4,b=2) {
    return a - b;
}

let saludo = Saludar();
let resultado = Sumar(3,2);
resultado

console.log(typeof Sumar)
