// Define a constructor function for creating Task objects
function Task(taskName) {
    this.taskName = taskName;
    this.describeTask = function () {
        console.log(`This task is ${this.taskName}.`)
    };
}

// Create an array of Task objects
const tasks = [
    new Task('Walk Dog'),
    new Task('Buy new Turtle'),
    new Task('Learn JS'),
    // add more tasks here
];

// Prompt the user for menu options until they enter 'quit'
let promptOptions = '';
while (promptOptions !== 'quit') {
    promptOptions = prompt('Enter one of the menu options')
    switch (promptOptions) {
        // If the user enters 'new', prompt for a new task and add it to the tasks array
        case 'new':
            const promptNew = prompt("Add a Todo:  ")
            const newTask = new Task(promptNew)
            tasks.push(newTask);
            break;
        // If the user enters 'list', log each task in the tasks array to the console
        case 'list':
            for (const [i, todo] of tasks.entries()) {
                console.log(i, todo);
            }
            break;
        // If the user enters 'delete', prompt for the index number of the task to delete and remove it from the tasks array
        case 'delete':
            const promptDelete = prompt('Enter the index number to delete:')
            let indexToDelete = parseInt(promptDelete);

            for (const [i, task] of tasks.entries()) {
                if (i === indexToDelete) {
                    tasks.splice(i, 1);
                    break;
                }
            }
    }
}
