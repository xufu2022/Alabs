# Claude Task API Instructions

## Project Purpose

This repository contains a small REST API for managing tasks. It is used to demonstrate safe, structured AI-assisted software development.

## Technology

- Node.js
- Express
- CommonJS modules
- Jest
- Supertest
- ESLint
- Prettier

## Project Structure

- `src/app.js`: Express routes and request validation
- `src/server.js`: Application startup
- `src/task-service.js`: Task data and business logic
- `test/`: Automated API tests
- `.claude/`: Claude Code settings, hooks, and reusable skills

## Required Commands

Before completing any code change, run:

```bash
npm run check