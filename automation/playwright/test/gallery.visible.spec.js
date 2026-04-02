const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://demo.baasic.com/angular/starterkit-photo-gallery/main';

test('opens the homepage, opens gallery, and verifies images', async ({ page }) => {
  await page.goto(BASE_URL);

  // Hero control is exposed as an image in the a11y tree (not necessarily a literal <img> tag)
  await page.getByRole('img', { name: 'Display photos' }).click();

  // This page renders gallery visuals; use role-based queries for images
  const images = page.getByRole('img');
  await expect(images.first()).toBeVisible({ timeout: 15000 });
  expect(await images.count()).toBeGreaterThan(0);
});
