import { expect, Page } from '@playwright/test';
import { IClient } from '../interfaces.d';

async function editClient(page: Page, baseUrl: string, client: IClient) {

  // Click text=Clientes
  await page.locator('a', {hasText:'Clientes'}).click();
  await expect(page).toHaveURL(`${baseUrl}/admin/clientes`);

  // Click text=JuanPerezjuan@test.comimendivil@doomobienesraices.com111111 >> button >> nth=0
  await page.locator(`text=${client.firstname}${client.lastname}${client.email} >> button`).first().click();

  // Fill [placeholder="Fecha de cumpleaños"]
  await page.locator('[placeholder="Fecha de cumpleaños"]').fill('1998-09-09');

  // Fill [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').fill('333333');

  // Select PY
  await page.locator('select[name="passportCountryId"]').selectOption('PY');

  // Fill [placeholder="Ingrese un nro\. de CI "]
  await page.locator('[placeholder="Ingrese un nro\\. de CI "]').fill('444444');

  // Fill [placeholder="Ingrese un nro\. de NIT "]
  await page.locator('[placeholder="Ingrese un nro\\. de NIT "]').fill('555555');

  // Click text=Actualizar cliente
  await page.locator('text=Actualizar cliente').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
};

export default editClient