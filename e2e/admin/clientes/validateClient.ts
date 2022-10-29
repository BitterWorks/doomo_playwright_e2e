import { IClient } from '../../config/interfaces';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function validateClient (clientsNavBarPage: AdminNavbarPage, editedClientsPage: ClientsPage) {
    await clientsNavBarPage.selector.click();
    await editedClientsPage.editClientButton.click();
    await editedClientsPage.closeButton.click();
};

export default validateClient