import { expect, test } from '@playwright/test';
import { BASE_URL } from '../config/config';

export default function createTests() {

    test('home', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page.locator('text=Propiedades en Bolivia')).toBeVisible()
        await expect(page.locator('text=Publicaciones Recientes')).toBeVisible()
        await expect(page.locator('text=Nuestra Experiencia')).toBeVisible()
        await expect(page.locator('text=País actual: Bolivia')).toBeVisible()
        await expect(page.locator('text=gerencia@doomobienesraices.com')).toBeVisible()
        await expect(page.locator('text=facebook.com/doomobienesraices')).toBeVisible()
        await expect(page.locator('text=[Powered by Bitterworks]')).toBeVisible()
        await page.locator('#search >> text=Ver publicaciones').click();
        await expect(page).toHaveURL(`${BASE_URL}/publicaciones/BO`);
    });
}