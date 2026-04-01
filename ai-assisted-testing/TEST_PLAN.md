# Test Plan — Photo Gallery Application

## Overview

| Field | Details |
|---|---|
| Scope | Functional Testing |
| Type | Manual / Exploratory |
| Version | 1.0 |
| Status | Draft |

**Scope note:** This test plan is based on the stated application features and observed behaviour during manual testing. No assumptions have been made about features not present in the app.

**Known behaviour notes:**
- Images open as an overlay, not in a new tab or separate page
- The gallery uses infinite scroll — there is no pagination or total image count displayed
- Search requires pressing Enter to execute

---

## Summary

| Functional Areas | Total Scenarios | High | Medium | Low |
|---|---|---|---|---|
| 6 | 27 | 12 | 11 | 4 |

---

## FA-01 — Public Gallery Viewing

| ID | Scenario | Description | Priority |
|---|---|---|---|
| TC-01-01 | Gallery loads without authentication | Open the app as a guest user and verify the public gallery is accessible without registration or login. | High |
| TC-01-02 | Gallery displays images correctly | Verify that images render without broken thumbnails, distortion, or layout overflow. | High |
| TC-01-03 | Gallery loads more images on scroll | Scroll down in the public gallery and verify a new batch of images loads automatically. Note: there is no pagination or total image count displayed. | Medium |
| TC-01-04 | Returning from an image resets gallery scroll position | Scroll down in the gallery, open an image, then close it and verify whether the gallery returns to the same scroll position. Known issue: the gallery reloads from the top, losing the user's position. | High |

---

## FA-02 — Image Viewing

| ID | Scenario | Description | Priority |
|---|---|---|---|
| TC-02-01 | Image opens from the gallery | Click an image in the gallery and verify it opens in a full or detail view without errors. | High |
| TC-02-02 | Opened image displays correctly | Confirm the opened image is not distorted, cropped incorrectly, or broken. | High |
| TC-02-03 | Image name is visible in the detail view | Open an image and verify its name is displayed alongside it in the overlay or detail view. | Medium |
| TC-02-04 | Closing the image returns user to gallery | After opening an image overlay, close it and verify the gallery is still visible. Note: due to the known scroll reset bug, also observe whether the user's scroll position is preserved. | Medium |

---

## FA-03 — User Registration & Login

| ID | Scenario | Description | Priority |
|---|---|---|---|
| TC-03-01 | Successful user registration | Register a new account with valid credentials and verify the account is created and accessible. | High |
| TC-03-02 | Registration with already-used email | Attempt to register with an email address that is already in use and verify an appropriate error is shown. | High |
| TC-03-03 | Registration with missing required fields | Submit the registration form with one or more required fields empty and verify validation errors are shown. | High |
| TC-03-04 | Successful login with valid credentials | Log in with a registered account's credentials and verify the user is authenticated and redirected appropriately. | High |
| TC-03-05 | Login with incorrect password | Attempt login with a valid email but wrong password and verify a relevant error message is shown and access is denied. | High |
| TC-03-06 | Login with non-existent account | Attempt login with an email that has not been registered and verify an error is shown. | Medium |
| TC-03-07 | User can log out | After logging in, perform a logout action and verify the session ends and protected areas become inaccessible. | High |

---

## FA-04 — Album Management

| ID | Scenario | Description | Priority |
|---|---|---|---|
| TC-04-01 | Logged-in user can create an album | As an authenticated user, create a new album by providing a name and a cover image. Verify the album is created and appears in the album list. | High |
| TC-04-02 | Album creation without a name is not allowed | Attempt to create an album without providing a name and verify a validation error is displayed and the album is not created. | Medium |
| TC-04-03 | Album creation without a cover image is not allowed | Attempt to create an album without selecting a cover image and verify a validation error is shown and the album is not created. | Medium |
| TC-04-04 | Created album is visible in the album list | After successfully creating an album, verify it appears with the correct name in the user's personal album listing. | High |

---

## FA-05 — Image Upload

| ID | Scenario | Description | Priority |
|---|---|---|---|
| TC-05-01 | Authenticated user can upload an image to an album | Select a valid image file, upload it to an existing album, and verify the image appears inside that album. | High |
| TC-05-02 | Upload with no file selected | Attempt to submit the upload form without selecting a file and verify an appropriate validation message is shown. | Medium |
| TC-05-03 | Upload a non-image file | Attempt to upload a non-image file (e.g., .pdf, .txt) and verify the system rejects it with an error message. | Medium |
| TC-05-04 | Uploaded image is associated with the correct album | After uploading an image to a specific album, verify it does not appear in other albums. | High |
| TC-05-05 | Uploaded image name is preserved | Verify the uploaded image retains its original filename or a recognizable version of it after upload. | Medium |
| TC-05-06 | Guest cannot upload images | Verify the upload action is unavailable or blocked for unauthenticated users. | Medium |
| TC-05-07 | Multiple common image formats are accepted | Upload images in common formats (e.g., JPG, PNG, GIF) and verify each is accepted and displayed correctly. | Low |

---

## FA-06 — Image Search

| ID | Scenario | Description | Priority |
|---|---|---|---|
| TC-06-01 | Search returns correct results for an exact name | Enter the exact filename of an existing image and press Enter, then verify it appears in the search results. | High |
| TC-06-02 | Search returns results for a partial name | Enter a partial string that matches one or more image names, press Enter, and verify those images are returned. | High |
| TC-06-03 | Search with no matching results shows a message | Enter a random string unlikely to match any image name (e.g., "xyzxyz999"), press Enter, and verify the app shows a clear "no results" message rather than crashing or displaying a blank screen. | Medium |
| TC-06-04 | Search with an empty query | Submit a search with an empty input field and verify the system handles it gracefully (e.g., shows all results or shows a prompt). | Medium |
| TC-06-05 | Search is case-insensitive | Search for an image name in different cases (e.g., "Sunset" vs "sunset") and verify consistent results are returned. | Medium |
| TC-06-06 | Search requires pressing Enter to execute | Type a name into the search field without pressing Enter and verify no results appear yet. Then press Enter and verify results load. Note: search does not trigger automatically while typing. | Medium |
| TC-06-07 | Search with special characters does not cause an error | Enter special characters (e.g., %, <, *, quotes) in the search field and verify the application does not crash or return a server error. | Low |
| TC-06-08 | Search returns all images sharing the same name | Search for a name that belongs to more than one image and verify all matching images appear in the results. | Medium |