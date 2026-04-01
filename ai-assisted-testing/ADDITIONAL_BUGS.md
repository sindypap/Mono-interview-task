# Additional Bug Report — Photo Gallery Application

> **Note:** The following bugs were identified during supplementary testing after the initial bug report was submitted. Bug numbering continues from the original report (Bug 14). All findings in this document are marked as `[AI-assisted]`.

---

## 1. Authentication / Registration

### Bug 15: Registration accepted with invalid email domain — no confirmation email received `[AI-assisted]`

**Description:** When registering with an incomplete or invalid email domain (e.g., missing TLD), the app accepts the registration and displays a success message prompting the user to check their email. However, the confirmation email is never received, leaving the account in an unverifiable state.

**Severity:** Major

**Priority:** High

**Steps to reproduce:**
1. Open the Registration page.
2. Enter an email address with an invalid domain (e.g., user@gmail.c).
3. Enter a username.
4. Enter a valid password (minimum 6 characters).
5. Re-enter the password to confirm.
6. Click "Register".
7. Check the email inbox for a confirmation email.

**Expected result:** An error message should be shown indicating the email address is invalid, preventing registration from proceeding.

**Actual result:** Registration appears successful and the message "You have successfully registered, please check your email in order to finish registration process." is shown. No confirmation email is received.

---

## 2. Album / Upload Management

### Bug 16: Same image file can be uploaded multiple times to the same album `[AI-assisted]`

**Description:** It is possible to upload the same image file more than once to the same album by assigning a different name each time. The app does not detect that the file content is identical, resulting in duplicate images within the album and in the main gallery.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**
1. Log in.
2. Open profile and navigate to an album.
3. Upload an image file with a given name.
4. Upload the exact same image file again with a different name.

**Expected result:** The app should detect the duplicate file and either prevent the second upload or notify the user that the image already exists in the album.

**Actual result:** The image is uploaded again as a separate entry with a different name. Both copies appear in the album and in the main gallery.

---

### Bug 17: Gallery reloads and loses scroll position when browser window is resized `[AI-assisted]`

**Description:** When the browser window is manually resized, the gallery closes and needs to be reopened, losing the user's scroll position. This is the same behaviour as Bug 4 (gallery closing after viewing an image), but triggered by window resizing instead. At very small window sizes, only one image is partially visible.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**
1. Open the website.
2. Click the button to open the gallery.
3. Scroll down to load more images.
4. Manually resize the browser window.

**Expected result:** The gallery should adapt to the new window size without reloading or losing the user's scroll position.

**Actual result:** The gallery closes every time the window is resized. The main button must be clicked again to reopen it. At very small sizes, only one image is partially visible.

---

## 3. Search

### Bug 18: Search returns images uploaded by other users `[AI-assisted]`

**Description:** When searching for an image name that exists across multiple users' uploads, the search returns all matching images from all users. The username is visible on hover for each result, so ownership is not hidden — however, since image names are not globally unique (as described in Bug 14), the same name can return results from different users, making it difficult to find a specific image efficiently.

**Severity:** Minor

**Priority:** Low

**Steps to reproduce:**
1. Log in.
2. Upload an image with a name that is already used by another user. 
3. Use the search bar to search for that name and press Enter. 

**Expected result:** Search results are distinguishable enough for the user to identify which image belongs to which user without having to hover over each result individually.

**Actual result:** Multiple images with the same name are returned. The username is only visible on hover, requiring extra interaction to identify ownership when multiple results share the same name.