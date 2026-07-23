# Test Rules

These instructions apply to files inside `test/`.

- Use Jest and Supertest.
- Use descriptive test names.
- Organize related behavior with `describe`.
- Test both expected and error behavior.
- Do not depend on test execution order.
- Do not use real external services.
- Keep test data small and understandable.
- Verify both HTTP status codes and response bodies.
- Do not weaken assertions to make tests pass.
