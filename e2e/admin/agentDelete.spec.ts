import { expect, test } from '@playwright/test';
import login from './auth/login';
import { editedClientExample } from '../config/agentConsts';
import removeClient from './clientes/removeClient';
import logout from './auth/logout';
import { BASE_URL } from '../config/config';
import ClientsPage from './pages/clients-page';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';


export default function createTests() {
  test.use({
    storageState: 'authAgent.json'
  })
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator('text=Doomo Admin')).toBeVisible({timeout:60000})
  })

    test('agent delete',async ({ page }) => {
      const editedClientsPage = new ClientsPage(page, editedClientExample)
      const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)

      await removeClient(editedClientsPage, clientsNavBarPage)
    })
}