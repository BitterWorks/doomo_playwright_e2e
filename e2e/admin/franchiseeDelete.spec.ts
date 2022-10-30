import { test } from '@playwright/test';
import login from './auth/login';
import removeClient from './clientes/removeClient';
import logout from './auth/logout';
import { editedClientExample } from '../config/franchiseeConsts';
import { BASE_URL } from '../config/config';
import ClientsPage from './pages/clients-page';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';


export default function createTests() {
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

  test('franchisee delete', async ({ page }) => {
    const editedClientsPage = new ClientsPage(page, editedClientExample)
    const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)

    await removeClient(editedClientsPage, clientsNavBarPage)
  })
}