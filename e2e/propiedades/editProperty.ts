import test, { expect, Page } from '@playwright/test';
import { IClient } from '../interfaces.d';

async function editProperty(page: Page, baseUrl: string, client: IClient) {

    // Go to http://localhost:3000/admin
    await page.goto(`${baseUrl}/admin/propiedades`);

    await page.locator('text=Juan PerezDepartamentoespaña 22La mejor casa >> button').first().click();

    //   await page.locator(`text=${client.firstname} ${client.lastname} >> button`).first().click();

    // Fill input[name="zip-code"]
    await page.locator('input[name="zip-code"]').fill('333333');

    // Check text=En pozo >> input[type="checkbox"]
    await page.locator('text=En pozo >> input[type="checkbox"]').check();

    // Check text=Parrilla >> input[type="checkbox"]
    await page.locator('text=Parrilla >> input[type="checkbox"]').check();

    // Uncheck text=Piscina >> input[type="checkbox"]
    await page.locator('text=Piscina >> input[type="checkbox"]').uncheck();

    // Check text=Piscina >> input[type="checkbox"]
    await page.locator('text=Piscina >> input[type="checkbox"]').check();

    // Fill text=Dormitorios >> input[type="number"]
    await page.locator('text=Dormitorios >> input[type="number"]').fill('3');

    // Click text=Editar propiedad
    await page.locator('text=Editar propiedad').click();

    // Click [aria-label="Close"]
    await page.locator('[aria-label="Close"]').click();
}

export default editProperty