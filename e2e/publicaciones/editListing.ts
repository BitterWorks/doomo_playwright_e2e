import { expect, Page } from '@playwright/test';
import { IListing } from '../interfaces.d';

async function editListing(page: Page, baseUrl: string, listing: IListing) {

  // Go to http://localhost:3000/admin
  await page.goto(`${baseUrl}/admin/publicaciones`);

  // Click text=Casa centroCompraUS$3333venta casaimendivil@doomobienesraices.com >> button >> nth=0
  await page.locator(`text=${listing.title}${listing.operation}${listing.currency} >> button`).first().click();

  // Check text=Boliviano >> input[name="currencyCode"]
  await page.locator('text=Boliviano >> input[name="currencyCode"]').check();

  // Click input[name="price"]
  await page.locator('input[name="price"]').click();

  // Double click input[name="price"]
  await page.locator('input[name="price"]').dblclick();

  // Fill input[name="price"]
  await page.locator('input[name="price"]').fill('4444');

  // Click textarea[name="description"]
  await page.locator('textarea[name="description"]').click();

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('venta casa hermosa');

  // Click text=Guardar cambios
  await page.locator('text=Guardar cambios').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  await expect(page).toHaveURL('http://localhost:3000/admin/publicaciones#close');
}

export default editListing