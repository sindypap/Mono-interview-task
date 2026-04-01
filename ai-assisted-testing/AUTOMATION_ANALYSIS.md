# Automation Analysis — Photo Gallery Application

> For each functional area, the recommendation, reasoning, and automation priority are assessed based on: execution frequency, criticality, UI stability, implementation complexity, and ROI.

---

## FA-01 — Public Gallery Viewing

**Recommendation:** Partially automate

**Reasoning:** The gallery is the first thing users see, so it needs to be checked every time something changes. The basic checks — does it load, do images show up — are worth automating. The scroll reset bug is left out because it is already a known bug, so there is no point automating a test for something that is confirmed broken. That one is quick enough to check manually once it is fixed.

**Automation Priority:** High

---

## FA-02 — Image Viewing

**Recommendation:** Automate

**Reasoning:** Opening an image is something every user does, so it needs to work every time. Since it is not complex, it should be simple to automate. As it is a core user action, the effort is worth it. 

**Automation Priority:** High

---

## FA-03 — User Registration & Login

**Recommendation:** Partially automate

**Reasoning:** Login and registration are critical — nothing works for a logged-in user if these are broken. The happy paths like successful registration, successful login, and logout should be automated because they are used constantly. Edge cases like wrong password or duplicate email are important but fast to check manually, so automating them is not necessary.

**Automation Priority:** High

---

## FA-04 — Album Management

**Recommendation:** Automate

**Reasoning:** Creating an album is a core feature for logged-in users and everything else depends on it — you cannot upload images without an album. It is straightforward to automate and since login will already be automated, adding album creation on top does not add much extra complexity.

**Automation Priority:** High

---

## FA-05 — Image Upload

**Recommendation:** Partially automate

**Reasoning:** Upload is central to the whole app — without it the gallery is empty and search is useless. The happy path is worth automating for that reason. However, edge cases like uploading the wrong file type or detecting duplicates involve browser file picker handling which is more complex and unstable to automate, so those are better left as manual checks.

**Automation Priority:** Medium

---

## FA-06 — Image Search

**Recommendation:** Partially automate

**Reasoning:** Search is a feature users rely on, so the main scenarios — searching by exact name and partial name — should be automated. Edge cases like empty input or special characters are quick to test manually and not worth the extra effort to automate.

**Automation Priority:** Medium