// All DOM Variables
const container = document.querySelectorAll('.container');
const card = document.querySelectorAll('.card');

const toDo = document.querySelector('.to-do');
const taskForm = document.querySelector('.task-form');
const input = document.querySelector('.task-text');

// appending a task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textValue = input.value;
    if (!textValue) return;
    const newTask = document.createElement('p');
    newTask.classList.add('card');
    newTask.setAttribute('draggable', 'true');
    newTask.innerText = textValue;

    // add dragging to classlist
    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('dragging');
    });
    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('dragging');
    });
    toDo.appendChild(newTask);
    input.value = '';
    updateTasks(container);
});

//dragging and dropping
card.forEach((task) => {
    task.addEventListener('dragstart', () => {
        task.classList.add('dragging');      
    });
    task.addEventListener('dragend', () => {
        task.classList.remove('dragging');
    });
});

container.forEach((target) => {
    target.addEventListener('dragover', (e) => {
        e.preventDefault();
        const currentTask = document.querySelector('.dragging');
        target.appendChild(currentTask);
    })
    
    target.addEventListener('drop', (e) => {
        e.preventDefault();
        updateTasks(container);
    });
});



// updating task count
function updateTasks(container) {
    container.forEach((col) => {
        const tasks = col.querySelectorAll('.card');
        col.querySelector('.box-tag .count').innerText = tasks.length;
    })
}
