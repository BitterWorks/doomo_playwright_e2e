import { test, expect } from '@playwright/test';
import createClient from './clientes/createClient';
import login from './auth/login';
import { clientExample, editedClientExample, editedListingExample, editedPropertyExample, listingExample, propertyExample } from './config/franchiseeConsts';
import createProperty from './propiedades/createProperty';
import removeClient from './clientes/removeClient';
import createListing from './publicaciones/createListing';
import logout from './auth/logout';
import editClient from './clientes/editClient';
import editProperty from './propiedades/editProperty';
import editListing from './publicaciones/editListing';
import PropiertiesPage from './pages/properties-page';
import ClientsPage from './pages/clients-page';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ListingsPage from './pages/listings-page';


export default function createTests() {
    const BASE_URL = process.env.BASE_URL || "https://staging.doomobr.com"
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