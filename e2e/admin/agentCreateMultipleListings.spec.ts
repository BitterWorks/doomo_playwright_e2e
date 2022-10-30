import { expect, test } from '@playwright/test';
import { listingExample } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ListingsPage from './pages/listings-page';
import createListing from './publicaciones/createListing';


export default function createTests() {
  test.setTimeout(800000)
  test.use({
    storageState: 'authAgent.json'
  })
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
  })

  test('agent flow', async ({ page }) => {
    const listingsPage = new ListingsPage(page, listingExample)
    const listingsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Publicaciones)

    // Create multiple listings to test portal order and pagination
    const priceFactor = 1100
    for (let i = 1; i < 20; i++) {
      console.log(`creating listing n: ${i}`)
      listingExample.price = (priceFactor * i).toString()
      await createListing(listingsPage, listingsNavBarPage)
    }


  });
}