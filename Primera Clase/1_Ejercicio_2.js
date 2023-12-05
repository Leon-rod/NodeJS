function calcularPromedio(numeros){
    let suma = 0;
    cantidadNumeros = numeros.length;
    for(let i = 0; i < cantidadNumeros; i++){
        suma += numeros[i];
    }
    let promedio = suma / cantidadNumeros;
    return promedio
}

let numeros = [1,2,4,6,7];
let resultado = calcularPromedio(numeros);
console.log(resultado);