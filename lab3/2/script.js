const input = document.getElementById('input-text');
const add = document.getElementById('add-button');
const list = document.getElementById('list');


add.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') {
        return;
    }

    const task = document.createElement('li');


    task.innerHTML = `
    <div class="item">
      <input type="checkbox" class="done">
      <span>${text}</span>
      <button class="delete-button"><img src="bin.png"></button>
    </div>
  `;

    list.appendChild(task);
    input.value = '';



    updateButtons();
});



function updateButtons() {
    const checkboxes = list.querySelectorAll('.done');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (element) => {
            const li = element.target.closest('li');
            li.classList.toggle('done');
        });
    });

    const deleteButtons = list.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (element) => {
            const li = element.target.closest('li');
            document.getElementById('deleted').appendChild(li);
            // li.remove();


        });

    });
}
updateButtons();
