import { expect, test } from '@playwright/test';
import { profile } from '../config/agentConsts';
import { BASE_URL } from '../config/config';

export default function createTests() {
    test.use({
        storageState: 'authAgent.json'
    })
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE_URL}/admin`);
        await expect(page.locator('text=Doomo Admin')).toBeVisible({ timeout: 60000 })
    })

    test('edit profile franchisee', async ({ page }) => {
        await page.locator('#editProfile').click();
        await page.locator('[placeholder="Nombre"]').fill(profile.firstname);
        await page.locator('[placeholder="Apellido"]').fill(profile.lastname);
        await page.locator('[placeholder="Número de teléfono"]').fill(profile.phone);
        await page.locator('text=Actualizar Perfil').click();
        await expect(page.locator('h1:has-text("Inicio")')).toBeVisible()
        await page.locator(`text=${profile.firstname}`).click();
    })
}