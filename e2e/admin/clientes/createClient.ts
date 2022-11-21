import { IClient } from '../../config/interfaces';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function createClient(clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage) {
  await clientsNavBarPage.selector.click()
  await clientsPage.newClientButton.click()

  await clientsPage.clientNameInput.fill(clientsPage.client.firstname);
  await clientsPage.clientLastnameInput.fill(clientsPage.client.lastname);
  await clientsPage.clientEmailInput.fill(clientsPage.client.email);
  await clientsPage.clientPhoneInput.fill(clientsPage.client.phone);
  await clientsPage.clientBirthdateInput.fill(clientsPage.client.birthday);
  await clientsPage.clientPassportInput.fill(clientsPage.client.pasport);
  await clientsPage.clientCountryInput.selectOption(clientsPage.client.pasportCountry);
  await clientsPage.clientNationalIdInput.fill(clientsPage.client.identificationCard);
  await clientsPage.clientTaxIdInput.fill(clientsPage.client.nit);
  await clientsPage.createClientSubmitButton.click()

  await clientsPage.closeButton.click();
};

export default createClient