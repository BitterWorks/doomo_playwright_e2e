import { test, expect } from '@playwright/test';
import createClient from './clientes/createClient';
import login from './auth/login';
import { clientExample } from './const';
import createProperty from './propiedades/createProperty';
import removeClient from './clientes/removeClient';

const BASE_URL = process.env.BASE_URL || "https://staging.doomobr.com"

test.beforeEach(async ({ page }) => {
  await login(page, BASE_URL)
})

test('create client', async ({ page }) => {
  await createClient(page, BASE_URL, clientExample)
  const userEmail = process.env.EMAIL
  if (userEmail)
    await createProperty(page, BASE_URL, clientExample, userEmail)
  else { console.log('Invalid User Email'); return }
});

// test('create property', async ({ page }) => {

// })

test.afterAll(async ({ page }) => {
  await removeClient(page, BASE_URL, clientExample)
})