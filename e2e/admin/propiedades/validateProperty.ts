import AdminNavbarPage from '../../pages/admin-navbar-page';
import PropiertiesPage from '../../pages/properties-page';

async function validateProperty(propertiesNavBarPage: AdminNavbarPage, editedPropertiesPage: PropiertiesPage) {
    await propertiesNavBarPage.selector.click()
    await editedPropertiesPage.editPropertyButton.click()
    await editedPropertiesPage.closeModalButton.click()
}

export default validateProperty