import { test, expect } from '@playwright/test';
import createClient from './clientes/createClient';
import login from './auth/login';
import { clientExample, listingExample, propertyExample } from './const';
import createProperty from './propiedades/createProperty';
import removeClient from './clientes/removeClient';
import createListing from './publicaciones/createListing';
import logout from './auth/logout';
import editClient from './clientes/editClient';
import editProperty from './propiedades/editProperty';
import editListing from './publicaciones/editListing';

const BASE_URL = process.env.BASE_URL || "https://staging.doomobr.com"

test.beforeEach(async ({ page }) => {
  const userEmail = process.env.EMAIL
  const userPassword = process.env.PASSWORD
  if (userEmail && userPassword)
    await login(page, BASE_URL, userEmail, userPassword)
  else { console.log('Invalid User Email'); return }

  // test.use({
  //   storageState: 'auth.json'
  // });
})

test('agent flow', async ({ page }) => {
  await createClient(page, BASE_URL, clientExample)
  await editClient(page, BASE_URL, clientExample)
  await createProperty(page, BASE_URL, clientExample)
  await editProperty(page, BASE_URL, propertyExample)
  await createListing(page, BASE_URL, listingExample)
  await editListing(page, BASE_URL, listingExample)
  // portal que esta todo creado
});

// test('franchisee', async ({ page }) => {

//   // mismos test que el agente + ver lo que creo el agente
//   // portal que esta todo creado
// })

// test('roles', async ({ page }) => {
//   // agente no puede ver lo que creo el franchisee
// })

// test('franchiser', async ({ page }) => {
//   // 
// })

test.afterAll(async ({ page }) => {
  await removeClient(page, BASE_URL, clientExample)
  await logout(page, BASE_URL)
})