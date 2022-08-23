import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://staging.doomobr.com/admin/
  await page.goto('https://staging.doomobr.com/admin/');

  // Go to https://staging.doomobr.com/admin/login
  await page.goto('https://staging.doomobr.com/admin/login');

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('imendivil@doomobienesraices.com');

  // Fill [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').fill('Doomotja!9');

  // Click button:has-text("Ingresá")
  await page.locator('button:has-text("Ingresá")').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin');

  // await page.screenshot({ path: 'test-results/screenshot.png', fullPage: true });

  // Click text=Pedidos
  await page.locator('text=Pedidos').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/pedidos');

  // Click text=Clientes
  await page.locator('text=Clientes').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/clientes');

  // Click text=Propiedades
  await page.locator('text=Propiedades').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/propiedades');

  // Click nav >> text=Publicaciones
  await page.locator('nav >> text=Publicaciones').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/publicaciones');

  // Click text=Agentes
  await page.locator('text=Agentes').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/agentes');

  // Click text=Cerrar Sesión
  await page.locator('text=Cerrar Sesión').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/login');

});