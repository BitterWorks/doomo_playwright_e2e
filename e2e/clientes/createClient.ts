import { expect, Page } from '@playwright/test';
import { IClient } from '../interfaces.d';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function createClient (page: Page, clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage, client: IClient) {

  await clientsNavBarPage.selector.click();
  await expect(page).toHaveURL(clientsNavBarPage.url)
  await clientsPage.newClientButton.click()

  // Fill [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').fill(client.firstname);

  // Fill [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').fill(client.lastname);

  // Fill [placeholder="Dirección de email"]
  await page.locator('[placeholder="Dirección de email"]').fill(client.email);

  // Fill [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').fill(client.phone);

  // Fill [placeholder="Fecha de cumpleaños"]
  await page.locator('[placeholder="Fecha de cumpleaños"]').fill(client.birthday);

  // Fill [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').fill(client.pasport);

  // Select BO
  await page.locator('select[name="passportCountryId"]').selectOption(client.pasportCountry);

  // Fill [placeholder="Ingrese un nro\. de CI "]
  await page.locator('[placeholder="Ingrese un nro\\. de CI "]').fill(client.identificationCard);

  // Fill [placeholder="Ingrese un nro\. de NIT "]
  await page.locator('[placeholder="Ingrese un nro\\. de NIT "]').fill(client.nit);

  // Click text=Crear cliente
  await page.locator('text=Crear cliente').click();

  // Alert created client
  await page.locator('div[role="alert"]:has-text("Éxito Cliente creado con éxito")').click();
};

export default createClient