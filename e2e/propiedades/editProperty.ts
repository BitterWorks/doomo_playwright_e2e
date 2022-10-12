import test, { expect, Page } from '@playwright/test';
import { IClient, IProperty } from '../interfaces.d';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import PropiertiesPage from '../pages/properties-page';

async function editProperty(page: Page, propertiesPage: PropiertiesPage, propertiesNavBarPage: AdminNavbarPage, property: IProperty) {

    await propertiesNavBarPage.selector.click();

    await page.locator(`text=${property.client.firstname} ${property.client.lastname}${property.propertyType}${property.address} >> button`).first().click();

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