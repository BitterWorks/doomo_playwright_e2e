import { test, expect } from '@playwright/test';
import createClient from './clientes/createClient';
import login from './auth/login';
import { clientExample } from './const';
import createProperty from './propiedades/createProperty';
import removeClient from './clientes/removeClient';
import createListing from './publicaciones/createListing';
import logout from './auth/logout';

const BASE_URL = process.env.BASE_URL || "https://staging.doomobr.com"

test.beforeEach(async ({ page }) => {
  const userEmail = process.env.EMAIL
  const userPassword = process.env.PASSWORD
  if (userEmail && userPassword)
    await login(page, BASE_URL, userEmail, userPassword)
  else { console.log('Invalid User Email'); return }
})

test('create client', async ({ page }) => {
  await createClient(page, BASE_URL, clientExample)
  await createProperty(page, BASE_URL, clientExample)
  await createListing(page, BASE_URL, clientExample)
});
test.afterAll(async ({ page }) => {
  await removeClient(page, BASE_URL, clientExample)
  await logout(page, BASE_URL)
})