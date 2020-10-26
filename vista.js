function pintarArray(pLista){
    ulSection.innerHTML='';
    for(tarea of pLista){
        let tituloTarea = tarea.titulo;
        if(tarea.prioridad == 'urgente'){
            ulSection.innerHTML += `<li class='urgente' data-id="${tarea.idTarea}"> ${tarea.titulo}  <button onClick="borrarTarea(this)" >Eliminar</button</li>
            `
        }else if( tarea.prioridad == 'rutinario'){
            ulSection.innerHTML += `<li class='rutinario' data-id="${tarea.idTarea}" > ${tituloTarea}  <button onClick="borrarTarea(this)" >Eliminar</button</li>
            `
        }else {
            ulSection.innerHTML += `<li class='diario' data-id="${tarea.idTarea}"> ${tituloTarea}  <button onClick="borrarTarea(this)" >Eliminar</button</li>
            `
        }
    }
}