# Cursor Usage Documentation

## Tool
**Cursor** — AI-powered code editor used as the primary tool for writing and debugging Playwright automation tests in Task 3.

---

## Configuration
No custom `.cursorrules` or project-specific configurations were set up. Cursor was used out of the box with its default settings and built-in AI chat feature.

---

## How Cursor Was Used

### Setup
- ChatGPT was used to install Node.js and set up Cursor before starting the automation task

### Learning
- Before writing tests in Cursor, ChatGPT was used to generate one example Playwright test to understand the structure and syntax

### Writing Tests
- Tests were written manually inside Cursor using a comment-driven approach, for example:
  // write playwright test that:
  // logs in user
  // clicks on menu
- This allowed me to stay in control of the test logic while using AI to help with implementation details

### Running Tests
- After each test was generated, it was manually run in the bash terminal using:
  npx playwright test
  or for a specific test file:
  npx playwright test test/gallery.spec.js
- This allowed me to immediately verify whether the test passed or failed before proceeding

### Debugging
- When tests failed, Cursor's built-in AI chat was used to identify and fix the issues
- I provided detailed descriptions of the UI behavior and user flows to guide the AI toward correct solutions
- Multiple iterations were sometimes needed, requiring step-by-step guidance on what elements appear and in which order

---

## Summary

Cursor was used as the primary code editor throughout Task 3. While the built-in AI handled code generation and suggested fixes, all test logic, user flow descriptions, and debugging direction came from me. The AI was a tool for implementation — the understanding and guidance came from manual analysis of the application being tested.

For full details on the automation process, see: automation/AI_AUTOMATION_LOG.md