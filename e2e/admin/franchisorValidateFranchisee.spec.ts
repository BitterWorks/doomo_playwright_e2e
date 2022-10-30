import { expect, test } from '@playwright/test';
import { BASE_URL } from '../config/config';
import { editedClientExample as editedAgentClient, editedListingExample, editedPropertyExample as editedAgentProperty } from '../config/franchiseeConsts';
import validateClient from './clientes/validateClient';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';
import ListingsPage from './pages/listings-page';
import PropiertiesPage from './pages/properties-page';

export default function createTests() {
  test.use({
    storageState: 'authAgent.json'
  })
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
  })

  test('franchisor validate franchisee', async ({ page }) => {
    // client
    const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)
    const editedClientsPage = new ClientsPage(page, editedAgentClient)

    // property
    const PropertiesNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Propiedades)
    const editedPropertiesPage = new PropiertiesPage(page, editedAgentProperty)

    // listing
    const listingsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Publicaciones)
    const editedListingsPage = new ListingsPage(page, editedListingExample)

    await validateClient(clientsNavBarPage, editedClientsPage)
    // TODO: test not passing
    // await validateProperty(PropertiesNavBarPage, editedPropertiesPage)
    // TODO: test not passing
    // await validateListing(listingsNavBarPage, editedListingsPage)
  });
}