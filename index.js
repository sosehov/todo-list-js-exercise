//TODO list function
function newTask(title, description) {
  const task = {
  title: title,
  description: description,
  complete: false,
  //prints out the provided task's details
  logState: function() {
    console.log(`${this.title} has${this.complete ? "" : " not "} been completed}`)
  },
  //marks the provided task as completed
  markComplete: function(){
    task.complete = true;
  }
};
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
