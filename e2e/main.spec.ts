import { test, expect } from '@playwright/test';
import createClient from './clientes/createClient.spec';
import login from './login.spec';

const BASE_URL = process.env.BASE_URL || "https://staging.doomobr.com"

test('test', async ({ page }) => {
  await login(page, BASE_URL)
  // Go to`${BASE_URL}/
  // await page.goto(`${BASE_URL}/admin`);

  await createClient(page, BASE_URL)

  // // Click nav >> text=Publicaciones
  // await page.locator('nav >> text=Publicaciones').click();
  // await expect(page).toHaveURL(`${BASE_URL}/publicaciones/BO`);

  // // Click #footer-menu >> text=Contacto
  // await page.locator('#footer-menu >> text=Contacto').click();
  // await expect(page).toHaveURL(`${BASE_URL}/contacto`);


    // // Click text=Propiedades
    // await page.locator('text=Propiedades').click();
    // await expect(page).toHaveURL('http://localhost:3000/admin/propiedades');

});