import { expect, test } from '@playwright/test';
import { editedPropertyExample, listingExample, propertyExample } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import login from './auth/login';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ListingsPage from './pages/listings-page';
import PropiertiesPage from './pages/properties-page';
import createProperty from './propiedades/createProperty';
import createListing from './publicaciones/createListing';


export default function createTests() {
  test.setTimeout(800000)
  test.use({
    storageState: 'authAgent.json'
  })
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator('text=Doomo Admin')).toBeVisible({timeout:60000})
  })

    test('agent create multiple properties', async ({ page }) => {
      const propertiesPage = new PropiertiesPage(page, editedPropertyExample)
      const propertiesNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Propiedades)

      for (let i = 1; i <= 13; i++) {
        console.log(`creating property n: ${i}`)
        await createProperty(propertiesPage, propertiesNavBarPage)
      }
    });
}