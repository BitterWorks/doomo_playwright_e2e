import { expect, test } from '@playwright/test';
import { profile } from '../config/agentConsts';
import { BASE_URL } from '../config/config';
import login from './auth/login';

export default function createTests() {
    test.beforeEach(async ({ page }) => {
        const userEmail = process.env.EMAIL_AGENT
        const userPassword = process.env.PASSWORD_AGENT
        console.log(BASE_URL)
        console.log(userEmail)
        console.log(userPassword)
        if (userEmail && userPassword)
            await login(page, BASE_URL, userEmail, userPassword)
        else { console.log('Invalid User Email'); return }

        // test.use({
        //   storageState: 'auth.json'
        // });
    })

    test('test', async ({ page }) => {
        await page.locator('#editProfile').click();
        await page.locator('[placeholder="Nombre"]').fill(profile.firstname);
        await page.locator('[placeholder="Apellido"]').fill(profile.lastname);
        await page.locator('[placeholder="Número de teléfono"]').fill(profile.phone);
        await page.locator('text=Actualizar Perfil').click();
        await expect(page.locator('h1:has-text("Inicio")')).toBeVisible()
    })
}