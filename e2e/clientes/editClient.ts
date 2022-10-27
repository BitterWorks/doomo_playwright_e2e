import { IClient } from '../config/interfaces';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function editClient(clientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage, editedClientsPage: ClientsPage) {

  await clientsNavBarPage.selector.click();
  await clientsPage.editClientButton.click();
  await editedClientsPage.clientNameInput.fill(editedClientsPage.client.firstname);
  await editedClientsPage.clientLastnameInput.fill(editedClientsPage.client.lastname);
  await editedClientsPage.clientEmailInput.fill(editedClientsPage.client.email);
  await editedClientsPage.clientPhoneInput.fill(editedClientsPage.client.phone);
  await editedClientsPage.clientBirthdateInput.fill(editedClientsPage.client.birthday);
  await editedClientsPage.clientPassportInput.fill(editedClientsPage.client.pasport);
  await editedClientsPage.clientCountryInput.selectOption(editedClientsPage.client.pasportCountry);
  await editedClientsPage.clientCIInput.fill(editedClientsPage.client.identificationCard);
  await editedClientsPage.clientNITInput.fill(editedClientsPage.client.nit);

  // Click text=Actualizar cliente
  await editedClientsPage.editClientSubmitButton.click();

  // Click [aria-label="Close"]
  await editedClientsPage.closeButton.click();
};

export default editClient