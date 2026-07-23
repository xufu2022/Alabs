const tasks = [
  {
    id: 1,
    title: "Configure Claude Code",
    completed: false,
  },
  {
    id: 2,
    title: "Create project rules",
    completed: true,
  },
];

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((task) => task.id === id);
}

function createTask(title) {
  const task = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(task);
  return task;
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
