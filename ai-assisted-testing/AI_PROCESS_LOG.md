# AI Process Log — Photo Gallery Application

## About This Document

This document is a log of how I used AI assistance throughout this task.
It includes the prompts I used, a summary of what the AI generated, and
the adjustments I made based on my own testing and judgement.

The AI was used as a tool to help structure and speed up the work —
not to replace manual testing or decision making. All outputs were
reviewed, and where needed, corrected or adjusted based on what I
actually observed in the application.

---

## 1. Test Plan Creation

**Prompt used:**

> I am testing a photo gallery web application without official requirements.
> The app allows:
> - viewing images in a public gallery
> - opening images
> - user registration and login
> - creating albums
> - uploading images to albums
> - searching images by name
>
> Based on this, generate a structured test plan with:
> - functional areas
> - test scenarios for each area
> - suggested priorities (high/medium/low)
>
> Important: Do not assume features that are not explicitly mentioned.

**AI Output:**
The AI generated a structured test plan with functional areas and suggested test scenarios, covering 6 functional areas and 32 test scenarios. It also provided a summary. The test plan was provided as an HTML file.

**My adjustments:**
- Removed scenarios related to features that do not exist in the application.
- Added scenarios based on my own manual testing (e.g. duplicate images, gallery reload issue).

---

## 2. Test Plan Refinement

### 2.1 Reviewing and adjusting test cases

**Prompt used:**

> The task required the following: "Kreiraj strukturirani Test Plan za cijelu aplikaciju — test scenariji organizirani po funkcionalnostima, s prioritetima." I will now go through the test plan you created, I will tell you which TC should be removed if it is irrelevant or not connected to features that exist in the app with relevant explanations.
>
> So firstly, since this is a task for a job interview and for beginners, there was no document of requirements of the app.
> Public gallery viewing - So the gallery is viewable without an account and images can be opened. They cannot be opened in a new tab, which is a problem since there is a bug (when going back to the main gallery after viewing an image, the gallery needs to be reopened and the user needs to scroll again to the place where he left off).
> TC-01-03 should be removed.
> TC-01-04 is okay but there is another problem in the app - there is no information about the number of images, no pages. New batch of images loads only if the user scrolls down.
> TC-02-05 - this you should explain to me more so that I can decide if it's relevant or not.
> TC-03-08 - This is not relevant since the album creation is not even possible without logging in so the option doesn't exist.
> Only a logged in user can create an album and upload images. The user can only upload images into an album which will then also be visible to other users in the main gallery. It is not possible to create an album without uploading a cover image and also a name of the album.
> TC-04-05 should be removed.
> TC-06-03 it is a good test but I am not sure that it is relevant for this app since we do not know how many pictures there are and how would we check what names are not there? We can perhaps leave this one in if you give a valid explanation.
> TC-06-06 the search bar is only for writing names of images there are no previews so I am not sure that this can be tested but you can explain to me if it can be so maybe we can leave it in or adjust it.

**AI Output:**
The AI addressed my questions — for some TCs agreed they should be removed, for some provided an explanation why they should be left in, and for some suggested what adjustments should be made. It also asked for more information about some TCs.

**My adjustments:**
- Agreed on which TCs should be kept and confirmed which should be removed.
- Explained in more detail what certain features do or don't do so TCs could be adjusted accordingly.
- Agreed on what would be edited and how once more, before allowing the AI to finalize the test plan.

### 2.2 Converting to Markdown

**Prompt used:**

> As I am submitting everything through Github, I will need to deliver the test plan as an .md file. Please convert it into Markdown.

**AI Output:**
The AI confirmed it would convert the file, keeping the same structure in Markdown format.

**My adjustments:**
Copied the test plan directly into VS Code, checked the preview and edited the document accordingly (wording, terminology, descriptions).

---

## 3. Finding Additional Bugs

### 3.1 Initial suggestions

**Prompt used:**

> Now I need you to help me find additional bugs that I may have missed. I will provide you with my bug report in a word format.

**AI Output:**
The AI suggested additional scenarios I had not tested:

- Login with empty fields
- Registration with an already taken username
- Password and confirm password not matching
- Login after failed or incomplete registration
- Search immediately after uploading an image
- Search for images from other users
- Uploading the same image file twice
- Album without images
- What happens after the 404 error (refresh or session issue)
- Behaviour on smaller screens
- Accessing a profile or album page without login via direct URL

**My adjustments:**
Went through all suggestions and replied which ones I had already tested and which ones I had not, also providing more information where the AI requested it.

### 3.2 Testing and generating the bug report

**Prompt used:**

> Login with unverified/incomplete registration - I have tested this now, trying to register with a partial email domain. The registration was successful and the following message appeared: "You have successfully registered, please check your email in order to finish registration process."
> Uploading the same image file twice with different names is allowed — results in duplicate image content in the album. I have tested this but since I haven't created a dedicated bug in the report we should include this as well.
> Search returns images from other users — the search bar is only available on the home page and when clicking on the menu icon in the top left corner.
> 404 on odd-numbered images after page refresh - when the page is refreshed the error remains.
> Mobile / narrow window layout - when I resized the browser, the number of visible rows of images was changed, and every time when I manually resized it, the gallery needed to reopen or reload. When I resized it to a very small size, only one image is visible but not entirely.
> Direct URL access without login - when I tried this, the login page showed up.
> Now that I have tested these bugs you suggested, create a bug report for them. Use the structure that I have used in my own bug report.

**AI Output:**
The AI asked additional clarifying questions before generating the report, then created the bug report following the same structure as my original report.

**My adjustments:**
One of the bugs that the AI included turned out not to be a bug after I manually tested it — I removed it from the report. Another bug was adjusted after I provided more accurate information about what I observed in the app.

---

## 4. Automation Analysis

### 4.1 Creating the structure

**Prompt used:**

> Can you create a structure for the automation analysis? It should include the following data: what should be automated, why, priorities. Create the document, but leave it partially blank so that I can provide my own decisions on what should be automated, why and the priority of it. So we will fill it out with my answers.

**AI Output:**
The AI created the structure as an .md file with blank fields for recommendation, reasoning, and priority for each functional area.

**My adjustments:**
Provided my recommendation, reasoning, and priority for each area so the AI could fill out the document.

### 4.2 Filling in the analysis

**Prompt used:**

> Since I am not experienced in this, can you ask me additional questions before I provide my answer and then log it in the document? Do not suggest anything if you think I am wrong. Remind me of the test cases from each functional area.

**AI Output:**
The AI asked guiding questions for each functional area and stored my answers in the document.

**My adjustments:**
Edited the text and adjusted the reasoning to better reflect my own opinions and decisions.