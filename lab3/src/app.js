const express = require("express");

const { createTask, getAllTasks, getTaskById } = require("./task-service");

const app = express();

app.use(express.json());

app.get("/health", (request, response) => {
  response.status(200).json({
    status: "ok",
  });
});

app.get("/tasks", (request, response) => {
  response.status(200).json(getAllTasks());
});

app.get("/tasks/:id", (request, response) => {
  const taskId = Number(request.params.id);
  const task = getTaskById(taskId);

  if (!task) {
    return response.status(404).json({
      error: "Task not found",
    });
  }

  return response.status(200).json(task);
});

app.post("/tasks", (request, response) => {
  const { title } = request.body;

  if (!title || typeof title !== "string") {
    return response.status(400).json({
      error: "A task title is required",
    });
  }

  const task = createTask(title.trim());

  return response.status(201).json(task);
});

module.exports = app;
