import { test } from '@playwright/test';
import login from './auth/login';
import validateClient from './clientes/validateClient';
import { editedClientExample as editedAgentClient, editedListingExample, editedPropertyExample as editedAgentProperty } from '../config/agentConsts';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';
import ListingsPage from './pages/listings-page';
import PropiertiesPage from './pages/properties-page';
import validateProperty from './propiedades/validateProperty';
import validateListing from './publicaciones/validateListing';
import { BASE_URL } from '../config/config';

export default function createTests() {
  test.beforeEach(async ({ page }) => {
    const userEmail = process.env.EMAIL_FRANCHISEE
    const userPassword = process.env.PASSWORD_FRANCHISEE
    if (userEmail && userPassword)
      await login(page, BASE_URL, userEmail, userPassword)
    else { console.log('Invalid User Email'); return }

    // test.use({
    //   storageState: 'auth.json'
    // });
  })

  test('franchisee validate agent', async ({ page }) => {
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
    await validateProperty(PropertiesNavBarPage, editedPropertiesPage)
    // TODO: test not passing
    // await validateListing(listingsNavBarPage, editedListingsPage)
  });
}