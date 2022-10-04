import { test, expect, Page } from '@playwright/test';

async function createListing(page: Page, baseUrl: string, client: IClient) {

  // Click nav >> text=Publicaciones
  await page.locator('nav >> text=Publicaciones').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/publicaciones`);

  // Click text=Nueva Publicación
  await page.locator('text=Nueva Publicación').click();

  // Click [placeholder="Seleccionar propiedad"]
  await page.locator('[placeholder="Seleccionar propiedad"]').click();

  // Click text=Juan Perez | Departamento | españa 22 | La mejor casa >> nth=1
  await page.locator(`text=${client.firstname} ${client.lastname}`).nth(1).click();

  // Check text=Compra >> input[name="operationId"]
  await page.locator('text=Compra >> input[name="operationId"]').check();

  // Check text=US Dollar >> input[name="currencyCode"]
  await page.locator('text=US Dollar >> input[name="currencyCode"]').check();

  // Fill input[name="price"]
  await page.locator('input[name="price"]').fill('3333');

  // Fill input[name="title"]
  await page.locator('input[name="title"]').fill('Casa centro');

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('venta casa');

  // Click text=Crear publicación
  await page.locator('text=Crear publicación').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
}

export default createListing