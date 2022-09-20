import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://staging.doomobr.com/
  await page.goto('https://staging.doomobr.com/');

  // Click nav >> text=Publicaciones
  await page.locator('nav >> text=Publicaciones').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/publicaciones/BO');

  // Click #footer-menu >> text=Contacto
  await page.locator('#footer-menu >> text=Contacto').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/contacto');

});