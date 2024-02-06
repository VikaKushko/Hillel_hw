class TaskManager {
  constructor() {
    this.tasks = new Map();
  }

  addTask(id, description) {
    if (this.tasks.has(id)) {
      console.log("A task with this ID already exists");
    }

    this.tasks.set(id, description);
  }

  removeTask(id) {
    if (!this.tasks.has(id)) {
      console.log("The task with this ID does not exist");
    }

    this.tasks.delete(id);
  }

  findTask(id) {
    if (this.tasks.has(id)) {
      return this.tasks.get(id);
    } else {
      return "No task found";
    }
  }

  displayTasks() {
    for (let [id, description] of this.tasks) {
      console.log(`ID: ${id}, Опис: ${description}`);
    }
  }

  updateTaskDescription(id, newDescription) {
    if (!this.tasks.has(id)) {
      console.log("The task with this ID does not exist");
    }

    this.tasks.set(id, newDescription);
  }
}

const taskManager = new TaskManager();

taskManager.addTask(1, "Завдання 1");
taskManager.addTask(2, "Завдання 2");
taskManager.addTask(3, "Завдання 3");
taskManager.addTask(4, "Завдання 4");

taskManager.displayTasks();

console.log(taskManager.findTask(2));

taskManager.updateTaskDescription(2, "Оновлене завдання 2");

taskManager.removeTask(3);
console.log(taskManager.findTask(3));
console.log(taskManager.findTask(2));
