import { test } from '@playwright/test';
import login from './auth/login';
import validateClient from './clientes/validateClient';
import { editedClientExample as editedAgentClient } from './config/agentConsts';
import { editedPropertyExample as editedAgentProperty } from './config/agentConsts';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';
import PropiertiesPage from './pages/properties-page';
import validateProperty from './propiedades/validateProperty';

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
    const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)
    const editedClientsPage = new ClientsPage(page, editedAgentClient)

    // validate Agent Client
    await validateClient(clientsNavBarPage, editedClientsPage)

    const PropertiesNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Propiedades)
    const editedPropertiesPage = new PropiertiesPage(page, editedAgentProperty)

    // validate Agent Property
    await validateProperty(PropertiesNavBarPage, editedPropertiesPage)
  });
}