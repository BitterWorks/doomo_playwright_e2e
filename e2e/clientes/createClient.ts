import { IClient } from '../interfaces.d';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function createClient (clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage) {

  await clientsNavBarPage.selector.click();
  await clientsPage.newClientButton.click()

  await clientsPage.clientNameInput.fill(clientsPage.client.firstname);
  await clientsPage.clientLastnameInput.fill(clientsPage.client.lastname);
  await clientsPage.clientEmailInput.fill(clientsPage.client.email);
  await clientsPage.clientPhoneInput.fill(clientsPage.client.phone);
  await clientsPage.clientBirthdateInput.fill(clientsPage.client.birthday);
  await clientsPage.clientPassportInput.fill(clientsPage.client.pasport);
  await clientsPage.clientCountryInput.selectOption(clientsPage.client.pasportCountry);
  await clientsPage.clientCIInput.fill(clientsPage.client.identificationCard);
  await clientsPage.clientNITInput.fill(clientsPage.client.nit);
  await clientsPage.createClientSubmitButton.click()

  await clientsPage.newClientAlert.click();
};

export default createClient