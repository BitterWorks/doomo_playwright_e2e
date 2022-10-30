import { expect, Page } from '@playwright/test';
async function login(page: Page, baseUrl: string, userEmail: string, userPassword: string) {
  await page.goto(`${baseUrl}/admin/login`);
  await page.locator('[placeholder="Email"]').fill(userEmail);
  await page.locator('[placeholder="Contraseña"]').fill(userPassword);
  await page.locator('button:has-text("Ingresá")').click();
  await expect(page.locator('text=Doomo Admin')).toBeVisible({timeout: 60000})

}

export default login;