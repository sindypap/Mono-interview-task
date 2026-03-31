# 1. General UI / UX


## Bug 1: No main title
**Description:** No visible title or name of website in the content area.

**Severity:** Low

**Priority:** Low

**Steps to reproduce:** Open website.

**Expected result:** Name of website will be visible in header/content area.

**Actual result:** Name of website is not available anywhere.

## Bug 2: No info about number of images
**Description:** No information about number of images available or distribution of images in pages (only loading more and more content).

**Severity**: Major

**Priority:** Medium

**Steps to reproduce:**

1.	Open gallery.

2.	Keep scrolling down.

**Expected result:** Information about number of available images or pages.

**Actual result:** No information about quantity of images.

## Bug 3: Not possible to open image in new tab
**Description:** It is not possible to open the image in a new tab to avoid loading the gallery after viewing one image.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**

1.	Open gallery.

2.	Right click on any image/click on scroll wheel.

**Expected result:** There is an option “Open in new tab” by right clicking or automatic new tab with scroll wheel clicking.

**Actual result:** No option available.


# 2. Gallery / Image Display

## Bug 4: Gallery needs to be reopened after viewing an image
**Description:** After opening an image, going back to the gallery makes the images disappear. To view the images, the main button needs to be clicked again.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**

1.	Open website.

2.	Click on button under tagline.

3.	Click on an image.

4.	Go back a page to main menu or click on the X in the upper right corner.

**Expected result:** Continue browsing where it was left off.

**Actual result:** Gallery closes, button needs to be clicked again.

## Bug 5: Multiple of same picture
**Description:** Images uploaded to albums also appear in the main gallery, causing duplicate entries with potentially different names and/or descriptions.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**

1.	Open website.

2.	Click on button to open gallery.

**Expected result:** No repeating images, one of each image.

**Actual result:** Some images have 1 or more copies.

## Bug 6: Images cropped in preview
**Description:** Images are cropped in gallery preview.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**

1.	Open website.

2.	Click on button to open gallery.

**Expected result:** Entire image visible in preview

**Actual result:** Images are cropped.

## Bug 7: Copies differ in name and/or description
**Description:** Copies of same images have different names and/or descriptions, and some do not even have descriptions.

**Severity:** Low

**Priority:** Low

**Steps to reproduce:**

1.	Open gallery.

2.	Open any image that has copies.

3.	Open another copy of the same image.

**Expected result:** The name and/or description of the image is the same since they are copies.

**Actual result:** Copies differ in name and/or description, some lack descriptions.


# 3. Authentication / Registration / Password Recovery

## Bug 8: No password requirements
**Description:** No information about password requirements on registration page; minimum or maximum number of characters, type of characters.

**Severity:** Minor

**Priority:** High

**Steps to reproduce:**

1.	Hover over header icon in the upper left corner.

2.	Click on “Menu”.

3.	Click on “Register”.

**Expected result:** Available information about password requirements such as min. or max. characters, type of characters (symbols, uppercase or lowercase letter).

**Actual result:** No information about password requirements, only error message appears until there are enough characters in both Password and Confirm Password fields.

## Bug 9: Error messages do not disappear
**Description:** Error messages do not disappear after deleting input in Password and/or Confirm Password field.

**Severity:** Minor

**Priority:** Medium

**Steps to reproduce:**

1.	Hover over header icon in the upper left corner.

2.	Click on “Menu”.

3.	Click on “Register”.

4.	Type in a 6 character password in the Password field.

5.	Type in the same to the Confirm Password field.

6.	Delete some characters in both fields.

7.	Then delete everything from both fields.

**Expected result:** Error messages should disappear when deleting all input.

**Actual result:** All error messages are still visible after deleting all input.

## Bug 10: No error message when incomplete email used for registration
**Description:** When entering an incomplete email address domain, registration fails without any error messages.

**Severity:** Major

**Priority:** High

**Steps to reproduce:**

1.	Open Registration page.

2.	Enter an email address with an invalid email domain.

3.	Enter Username

4.	Enter a password of minimum 6 characters, all lowercase, only letters.

5.	Re-enter password to confirm.

6.	Click on “Register”.

**Expected result:** Error message for invalid email.

**Actual result:** Registration fails without any messages.

## Bug 11: Password recovery email not working
**Description:** After receiving an email for password recovery, the link from the email to set up a new password shows an error.

**Severity:** Major

**Priority:** High

**Steps to reproduce:**

1.	Click on “Login”.

2.	Click on “Forgot Your Password? Recover Your Password Here!”

3.	Enter valid email address.

4.	Open email inbox.

5.	Open email “Password Recovery”.

6.	Click on “Set new password”.

**Expected result:** Redirected to app for password reset.

**Actual result:** Error occurs.


# 4. Album / Profile / Upload Management

## Bug 12: Error when viewing every other image in album
**Description:** When viewing first and every other image in the album, error 404: page missing appears. When opening to view 2., 4, and 6. image, error does not appear.

**Severity:** Major

**Priority:** High

**Steps to reproduce:**

1.	Log in.

2.	Open profile.

3.	Create an album.

4.	Add more than 2 images.

5.	Click to open second image and every other (2nd, 4th, 6th).

6.	Click to open images in odd-numbered positions (1st, 3rd, 5th).

**Expected result:** Able to view all images from album.

**Actual result:** Error 404: page missing appears when viewing first image added and every other image in odd-numbered positions, not able to go back to Album page. Second image and every other even-numbered position is viewable (2nd, 4th, 6th).

## Bug 13: Not able to add already existing name to image in album
**Description:** Not possible to add an already existing name to an image in album.

**Severity:** Major

**Priority:** Medium

**Steps to reproduce:**

1.	Log in.

2.	Open profile.

3.	Create an album.

4.	Add an image with one name.

5.	Add the same image with the same name.

6.	Add a different image with the same name.

**Expected result:** Same images having same names for search functionality.

**Actual result:** One name added to an image cannot repeat, resulting in copies of same images with different names, not able use search option efficiently.

## Bug 14: Error message for taken image names inconsistent.
**Description:** Error message “Name taken, please choose another. “ not valid for every case. Inconsistent when using taken name from a different user.

**Severity:** Major

**Priority:** High

**Steps to reproduce:**

1.	Log in.

2.	Open profile.

3.	Open album.

4.	Add new image to an album.

5.	Open main gallery.

6.	Open image from different user.

7.	Copy name of image.

8.	Open same album in profile.

9.	Add same image.

10.	Paste name from different user.

**Expected result:** Error message “Name taken, please choose another. “ should appear.

**Actual result:** App does not allow same names within user’s album, but allows same name of image uploaded by a different user.
