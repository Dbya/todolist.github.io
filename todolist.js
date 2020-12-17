//selector
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');



//eventlistner
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);


//function

function addtodo(event){
    //prevent form from submitting
    event.preventDefault();
    //create tododiv
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    //create li
    const newtodo =document.createElement('li')
    newtodo.innerText=todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //complete buttom
    const completedbutton =document.createElement('button');
    completedbutton.innerHTML='<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    tododiv.appendChild(completedbutton);
    //create trash button
    const trashbutton =document.createElement('trash');
    trashbutton.innerHTML='<i class="fas fa-trash"></i>';
    trashbutton.classList.add('trash-btn');
    tododiv.appendChild(trashbutton);
    todolist.appendChild(tododiv);
    //clear todoinput value
    todoinput.value="";

    
}
function deletecheck(e){
    const item =e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        //todo.remove();
    }
    //check mark
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}