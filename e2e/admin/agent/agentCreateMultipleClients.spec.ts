import { expect, test } from '@playwright/test';
import { clientExample } from '../../config/agentConsts';
import { BASE_URL } from '../../config/config';
import login from '../auth/login';
import createClient from '../clientes/createClient';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';



test.setTimeout(80000)
test.use({
  storageState: 'authAgent.json'
})
test.beforeEach(async ({ page }) => {
  await page.goto(`${BASE_URL}/admin`);
  await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
})

for (let i = 1; i <= 13; i++)
  test(`agent create multiple clients ${i}`, async ({ page }) => {

    const clientsPage = new ClientsPage(page, clientExample)
    const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)

    clientExample.email = Date.now().toString()
    clientExample.phone = Date.now().toString()
    await createClient(clientsPage, clientsNavBarPage)
  })