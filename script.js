const btn = document.querySelector('[data-form-btn]');


const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]'); //Selecciona una etiqueta de nuestro codigo html
    const value = input.value; //Retorna el texto en la caja de texto
    const list = document.querySelector("[data-list]"); //selecciona una etiqueta de nuestro codigo html
    const task = document.createElement('li'); //crea un una etiqueda html
    task.classList.add("card"); //Coloca al elemento su nombre de clase
    input.value = ""; //Asigna un string vacio a la caja de texto
    //backticks
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>`; 
    task.innerHTML = content; //Coloca texto html en la etiqueta que contiene la variable
    list.appendChild(task); //indicamos que task es hijo de list y los datos de este se incertaran en el padre
    console.log(content);
    //console.log("crear tarea");
}
console.log(btn);


//array function o funciones anonimas () => 

btn.addEventListener("click", createTask);
//listener


