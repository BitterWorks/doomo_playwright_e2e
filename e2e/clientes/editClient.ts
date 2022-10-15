import { IClient } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function editClient(clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage, client: IClient) {

  await clientsNavBarPage.selector.click();
  
  // Click text=JuanPerezjuan@test.comimendivil@doomobienesraices.com111111 >> button >> nth=0
  await clientsPage.editClientButton.click();

  await clientsPage.clientNameInput.fill(client.firstname);
  await clientsPage.clientLastnameInput.fill(client.lastname);
  await clientsPage.clientEmailInput.fill(client.email);
  await clientsPage.clientPhoneInput.fill(client.phone);
  await clientsPage.clientBirthdateInput.fill(client.birthday);
  await clientsPage.clientPassportInput.fill(client.pasport);
  await clientsPage.clientCountryInput.selectOption(client.pasportCountry);
  await clientsPage.clientCIInput.fill(client.identificationCard);
  await clientsPage.clientNITInput.fill(client.nit);

  // Click text=Actualizar cliente
  await clientsPage.editClientSubmitButton.click();

  // Click [aria-label="Close"]
  await clientsPage.closeButton.click();
};

export default editClient