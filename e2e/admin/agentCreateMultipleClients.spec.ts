import { test } from '@playwright/test';
import { clientExample, listingExample, propertyExample } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import login from './auth/login';
import createClient from './clientes/createClient';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';
import ListingsPage from './pages/listings-page';
import PropiertiesPage from './pages/properties-page';
import createProperty from './propiedades/createProperty';
import createListing from './publicaciones/createListing';


export default function createTests() {
    test.beforeEach(async ({ page }) => {
      const userEmail = process.env.EMAIL_AGENT
      const userPassword = process.env.PASSWORD_AGENT
      if (userEmail && userPassword)
        await login(page, BASE_URL, userEmail, userPassword)
      else { console.log('Invalid User Email'); return }

      // test.use({
      //   storageState: 'auth.json'
      // });
    })

    test('agent create multiple clients', async ({ page }) => {
      const clientsPage = new ClientsPage(page, clientExample)
      const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)

      for (let i = 1; i <= 13; i++) {
        console.log(`creating client n: ${i}`)
        clientExample.email = Date.now().toString()
        clientExample.phone = Date.now().toString()
        await createClient(clientsPage, clientsNavBarPage)
      }
    });
}