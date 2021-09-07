// getting reference to form field
const addForm = document.querySelector('.add');
// getting reference to ul
const ul = document.querySelector('.todos');
// creating list template 
const listTemplate = todo => {
    const list = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    //adding li template to ul
    ul.innerHTML += list;
}
// form submission
addForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent default behaviour

    const todo = addForm.add.value.trim() // add form value to ul and trim whitespaces
    // preventing user from submitting an empty field
    if(todo.length) { // if form lenght > 0 then submit list to ul
        listTemplate(todo);
        addForm.reset(); // clear form content after submission 
    }
    else {
        alert(`Don't forget to add your task`); // alert user that field must be filled
    };   
});