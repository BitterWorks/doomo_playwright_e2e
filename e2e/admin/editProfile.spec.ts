import { expect, test } from '@playwright/test';
import { BASE_URL } from '../config/config';

import { profile as agentProfile } from '../config/agentConsts';
import { profile as franchiseeProfile } from '../config/franchiseeConsts';

test.describe('agent', async () => {
    test.use({
        storageState: 'authAgent.json'
    })
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/admin`);
        await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
    })

    test('edit agentProfile', async ({ page }) => {
        await page.locator('#editProfile').click();
        await page.locator('[placeholder="Nombre"]').fill(agentProfile.firstname);
        await page.locator('[placeholder="Apellido"]').fill(agentProfile.lastname);
        await page.locator('[placeholder="Número de teléfono"]').fill(agentProfile.phone);
        await page.locator('text=Actualizar Perfil').click();
        await expect(page.locator('h1:has-text("Inicio")')).toBeVisible()
        await page.locator(`text=${agentProfile.firstname}`).click();
    })
})


test.describe('franchisee', async () => {
    test.use({
        storageState: 'authFranchisee.json'
    })
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/admin`);
        await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
    })

    test('edit agentProfile', async ({ page }) => {
        await page.locator('#editProfile').click();
        await page.locator('[placeholder="Nombre"]').fill(franchiseeProfile.firstname);
        await page.locator('[placeholder="Apellido"]').fill(franchiseeProfile.lastname);
        await page.locator('[placeholder="Número de teléfono"]').fill(franchiseeProfile.phone);
        await page.locator('text=Actualizar Perfil').click();
        await expect(page.locator('h1:has-text("Inicio")')).toBeVisible()
        await page.locator(`text=${franchiseeProfile.firstname}`).click();
    })
})