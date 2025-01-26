// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing Enter in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
