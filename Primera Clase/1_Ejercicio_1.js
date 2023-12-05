function registrarEstudiantes (){
    let estudiantes = [];
    console.log('Iniciando registro de estudiantes');
    let cantidadEstudiantes = prompt('Ingresar la cantidad de estudiantes a registrar: ');
    console.log('Cantidad de estudiantes a registrar: ' + cantidadEstudiantes);
    for(let i = 0; i < cantidadEstudiantes; i++){
        let nombreEstudiante = prompt('Ingrese el nombre del estudiante Nº ' + i + ': ');
        let edadEstudiante = prompt('Ingrese la edad del estudiante ' + nombreEstudiante + ': ');
        let estudiante = {
            nombre: nombreEstudiante,
            edad: edadEstudiante
        }
        estudiantes.push(estudiante)
    }
    return estudiantes
}

function mostrarEstudiantes(arrEstudiante){
    console.log('Lista de estudiantes registrados: ');
    for (let i = 0; i < arrEstudiante.length; i++){
        console.log('Estudiante Nº ' + (i + 1) +' Nombre: ' + arrEstudiante[i].nombre + ', Edad: ' + arrEstudiante[i].edad)
    }
}

res = registrarEstudiantes();
mostrarEstudiantes(res);