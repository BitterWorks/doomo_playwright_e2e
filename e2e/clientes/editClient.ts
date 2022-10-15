import { IClient } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function editClient(clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage) {

  await clientsNavBarPage.selector.click();
  
  // Click text=JuanPerezjuan@test.comimendivil@doomobienesraices.com111111 >> button >> nth=0
  await clientsPage.editClientButton.click();

  await clientsPage.clientNameInput.fill(clientsPage.client.firstname);
  await clientsPage.clientLastnameInput.fill(clientsPage.client.lastname);
  await clientsPage.clientEmailInput.fill(clientsPage.client.email);
  await clientsPage.clientPhoneInput.fill(clientsPage.client.phone);
  await clientsPage.clientBirthdateInput.fill(clientsPage.client.birthday);
  await clientsPage.clientPassportInput.fill(clientsPage.client.pasport);
  await clientsPage.clientCountryInput.selectOption(clientsPage.client.pasportCountry);
  await clientsPage.clientCIInput.fill(clientsPage.client.identificationCard);
  await clientsPage.clientNITInput.fill(clientsPage.client.nit);

  // Click text=Actualizar cliente
  await clientsPage.editClientSubmitButton.click();

  // Click [aria-label="Close"]
  await clientsPage.closeButton.click();
};

export default editClient