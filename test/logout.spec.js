//write a playwright test that:
//logs in user
// a new ui opens with create album button
// hover over hamburger icon for menu
// click on menu
// click on log out
// verify user is logged out by having the login page open

const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://demo.baasic.com/angular/starterkit-photo-gallery/main';

test('logs in user, opens menu, logs out, and verifies user is logged out', async ({ page }) => {
  const username = 'Cynttest2';
  const password = 'Testtest123!';

  // Go to the base URL
  await page.goto(BASE_URL);

  // Open the menu and click login
  const menu = page.getByRole('link', { name: 'Menu' }).first();
  await menu.hover();
  await menu.click();
  await page.getByRole('navigation').getByText('Login', { exact: true }).click();

  // Enter login details and submit
  await page.getByRole('textbox', { name: /email or username/i }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  // Wait for the UI to show user is logged in (create album button should appear)
  const createAlbumBtn = page.getByRole('button', { name: /create album/i });
  await expect(createAlbumBtn).toBeVisible({ timeout: 15000 });

  // Hover menu and click to open it again
  await menu.hover();
  await menu.click();

  // Click the logout menu entry (UI label is "Log out", not "Logout")
  await page.getByRole('navigation').getByText('Log out', { exact: true }).click();

  // Expect the login form to be visible again, which means the user is logged out
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible({ timeout: 15000 });
});
