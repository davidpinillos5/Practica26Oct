let formulario = document.getElementById("formulario");
let inputTarea = document.getElementById("agregarTarea");
let boton = document.getElementById("btn");
let prioridad = document.getElementById("prioridadTareas");
let ulSection = document.getElementById("lista");
let tipoPrioridad = document.getElementsByTagName('option')
let seleccionPrioridad = document.getElementById('seleccionPrioridad');


let contadorId = 3;

function agregarTarea(){

    let valorTarea = inputTarea.value;
    let valorPrioridad = prioridad.value;
    let tarea = {};
    tarea.idTarea = contadorId;
    tarea.titulo = valorTarea;
    tarea.prioridad = valorPrioridad;
    listaPrincipal.push(tarea);
    pintarArray(listaPrincipal);
    contadorId++;

}

boton.addEventListener('click',agregarTarea)

function borrar(pLista, id) {
    findRemove = pLista.findIndex(tarea => tarea.idTarea == id);
    pLista.splice(findRemove, 1);
    pintarArray(pLista);
}
function borrarTarea(event) {
    let id = event.parentNode.dataset.id;
    borrar(listaPrincipal, id);
};


function listaFiltradaPorPrioridad(pLista, pPrioridad) {
    let listaFiltrada = pLista.filter(tarea => tarea.prioridad == pPrioridad);

    (listaFiltrada.length != 0) ? pintarArray(listaFiltrada) : pintarArray(pLista);
};

seleccionPrioridad.addEventListener('change', event => {
    let resultado = event.target.value;
    listaFiltradaPorPrioridad(listaPrincipal, resultado);
});







//CONFUSION CON LAS INSTRUCCIONES DE LA PRACTICA--> LA HICE SIN UTILIZAR ARRAYS.


/* 
boton.addEventListener("click", agregarTarea);


prioridad.addEventListener('click',cambiarPrioridad);



function agregarTarea() {

    let tareas = tarea.value;
    let añadirTarea = document.createElement("li");
    let enlaces = document.createElement("a");


    let contenido = document.createTextNode(tareas);

    if(tareas == '') {
        alert("Escribe una tarea valida,por favor");
        return false;
    }



    enlaces.appendChild(contenido);
    enlaces.setAttribute('href','#');
    añadirTarea.appendChild(enlaces);

    lista.appendChild(añadirTarea);

    for(let i = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener('click', function(){
            this.parentNode.removeChild(this);
        });
    }

    

}
for(let i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener('click', eliminarTarea);
}

 function cambiarPrioridad(){
    switch (tipoPrioridad){
        case (tipoPrioridad.value == "urgente"):
            contenido.style.backgroundColor="red";
            break;
        case (tipoPrioridad.value == "rutina"):
            contenido.style.backgroundColor="green";
            break;
        case (tipoPrioridad.value == 'diario'):
            contenido.style.backgroundColor="yellow";
            break;
        case (tipoPrioridad.value == "seleccionaPrioridad"):
            alert("Selecciona una prioridad");
            break; 

    }

}


function eliminarTarea() {
    this.parentNode.removeChild(this);

} */