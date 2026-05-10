// Step 1 — Select the elements we need
const input    = document.getElementById('task-input');
const addBtn   = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


// Step 2 — Add a new task
function addTask() {

  // Get the text and remove extra spaces
  const text = input.value.trim();

  // Do nothing if the input is empty
  if (text === '') return;

  // Create a new list item
  const li = document.createElement('li');
  li.classList.add('task-item');

  // Fill it with a checkbox, task text, and delete button
  li.innerHTML = `
    <input type="checkbox" />
    <span>${text}</span>
    <button class="delete-btn">✕</button>
  `;

  // Add it to the list
  taskList.appendChild(li);

  // Clear the input ready for the next task
  input.value = '';
}


// Step 3 — Handle complete and delete actions
function handleTaskAction(e) {
  const item = e.target.closest('.task-item');

  // Checkbox ticked — toggle done style
  if (e.target.type === 'checkbox') {
    item.classList.toggle('done');
  }

  // Delete button clicked — remove the task
  if (e.target.classList.contains('delete-btn')) {
    item.remove();
  }
}

// Listen for clicks anywhere on the task list
taskList.addEventListener('click', handleTaskAction);


// Step 4 — Connect the Add button and Enter key
addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});