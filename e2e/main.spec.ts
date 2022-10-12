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
import PropiertiesPage from './pages/properties-page';
import ClientsPage from './pages/clients-page';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ListingsPage from './pages/listings-page';

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
  const clientsPage = new ClientsPage(page)
  const propertiesPage = new PropiertiesPage(page)
  const listingsPage = new ListingsPage(page)

  const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)
  const propertiesNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Propiedades)
  const listingsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Publicaciones)
  
  await createClient(page, clientsPage, clientsNavBarPage, clientExample)
  await editClient(page, clientsPage, clientsNavBarPage, clientExample)
  await createProperty(page, propertiesPage, propertiesNavBarPage , clientExample)
  await editProperty(page, propertiesPage, propertiesNavBarPage , propertyExample)
  await createListing(page, listingsPage, listingsNavBarPage, listingExample)
  await editListing(page, listingsPage, listingsNavBarPage, listingExample)
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