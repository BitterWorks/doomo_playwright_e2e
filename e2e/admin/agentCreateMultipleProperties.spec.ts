import { test } from '@playwright/test';
import { editedPropertyExample, listingExample, propertyExample } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import login from './auth/login';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
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

    test('agent create multiple properties', async ({ page }) => {
      const propertiesPage = new PropiertiesPage(page, editedPropertyExample)
      const propertiesNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Propiedades)

      for (let i = 1; i <= 13; i++) {
        console.log(`creating property n: ${i}`)
        await createProperty(propertiesPage, propertiesNavBarPage)
      }
    });
}