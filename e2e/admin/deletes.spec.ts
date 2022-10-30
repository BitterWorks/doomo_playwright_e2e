import { expect, test } from '@playwright/test';
import { editedClientExample } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import removeClient from './clientes/removeClient';
import AdminNavbarPage, { Pages } from './pages/admin-navbar-page';
import ClientsPage from './pages/clients-page';


test.describe('agent', async () => {
    test.use({
        storageState: 'authAgent.json'
    })
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/admin`);
        await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
    })

    test('agent delete', async ({ page }) => {
        const editedClientsPage = new ClientsPage(page, editedClientExample)
        const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)

        await removeClient(editedClientsPage, clientsNavBarPage)
    })
});

test.describe('franchisee', async () => {
    test.use({
        storageState: 'authFranchisee.json'
    })
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/admin`);
        await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
    })

    test('franchisee delete', async ({ page }) => {
        const editedClientsPage = new ClientsPage(page, editedClientExample)
        const clientsNavBarPage = new AdminNavbarPage(page, BASE_URL, Pages.Clientes)

        await removeClient(editedClientsPage, clientsNavBarPage)
    })
})