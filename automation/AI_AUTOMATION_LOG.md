# AI Coding Process Log

## Tools Used
- Cursor AI (primary tool for generating and debugging Playwright tests)

---

## Workflow and Process

### Initial Test Creation
I started by manually writing a login test and using my own credentials. The test initially failed. I then asked the AI to identify the issue in a specific line where I attempted to click a "Sign In" link.

The AI correctly identified that the selector was invalid because the login option was not directly visible on the homepage. Instead, the login flow required hovering over an icon, opening a menu, and then clicking the login option.

I instructed the AI to update the test accordingly by:
- Hovering over the menu icon
- Clicking the menu
- Selecting the login option

I allowed the AI to iteratively update the code and run changes until the test passed. After that, I reviewed and accepted the changes and verified that the test worked correctly.

---

### Creating a More Complex Test (Album Creation & Upload)
I attempted to create a more complex test involving:
- Logging in
- Creating an album
- Adding a cover image
- Uploading a photo

Even with detailed instructions, the AI-generated test initially failed.

I asked the AI to analyze and fix the issues. During this process:
- I suggested adding a local folder (`test-images`) for storing upload files
- The AI had already created a different folder (`pictures`) automatically
- This step turned out to be unnecessary, and I later removed the unused folder

I then added my own image to the `test-images` folder and continued working with the AI.

---

### Iterative Debugging and Guidance
The AI required multiple iterations to correctly implement the test. I had to:
- Provide detailed UI behavior descriptions
- Explain exactly what elements appear and in which order
- Guide the AI step-by-step through the correct user flow

Even after several fixes, the test still did not pass consistently. I then explicitly instructed the AI to:
- Fully clean up the test
- Ensure it runs successfully via the Playwright CLI

---

### AI Limitations and Corrections
During the process, the AI made unintended changes:
- It modified two other test files that were previously working
- These tests became broken after the AI changes

I identified this issue and instructed the AI to stop modifying unrelated tests and focus only on fixing the failing one.

---

## Summary of AI Contribution vs Manual Work

### AI Generated:
- Initial test structures
- Selectors and Playwright commands
- Suggested fixes for failing tests
- File and folder setup for test assets

### Manually Adjusted:
- Correct user flows (especially navigation and UI interactions)
- Selector accuracy based on real application behavior
- Test data and file structure decisions
- Debugging AI-generated mistakes
- Preventing unwanted changes in unrelated test files

---

## Conclusion

AI was helpful for generating and iterating on test cases, but it required some guidance and validation. While most of the code changes were implemented by the AI, my role was to identify where tests were failing, understand the issues, and guide the AI toward the correct solution. The final working tests were achieved through iterative collaboration, where AI handled the implementation and I provided direction and validation.