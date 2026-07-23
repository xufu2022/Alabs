# Source Code Rules

These instructions apply to files inside `src/`.

## Architecture

- Keep HTTP concerns in `app.js`.
- Keep server startup in `server.js`.
- Keep business logic in service modules.
- Do not place test code inside source files.
- Avoid global mutable state when practical.

## Route Requirements

Every new route must:

1. Validate its inputs.
2. Return an explicit HTTP status.
3. Return JSON.
4. Handle missing resources.
5. Have corresponding API tests.

## Error Response Format

Use this structure:

```json
{
  "error": "Clear human-readable message"
}