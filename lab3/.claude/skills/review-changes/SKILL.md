---
name: review-changes
description: Review uncommitted repository changes for correctness, safety, scope, tests, and project-rule compliance.
---

Review the current uncommitted changes.

Use this process:

1. Run `git status`.
2. Read `git diff`.
3. Identify every changed file.
4. Check the changes against all loaded project instructions.
5. Look for:
   - Functional defects
   - Missing validation
   - Incorrect status codes
   - Weak error handling
   - Missing tests
   - Unnecessary dependencies
   - Unrelated modifications
   - Security risks
   - Formatting or lint issues
6. Run `npm run check`.
7. Do not edit files.
8. Present findings by severity:
   - Critical
   - High
   - Medium
   - Low
9. End with a recommendation:
   - Ready to commit
   - Needs changes