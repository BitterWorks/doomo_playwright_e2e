import { test, expect } from '@playwright/test';
import createClient from './clientes/createClient';
import login from './auth/login';
import { clientExample, editedClientExample, editedListingExample, editedPropertyExample, listingExample, propertyExample } from './config/agentConsts';
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

    test('franchisee delete',async ({ page }) => {
      await removeClient(page, BASE_URL, clientExample)
      await logout(page, BASE_URL)
    })
}