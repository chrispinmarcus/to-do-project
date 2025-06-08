let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click",()=>{
if (inputField.value.trim() ===''){
        alert('please this should not be empty!');
            return;
        }
        let paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value ='';

        paragraph.addEventListener('click',()=>{
            paragraph.style.textDecoration ='line-through';
        })
        paragraph.addEventListener('dblclick',()=>{
            toDoContainer.removeChild(paragraph);
        })

})
    

       
