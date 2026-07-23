---
name: add-endpoint
description: Add a REST API endpoint using the repository's architecture, validation, testing, and completion rules.
argument-hint: "<method> <path> <behavior>"
---

Add the requested API endpoint.

Request:

$ARGUMENTS

Follow this workflow:

1. Read the root and directory-specific project instructions.
2. Inspect the existing routes, service modules, and tests.
3. Explain the smallest implementation plan.
4. Identify the files that need to change.
5. Implement the endpoint using existing architectural patterns.
6. Validate all request inputs.
7. Return explicit HTTP status codes.
8. Return JSON responses.
9. Add successful and unsuccessful API tests.
10. Run `npm run check`.
11. Review `git diff`.
12. Summarize:
    - Endpoint and method
    - HTTP status codes
    - Files changed
    - Tests added
    - Verification results

Do not add dependencies without approval.
Do not modify unrelated files.