// getting reference to form field
const addForm = document.querySelector('.add');
// getting reference to ul
const ul = document.querySelector('.todos');
// getting reference to search form input
const search = document.querySelector('.search input');


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
// delete individual task through delegationgit add
ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    };
});

// callback function to pass onto keyup event listener
const filterToDos = (typedword) => {
    // converting ul/li HTMLCollection to array
    Array.from(ul.children)
    // filtering out all list items that don't match with typed word
    // note logical NOT and conversion to lowercase
    .filter(li => !li.textContent.toLowerCase().includes(typedword))
    // list items that don't match with typed word are given a CSS property of 'filtered'
    .forEach(li => li.classList.add('filtered'));

    Array.from(ul.children)
    // preventing list items from retaining 'filtered' CSS property when hitting backspace
    .filter(li => li.textContent.toLowerCase().includes(typedword))
    .forEach(li => li.classList.remove('filtered'));
};

// listening to keyup event to filter list items
search.addEventListener('keyup',() => {
    // checking input value, trim whitespaces and convert to lowercase
    const typedWord = search.value.trim().toLowerCase();
    // callback function
    filterToDos(typedWord);
});