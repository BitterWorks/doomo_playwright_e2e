import { test, expect, Page } from '@playwright/test';

// test('test', async ({ page }) => {
async function login(page: Page, baseUrl, userEmail: string, userPassword) {
  // Go to https://staging.doomobr.com/admin/
  await page.goto(`${baseUrl}/admin`);

  // Go to https://staging.doomobr.com/admin/login
  await page.goto(`${baseUrl}/admin/login`);

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(userEmail);

  // Fill [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').fill(userPassword);

  // Click button:has-text("Ingresá")
  await page.locator('button:has-text("Ingresá")').click();
}

export default login;