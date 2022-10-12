import { expect, Page } from '@playwright/test';
import { IClient } from '../interfaces.d';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function createClient (page: Page, clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage, client: IClient) {

  await clientsNavBarPage.selector.click();
  await expect(page).toHaveURL(clientsNavBarPage.url)
  await clientsPage.newClientButton.click()

  await clientsPage.clientNameInput.fill(client.firstname);
  await clientsPage.clientLastnameInput.fill(client.lastname);
  await clientsPage.clientEmailInput.fill(client.email);
  await clientsPage.clientPhoneInput.fill(client.phone);
  await clientsPage.clientBirthdateInput.fill(client.birthday);
  await clientsPage.clientPassportInput.fill(client.pasport);
  await clientsPage.clientCountryInput.selectOption(client.pasportCountry);
  await clientsPage.clientCIInput.fill(client.identificationCard);
  await clientsPage.clientNITInput.fill(client.nit);
  await clientsPage.createClientButton.click()
  
  await clientsPage.newClientAlert.click();
};

export default createClient