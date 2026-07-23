---
name: check-project
description: Run the complete project quality workflow and explain any failures.
---

Validate the current repository.

Perform these steps:

1. Run `git status`.
2. Run `npm run check`.
3. If a check fails, identify the exact command and failure.
4. Explain the most likely root cause.
5. Do not modify files unless the user explicitly requests a fix.
6. Report:
   - Lint status
   - Formatting status
   - Test status
   - Working-tree status
   - Overall result