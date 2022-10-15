import { expect, Page } from '@playwright/test';
import { IClient } from '../interfaces.d';

async function removeClient (page: Page, baseUrl: string, client: IClient) {
   
    // Click text=Clientes
    await page.reload()
    await page.goto(`${baseUrl}/admin/clientes`);
    // Click text=JuanPerezjuan@test.comimendivil@doomobienesraices.com111111 >> button >> nth=1
    await page.locator(`text=${client.firstname}${client.lastname}${client.email}>> button`).nth(1).click();

};

export default removeClient