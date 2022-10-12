import { expect, Page } from '@playwright/test';
import { IListing } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function editListing(page: Page, listignPage: ListingsPage, listingsNavBarPage: AdminNavbarPage, listing: IListing) {

  await listingsNavBarPage.selector.click();

  // Click text=Casa centroCompraUS$3333venta casaimendivil@doomobienesraices.com >> button >> nth=0
  await page.locator(`text=${listing.title}${listing.operation}${listing.currency} >> button`).first().click();

  // Check text=Boliviano >> input[name="currencyCode"]
  await page.locator('text=Boliviano >> input[name="currencyCode"]').check();

  // Fill input[name="price"]
  await page.locator('input[name="price"]').fill('4444');

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('venta casa hermosa');

  // Click text=Guardar cambios
  await page.locator('text=Guardar cambios').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
}

export default editListing