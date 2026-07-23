const request = require("supertest");

const app = require("../src/app");

describe("Task API", () => {
  test("GET /health returns the service status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
    });
  });

  test("GET /tasks returns the available tasks", async () => {
    const response = await request(app).get("/tasks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /tasks/:id returns 404 for an unknown task", async () => {
    const response = await request(app).get("/tasks/999");

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      error: "Task not found",
    });
  });
  test("POST /tasks creates a task", async () => {
    const response = await request(app).post("/tasks").send({
      title: "Build a reusable skill",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject({
      title: "Build a reusable skill",
      completed: false,
    });
  });
});
