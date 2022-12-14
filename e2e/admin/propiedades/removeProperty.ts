import test, { expect, Page } from '@playwright/test';
import { IClient, IProperty } from '../../config/interfaces';

async function editProperty(page: Page, baseUrl: string, property: IProperty) {
    // Go to http://localhost:3000/admin
    await page.goto(`${baseUrl}/admin/propiedades`);

    // Click text=Juan PerezDepartamentoespaĆ±a 22La mejor casa >> button >> nth=1
    await page.locator('text=Juan PerezDepartamentoespaĆ±a 22La mejor casa >> button').nth(1).click();
}

export default editProperty