// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => {
            const listItem = createTaskElement(task);
            taskList.appendChild(listItem);
        });
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(listItem => {
            tasks.push(listItem.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a new task element
    function createTaskElement(taskText) {
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
            saveTasks(); // Update localStorage after removing a task
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        return listItem;
    }

    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new task element and append it to the task list
        const listItem = createTaskElement(taskText);
        taskList.appendChild(listItem);

        // Save tasks to localStorage
        saveTasks();

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    function initializeEventListeners() {
        // Add event listener for the Add Task button
        addButton.addEventListener('click', addTask);

        // Add event listener for pressing Enter in the input field
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    }

    // Load tasks and initialize event listeners on page load
    function initializeApp() {
        loadTasks();
        initializeEventListeners();
    }

    // Call initializeApp when DOM content is loaded
    initializeApp();
});
