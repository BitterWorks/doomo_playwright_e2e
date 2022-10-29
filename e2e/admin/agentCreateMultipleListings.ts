import { test } from '@playwright/test';
import { listingExample } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import login from './auth/login';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ListingsPage from './pages/listings-page';
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

    test('agent flow', async ({ page }) => {
      const listingsPage = new ListingsPage(page, listingExample)
      const listingsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Publicaciones)

      // Create multiple listings to test portal order and pagination
      const priceFactor = 1100
      for (let i = 1; i < 20; i++) {
        console.log(`creating listing n: ${i}`)
        listingExample.price = (priceFactor*i).toString()
        await createListing(listingsPage, listingsNavBarPage)
      }

      
    });
}