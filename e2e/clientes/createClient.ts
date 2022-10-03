import { expect, Page } from '@playwright/test';

async function createClient (page: Page, baseUrl: string, client: IClient) {

  // Click text=Clientes
  await page.locator('text=Clientes').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/clientes`);

  // Click text=Nuevo Cliente
  await page.locator('text=Nuevo Cliente').click();

  // Fill [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').fill(client.firstname);

  // Fill [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').fill(client.lastname);

  // Fill [placeholder="Dirección de email"]
  await page.locator('[placeholder="Dirección de email"]').fill(client.email);

  // Fill [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').fill(client.phone);

  // Fill [placeholder="Fecha de cumpleaños"]
  await page.locator('[placeholder="Fecha de cumpleaños"]').fill(client.birthday);

  // Fill [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').fill(client.pasport);

  // Select BO
  await page.locator('select[name="passportCountryId"]').selectOption(client.pasportCountry);

  // Fill [placeholder="Ingrese un nro\. de CI "]
  await page.locator('[placeholder="Ingrese un nro\\. de CI "]').fill(client.identificationCard);

  // Fill [placeholder="Ingrese un nro\. de NIT "]
  await page.locator('[placeholder="Ingrese un nro\\. de NIT "]').fill(client.nit);

  // Click text=Crear cliente
  await page.locator('text=Crear cliente').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/clientes#close`);

};

export default createClient