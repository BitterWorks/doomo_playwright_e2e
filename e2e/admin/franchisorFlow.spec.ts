import { test } from '@playwright/test';
import login from './auth/login';
import createClient from './clientes/createClient';
import editClient from './clientes/editClient';
import { clientExample, editedClientExample, editedListingExample, editedPropertyExample, listingExample, propertyExample } from '../config/agentConsts';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';
import ListingsPage from './pages/listings-page';
import PropiertiesPage from './pages/properties-page';
import createProperty from './propiedades/createProperty';
import editProperty from './propiedades/editProperty';
import createListing from './publicaciones/createListing';
import editListing from './publicaciones/editListing';
import { BASE_URL } from '../config/config';


export default function createTests() {
    test.beforeEach(async ({ page }) => {
      const userEmail = process.env.EMAIL_FRANCHISOR
      const userPassword = process.env.PASSWORD_FRANCHISOR
      if (userEmail && userPassword)
        await login(page, BASE_URL, userEmail, userPassword)
      else { console.log('Invalid User Email'); return }

      // test.use({
      //   storageState: 'auth.json'
      // });
    })

    test('superadmin flow', async ({ page }) => {
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