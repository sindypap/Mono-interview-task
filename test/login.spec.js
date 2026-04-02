const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://demo.baasic.com/angular/starterkit-photo-gallery/main';

test('logs in user and verifies that user is logged in', async ({ page }) => {
  const username = 'Cynttest2';

  await page.goto(BASE_URL);

  const menu = page.getByRole('link', { name: 'Menu' }).first();
  await menu.hover();
  await menu.click();
  await page.getByRole('navigation').getByText('Login', { exact: true }).click();

  await page.getByRole('textbox', { name: /email or username/i }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill('Testtest123!');

  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await expect(page.getByRole('heading', { name: username })).toBeVisible({ timeout: 15000 });
});
