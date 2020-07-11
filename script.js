document.getElementById('siete').addEventListener("click", ingresar)
document.getElementById('ocho').addEventListener("click", ingresar)
document.getElementById('nueve').addEventListener("click", ingresar)
document.getElementById('seis').addEventListener("click", ingresar)
document.getElementById('cinco').addEventListener("click", ingresar)
document.getElementById('cuatro').addEventListener("click", ingresar)
document.getElementById('tres').addEventListener("click", ingresar)
document.getElementById('dos').addEventListener("click", ingresar)
document.getElementById('uno').addEventListener("click", ingresar)
document.getElementById('cero').addEventListener("click", ingresar)
document.getElementById('punto').addEventListener("click", ingresar)
document.getElementById('clear').addEventListener("click", clear)

//operaciones
document.getElementById('multi').addEventListener("click", ingresar)
document.getElementById('resta').addEventListener("click", ingresar)
document.getElementById('division').addEventListener("click", ingresar)
document.getElementById('suma').addEventListener("click", ingresar)

document.getElementById('igual').addEventListener("click", igual)

document.getElementById('regresar').addEventListener("click", eliminar)



function ingresar (e){
    document.form.viewer.value = document.form.viewer.value + e.target.value
}

function clear(){
    document.form.viewer.value=''
}

function igual (){
    let num = document.form.viewer.value;

    if(num){
        document.form.viewer.value = eval(num)
    }
}

function eliminar(){
    let viewer = document.form.viewer.value;
    document.form.viewer.value= viewer.substring(0,viewer.length - 1)
}