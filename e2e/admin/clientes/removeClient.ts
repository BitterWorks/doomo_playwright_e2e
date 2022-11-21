import AdminNavbarPage from '../pages/admin-navbar-page';
import ClientsPage from '../pages/clients-page';

async function removeClient(editedClientsPage: ClientsPage, clientsNavBarPage: AdminNavbarPage) {
    await clientsNavBarPage.selector.click();
    await editedClientsPage.removeClientButton.click();
};

export default removeClient