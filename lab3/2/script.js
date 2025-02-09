const todoInput = document.getElementById('input-text');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('list');


addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        return;
    }

    const newTask = document.createElement('li');

    newTask.innerHTML = `
    <div class="item">
      <input type="checkbox" class="done">
    <span>${taskText}</span>
      <button class="delete-button"><img src="bin.png"></button>
    </div>
  `;

    todoList.appendChild(newTask);
    todoInput.value = '';

    updateTaskActions();
});

function updateTaskActions() {
    const checkboxes = todoList.querySelectorAll('.done');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const task = e.target.closest('li');
            task.classList.toggle('done', e.target.checked);
        });
    });

    const deleteButtons = todoList.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const task = e.target.closest('li');
            task.remove();
        });
    });
}
updateTaskActions();
