import { Page } from '@playwright/test';
async function login(page: Page, baseUrl, userEmail: string, userPassword) {
  await page.goto(`${baseUrl}/admin/login`);
  await page.locator('[placeholder="Email"]').fill(userEmail);
  await page.locator('[placeholder="Contraseña"]').fill(userPassword);
  await page.locator('button:has-text("Ingresá")').click();
}

export default login;