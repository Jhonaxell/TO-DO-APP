const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
/**
 * Esta funcion verifica si escribimos algo en el texbox, si no escribimos nada
 * nos manda una alerta, pero si escribimos algo, se agrega y nos da las opciónes
 * de eliminar y marcar como hecha 
 * 
 */
function addTask(){
    if(inputbox.value ===''){
        alert("Debe escribir algo");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "✖️" ;
        li.appendChild(span);
        
    }
    inputbox.value = "";
    saveTasks();
}


//marcar como realizada y eliminar
listContainer.addEventListener("click", function(e){
    /*verifica si donde hacemos click es en el elemento de la lista
    entondes lo marca como hecho*/

    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
            saveTasks();

    }
    /*pero si donde hacemos click es en el elemento span (X) entonces se elimina*/
    
    else if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove()
        saveTasks();

    }
},false )

//guardar las tareas de manera local
function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

//muestra las tareas guardadas localmente
function showTask(){
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showTask();