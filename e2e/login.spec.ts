import { test, expect, Page } from '@playwright/test';


const LOGIN_EMAIL = process.env.EMAIL
const LOGIN_PASSWORD = process.env.PASSWORD


// test('test', async ({ page }) => {
async function login(page: Page, baseUrl) {

  if (LOGIN_EMAIL && LOGIN_PASSWORD) {
    // Go to https://staging.doomobr.com/admin/
    await page.goto(`${baseUrl}/admin`);

    // Go to https://staging.doomobr.com/admin/login
    await page.goto(`${baseUrl}/admin/login`);

    // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill(LOGIN_EMAIL);

    // Fill [placeholder="Contraseña"]
    await page.locator('[placeholder="Contraseña"]').fill(LOGIN_PASSWORD);

    // Click button:has-text("Ingresá")
    await page.locator('button:has-text("Ingresá")').click();
    await expect(page).toHaveURL(`${baseUrl}/admin`);

    // await page.screenshot({ path: 'test-results/screenshot.png', fullPage: true });

    // // Click text=Pedidos
    // await page.locator('text=Pedidos').click();
    // await expect(page).toHaveURL(`${baseUrl}/admin/pedidos`);

    // // Click text=Clientes
    // await page.locator('text=Clientes').click();
    // await expect(page).toHaveURL(`${baseUrl}/admin/clientes`);

    // // Click text=Propiedades
    // await page.locator('text=Propiedades').click();
    // await expect(page).toHaveURL(`${baseUrl}/admin/propiedades`);

    // // Click nav >> text=Publicaciones
    // await page.locator('nav >> text=Publicaciones').click();
    // await expect(page).toHaveURL(`${baseUrl}/admin/publicaciones`);

    // // Click text=Agentes
    // await page.locator('text=Agentes').click();
    // await expect(page).toHaveURL(`${baseUrl}/admin/agentes`);

    // // Click text=Cerrar Sesión
    // // await page.locator('text=Cerrar Sesión').click();
    // // await expect(page).toHaveURL("/admin/login");
  }
  else {
    console.log("Credentials not provided")
  }
}

export default login;