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

  test("GET /tasks/count returns the number of tasks", async () => {
    const tasksResponse = await request(app).get("/tasks");
    const countResponse = await request(app).get("/tasks/count");

    expect(countResponse.statusCode).toBe(200);
    expect(countResponse.body).toEqual({
      count: tasksResponse.body.length,
    });
  });

  test("GET /tasks/count reflects a newly created task", async () => {
    const before = await request(app).get("/tasks/count");

    await request(app).post("/tasks").send({
      title: "Track task counts",
    });

    const after = await request(app).get("/tasks/count");

    expect(after.body.count).toBe(before.body.count + 1);
  });

  test("DELETE /tasks removes every task", async () => {
    await request(app).post("/tasks").send({
      title: "Task to be deleted",
    });

    const beforeCount = await request(app).get("/tasks/count");

    const response = await request(app).delete("/tasks");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      deletedCount: beforeCount.body.count,
    });

    const afterList = await request(app).get("/tasks");
    expect(afterList.body).toEqual([]);
  });

  test("DELETE /tasks on an already-empty task list deletes nothing", async () => {
    const response = await request(app).delete("/tasks");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      deletedCount: 0,
    });
  });
});
