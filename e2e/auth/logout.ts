import { test, expect, Page } from '@playwright/test';

// test('test', async ({ page }) => {
async function logout(page: Page, baseUrl) {

  // Go to http://localhost:3000/admin
  await page.goto(`${baseUrl}/admin`);

  await expect(page).toHaveURL(`${baseUrl}/admin`);

  // Click text=Cerrar Sesión
  await page.locator('text=Cerrar Sesión').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/login`);
}

export default logout;