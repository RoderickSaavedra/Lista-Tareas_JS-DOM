//import checkComplete from "./components/checkComplete.js";
//import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');
const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]'); //Selecciona una etiqueta de nuestro codigo html
    const value = input.value; //Retorna el texto en la caja de texto
    const list = document.querySelector("[data-list]"); //selecciona una etiqueta de nuestro codigo html
    const task = document.createElement('li'); //crea un una etiqueda html
    task.classList.add("card"); //Coloca al elemento su nombre de clase
    input.value = ""; //Asigna un string vacio a la caja de texto

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);

    //task.innerHTML = content; //Coloca texto html en la etiqueta que contiene la variable
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task); //indicamos que task es hijo de list y los datos de este se incertaran en el padre
}

const checkComplete = () =>{
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle("fas"); //toggle vrefica si el nombre de la clase existe o no, si exite la elimina y si no la agrega
    element.classList.toggle("completeIcon")
    element.classList.toggle("far");
}

const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask)
    return i;
}

const deleteTask = (evento) =>{
    const parent = evento.target.parentElement; //accede al padre
    parent.remove();
}

btn.addEventListener("click", createTask);
