# AI Prompts Log

This document contains all prompts used across the project tasks, along with context on how and why they were used.

---

## Task 1 — Manual Testing

AI was not used for the actual testing process, as this task was completed manually.

However, AI (mainly Claude) was used to **format the bug report** for markdown so it could be pasted into VS Code cleanly. No changes were made to the content — AI was only used to structure and format the text I had already written, in order to save time.

---

## Task 2 — AI-Assisted Testing

All prompts and the full AI process for Task 2 are documented in:
`ai-assisted-testing/AI_PROCESS_LOG.md`

---

## Task 3 — Automation (Playwright Tests in Cursor)

### Workflow Overview

1. **Setup** — Used ChatGPT to install Node.js and set up Cursor
2. **Learning** — Asked ChatGPT for one example Playwright test to understand the structure before writing my own
3. **Writing tests** — Wrote tests myself inside Cursor using comment-based prompting, for example:
   ```
   // write playwright test that:
   // logs in user
   // clicks on menu
   ```
4. **Debugging** — When tests failed, used Cursor's built-in AI chat to identify and fix issues
5. **Documentation** — Wrote all prompts and notes in a separate Word document, then used AI to structure and format them for the repository

> Note: No custom `.cursorrules` were configured in Cursor. Cursor was used as the primary code editor with its built-in AI chat for debugging.

---

### Prompts Used in Cursor AI Chat

**Chat 1 — gallery.spec.js debugging**

1. *"My latest test is not working. The steps that I included in the test were not entirely followed. Can you fix this?"*

2. *"Can I add a folder for test images with a few images, so that you can use those in the project file?"*

3. *"I added an image called 'Autumn colors.jpeg'."*

4. *"The test gallery.spec.js still does not work. When we click on create album, a new UI shows up, then we need to fill in album name, and on the same UI page click on save album. Then on new UI page we need to click on click to upload cover image because there is an error message below that says 'Album is not created until you upload a cover image'. Then we click on upload cover image, a new UI shows up again, where there is a button upload image which we can do using my folder test images and use the file called 'Autumn colors'. Then in the field photo name type virag and click on upload. These are more detailed steps that may help to fix the test."*

5. *"The image does not have to be called virag, it can be anything that is not used already, so that the name is not taken yet."*

6. *"Clean up the test so that I can run it in bash."*

7. *"Now the tests gallery.visible.spec.js and login.spec.js are not working and they were working before, meaning they passed the test before your last change. The test gallery.spec.js is still not working."*

**Chat 2 — logout.spec.js debugging**

1. *"Help me fix logout.spec.js"*

---

## Note on AI Tool Selection

Throughout this project I used both Claude and ChatGPT. I found Claude 
to be simpler, more intuitive and more educational to work with — it 
explained things in a way that helped me actually understand the process 
rather than just providing answers. However, since I do not have a paid 
Claude subscription, my usage was limited, which is why I relied more 
heavily on ChatGPT for tasks that required extended conversations. Given 
the choice, I would have preferred to use Claude throughout the entire project.