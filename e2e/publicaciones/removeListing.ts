import { expect, Page } from '@playwright/test';
import { IListing } from '../interfaces';

async function editListing(page: Page, baseUrl: string, listing: IListing) {

  // Go to http://localhost:3000/admin
  await page.goto(`${baseUrl}/admin/publicaciones`);

  // Click text=Casa centroCompraBs.4444venta casa hermosaimendivil@doomobienesraices.com >> button >> nth=1
  await page.locator('text=Casa centroVentaBs.4444venta casa hermosaimendivil@doomobienesraices.com >> button').nth(1).click();

}

export default editListing