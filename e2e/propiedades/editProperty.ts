import AdminNavbarPage from '../pages/admin-navbar-page';
import PropiertiesPage from '../pages/properties-page';

async function editProperty(propertiesPage: PropiertiesPage, propertiesNavBarPage: AdminNavbarPage) {
    await propertiesNavBarPage.selector.click()
    await propertiesPage.editPropertyButton.click()
    await propertiesPage.zipCodeInput.fill('333333')
    await propertiesPage.pitSaleCheckbox.check()
    await propertiesPage.grillCheckbox.check()
    await propertiesPage.poolCheckbox.uncheck()
    await propertiesPage.bedroomsInput.fill('3')
    await propertiesPage.editPropertySubmitButton.click()
    await propertiesPage.closeModalButton.click()
}

export default editProperty