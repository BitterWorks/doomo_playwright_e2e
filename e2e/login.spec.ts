import { test, expect } from '@playwright/test';
import { environment, login } from '../constants';


test('test', async ({ page }) => {

  // Go to https://staging.doomobr.com/admin/
  await page.goto(environment.adminUrl);

  // Go to https://staging.doomobr.com/admin/login
  await page.goto(`${environment.adminUrl}/login`);

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(login.email);

  // Fill [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').fill(login.password);

  // Click button:has-text("Ingresá")
  await page.locator('button:has-text("Ingresá")').click();
  await expect(page).toHaveURL(environment.adminUrl);

  // await page.screenshot({ path: 'test-results/screenshot.png', fullPage: true });

  // Click text=Pedidos
  await page.locator('text=Pedidos').click();
  await expect(page).toHaveURL(`${environment.adminUrl}/pedidos`);

  // Click text=Clientes
  await page.locator('text=Clientes').click();
  await expect(page).toHaveURL(`${environment.adminUrl}/clientes`);

  // Click text=Propiedades
  await page.locator('text=Propiedades').click();
  await expect(page).toHaveURL(`${environment.adminUrl}/propiedades`);

  // Click nav >> text=Publicaciones
  await page.locator('nav >> text=Publicaciones').click();
  await expect(page).toHaveURL(`${environment.adminUrl}/publicaciones`);

  // Click text=Agentes
  await page.locator('text=Agentes').click();
  await expect(page).toHaveURL(`${environment.adminUrl}/agentes`);

  // Click text=Cerrar Sesión
  await page.locator('text=Cerrar Sesión').click();
  await expect(page).toHaveURL(`${environment.adminUrl}/login`);

});