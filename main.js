let addToDoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click',()=>{
    var paragraph = document.createElement("p");
    toDoContainer.appendChild(paragraph);
    paragraph.innerText= inputField.value;
    inputField.value ='';

    paragraph.addEventListener('click', () => {
    paragraph.style.textDecoration = "line-through";
});

    paragraph.addEventListener('dblclick',()=>{
        paragraph.remove();
    })

})