// UI
const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const filterInput = document.getElementById('filter');
const taskList = document.querySelector('.collection');
let listItems = document.querySelector('.collection-item');

const addBtn = document.querySelector('.add-btn');
const updateBtn = document.querySelector('.update-btn');
const deleteBtn = document.querySelector('.delete-btn');
const cancelBtn = document.querySelector('.back-btn');
const clearBtn = document.querySelector('.clear-btn');

// load event listeners
loadEventListener();

function loadEventListener() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', editItem);
    updateBtn.addEventListener('click', updateItem);
    cancelBtn.addEventListener('click', cancelEdit);
    deleteBtn.addEventListener('click', deleteItem);

    hideButtons();
} 

// add task
function addTask(e) {
    if (taskInput.value === '') {
        showError("Please fill in the input field.", 'error')
    } else {
        const li = document.createElement('li');
        li.className = "collection-item";
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = "edit-item";
        link.innerHTML = "Edit"
        li.appendChild(link);
        taskList.appendChild(li);

        showError("Task has been added", 'success');

        taskInput.value = '';
    } 

    e.preventDefault();
}

// show alert
function showError(message, classname) {
    const div = document.createElement('div');
    div.className = `alert ${classname}`;
    div.appendChild(document.createTextNode(message));
    const input = document.querySelector('.input');
    input.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000)
}

// hide buttons
function hideButtons() {
    addBtn.style.display = 'inline';
    updateBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    cancelBtn.style.display = 'none';
}

// show buttons
function showButtons() {
    addBtn.style.display = 'none';
    updateBtn.style.display = 'inline';
    deleteBtn.style.display = 'inline';
    cancelBtn.style.display = 'inline';

}

// edit task
function editItem(e) {
    if (e.target.className === 'edit-item') {
        const text = e.target.parentElement.firstChild.textContent;
        taskInput.value = text;
        showButtons();
    }
}

// update task
function updateItem(e) {
    let listItems = document.querySelectorAll('.collection-item');
    listItems = Array.from(listItems);

    listItems.forEach((item, index) => {
        const updatedItem = taskInput.value;

    })

    e.preventDefault();
}

// delete task
function deleteItem(e) {
    let listItems = document.querySelectorAll('.collection-item');

    listItems = Array.from(listItems);

    listItems.forEach(item => {
        if (taskInput.value === item.firstChild.textContent) {
            item.remove();
            taskInput.value = '';
            hideButtons();
        }
    })

    e.preventDefault();
}

// cancel edit
function cancelEdit(e) {
    taskInput.value = "";
    hideButtons();
    e.preventDefault();
}