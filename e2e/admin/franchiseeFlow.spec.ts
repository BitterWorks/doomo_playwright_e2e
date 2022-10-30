import { expect, test } from '@playwright/test';
import { BASE_URL } from '../config/config';
import { clientExample, editedClientExample, editedListingExample, editedPropertyExample, listingExample, propertyExample } from '../config/franchiseeConsts';
import createClient from './clientes/createClient';
import editClient from './clientes/editClient';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';
import ListingsPage from './pages/listings-page';
import PropiertiesPage from './pages/properties-page';
import createProperty from './propiedades/createProperty';
import editProperty from './propiedades/editProperty';
import createListing from './publicaciones/createListing';
import editListing from './publicaciones/editListing';


export default function createTests() {
  test.use({
    storageState: 'authAgent.json'
  })
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
  })

  test('franchisee flow', async ({ page }) => {
    const clientsPage = new ClientsPage(page, clientExample)
    const propertiesPage = new PropiertiesPage(page, propertyExample)
    const listingsPage = new ListingsPage(page, listingExample)

    const editedClientsPage = new ClientsPage(page, editedClientExample)
    const editedPropertiesPage = new PropiertiesPage(page, editedPropertyExample)
    const editedListingsPage = new ListingsPage(page, editedListingExample)

    const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)
    const propertiesNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Propiedades)
    const listingsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Publicaciones)

    await createClient(clientsPage, clientsNavBarPage)
    await editClient(clientsPage, clientsNavBarPage, editedClientsPage)
    await createProperty(propertiesPage, propertiesNavBarPage)
    await editProperty(propertiesPage, propertiesNavBarPage, editedPropertiesPage)
    await createListing(listingsPage, listingsNavBarPage)
    await editListing(listingsPage, listingsNavBarPage, editedListingsPage)
  });
}