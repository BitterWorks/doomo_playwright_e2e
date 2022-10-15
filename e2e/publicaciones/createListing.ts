import { expect, Page } from '@playwright/test';
import { IListing } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function createListing(page: Page, listingPage: ListingsPage, listingsNavBarPage: AdminNavbarPage, listing: IListing) {

  await listingsNavBarPage.selector.click();
  await expect(page).toHaveURL(listingsNavBarPage.url);
  await listingPage.newListingButton.click()

  // Click [placeholder="Seleccionar propiedad"]
  await page.locator('[placeholder="Seleccionar propiedad"]').click();

  // Click text=Juan Perez | Departamento | españa 22 | La mejor casa >> nth=1
  await page.locator(`text=${listing.property.client.firstname} ${listing.property.client.lastname}`).nth(1).click();

  // Check text=Compra >> input[name="operationId"]
  await page.locator('#properties >> text=Venta >> input[name="operationId"]').check();

  // Check text=US Dollar >> input[name="currencyCode"]
  await page.locator('text=US Dollar >> input[name="currencyCode"]').check();

  // Fill input[name="price"]
  await page.locator('input[name="price"]').fill('3333');

  // Fill input[name="title"]
  await page.locator('input[name="title"]').fill(listing.title);

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill(listing.description);

  // Click text=Crear publicación
  await page.locator('text=Crear publicación').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
}

export default createListing