let notaMatematica = document.getElementById("matematica");
let notaLengua = document.getElementById("lengua");
let notaEFSI = document.getElementById("efsi");

const botonPromedio = document.getElementById("botonPromedio");
const botonNotaMayor = document.getElementById("botonNotaMayor");
botonPromedio.onclick= () => {
    if (validar()){
        const resultado = document.getElementById("resultado");
        const gif = document.getElementById("gif-variado");
        const materias = 3;
        let numero = ((parseFloat(notaEFSI.value) + parseFloat(notaLengua.value) + parseFloat(notaMatematica.value))/materias);
        if(numero >= 6){
            resultado.style.color = "green";
            gif.src = "aprobado-examen.gif";
            
        }
        else{
            resultado.style.color = "red";
            gif.src = "desaprobado.gif";
        }
        resultado.innerHTML = "El promedio del alumno es: " + numero;
    }
}
botonNotaMayor.onclick = () => {
    if(validar()){
    const resultado = document.getElementById("resultado");
    let maxNota = Math.max(parseFloat(notaMatematica.value), parseFloat(notaLengua.value), parseFloat(notaEFSI.value));
    let materia = '';

    if (maxNota === parseFloat(notaMatematica.value)) {
        materia = 'Matemática, ';
    }
    
    if (maxNota === parseFloat(notaLengua.value)) {
        materia += 'Lengua, ';
    } 
    
    if(maxNota === parseFloat(notaEFSI.value)){
        materia += 'EFSI';
    }      

    resultado.style.color = "blue";
    resultado.innerHTML = "La materia que mayor nota obtuvo es: " + materia;
    }

}
function validar(){
        if(notaMatematica.value.length == 0 || notaLengua.value.length == 0 || notaEFSI.value.length == 0 ){
            alert('Ingrese la nota en todos los campos');
            return false;
        }
        return true;
    
}

notaMatematica.onkeyup = () =>{
    if(notaMatematica.value < 1 || notaMatematica.value > 10){
        notaMatematica.style.color = "red";
    }
    else{
        notaMatematica.style.color = "green";
    }
}
notaLengua.onkeyup = () =>{
    if(notaLengua.value < 1 || notaLengua.value > 10){
        notaLengua.style.color = "red";
    }
    else{
        notaLengua.style.color = "green";
    }
}
notaEFSI.onkeyup = () =>{
    if(notaEFSI.value < 1 || notaEFSI.value > 10){
        notaEFSI.style.color = "red";
    }
    else{
        notaEFSI.style.color = "green";
    }
}
