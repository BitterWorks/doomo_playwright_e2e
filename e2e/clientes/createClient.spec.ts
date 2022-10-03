import { expect, Page } from '@playwright/test';

async function createClient (page: Page, baseUrl: string) {

  // Click text=Clientes
  await page.locator('text=Clientes').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/clientes`);

  // Click text=Nuevo Cliente
  await page.locator('text=Nuevo Cliente').click();

  // Fill [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').fill('Juan');

  // Fill [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').fill('Perez');

  // Fill [placeholder="Dirección de email"]
  await page.locator('[placeholder="Dirección de email"]').fill('juan@test.com');

  // Fill [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').fill('111111');

  // Fill [placeholder="Fecha de cumpleaños"]
  await page.locator('[placeholder="Fecha de cumpleaños"]').fill('1999-07-07');

  // Fill [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').fill('222222');

  // Select BO
  await page.locator('select[name="passportCountryId"]').selectOption('BO');

  // Fill [placeholder="Ingrese un nro\. de CI "]
  await page.locator('[placeholder="Ingrese un nro\\. de CI "]').fill('333333');

  // Fill [placeholder="Ingrese un nro\. de NIT "]
  await page.locator('[placeholder="Ingrese un nro\\. de NIT "]').fill('444444');

  // Click text=Crear cliente
  await page.locator('text=Crear cliente').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/clientes#close`);

};

export default createClient