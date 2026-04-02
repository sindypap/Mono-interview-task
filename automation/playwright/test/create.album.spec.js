const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://demo.baasic.com/angular/starterkit-photo-gallery/main';

function resolveUploadFixture() {
  const dir = path.join(__dirname, '..', 'test-images');
  const candidates = ['autumn-colors.jpeg', 'Autumn colors.jpeg', 'sample-upload.jpg'];
  for (const name of candidates) {
    const full = path.join(dir, name);
    if (fs.existsSync(full)) {
      return full;
    }
  }
  throw new Error(
    `No upload image found in ${dir}. Add autumn-colors.jpeg (or sample-upload.jpg).`,
  );
}

test('user can log in, create album, and upload an image', async ({ page }) => {
  test.setTimeout(120000);

  const fixtureImage = resolveUploadFixture();
  const id = Date.now();
  const albumName = `Test Album ${id}`;
  const photoName = `photo-${id}`;
  const username = 'Cynttest2';
  const password = 'Testtest123!';

  await page.goto(BASE_URL);

  const menu = page.getByRole('link', { name: 'Menu' }).first();
  await menu.hover();
  await menu.click();
  await page.getByRole('navigation').getByText('Login', { exact: true }).click();
  await page.getByRole('textbox', { name: /email or username/i }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  const createAlbumBtn = page.getByRole('button', { name: /create album/i });
  await expect(createAlbumBtn).toBeVisible({ timeout: 15000 });
  await createAlbumBtn.click();

  await page.getByRole('textbox', { name: /album name/i }).fill(albumName);
  await page.getByRole('button', { name: /save album/i }).click();

  await expect(
    page.getByText(/Album is not created until you upload a cover image/i),
  ).toBeVisible({ timeout: 15000 });
  await page.getByText(/click to upload cover image/i).click();

  const uploadImageControl = page
    .getByRole('button', { name: /upload image/i })
    .or(page.getByText('Upload image', { exact: true }));
  await expect(uploadImageControl).toBeVisible({ timeout: 15000 });

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    uploadImageControl.click(),
  ]);
  await fileChooser.setFiles(fixtureImage);

  const photoField = page.getByRole('textbox', { name: /photo name/i });
  await photoField.fill(photoName);

  await page.getByRole('button', { name: /^upload$/i }).click();

  await expect(createAlbumBtn).toBeVisible({ timeout: 60000 });
  // Avoid networkidle — many SPAs never go "idle" (analytics, websockets).

  await expect(page.getByText(albumName, { exact: true })).toBeVisible({ timeout: 15000 });
  await expect(photoField).not.toBeVisible({ timeout: 10000 });
});
