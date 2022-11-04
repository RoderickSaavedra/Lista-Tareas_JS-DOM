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

export default checkComplete;