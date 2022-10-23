import AdminNavbarPage from '../pages/admin-navbar-page';
import PropiertiesPage from '../pages/properties-page';

async function editProperty(propertiesPage: PropiertiesPage, propertiesNavBarPage: AdminNavbarPage, editedPropertiesPage: PropiertiesPage) {
    await propertiesNavBarPage.selector.click()
    await propertiesPage.editPropertyButton.click()
    await editedPropertiesPage.addressInput.fill(editedPropertiesPage.property.address)
    await editedPropertiesPage.zipCodeInput.fill(editedPropertiesPage.property.zipCode)
    await editedPropertiesPage.surfaceInput.fill(editedPropertiesPage.property.surface)
    await editedPropertiesPage.descriptionInput.fill(editedPropertiesPage.property.description)
    await editedPropertiesPage.pitSaleCheckbox.check()
    await editedPropertiesPage.grillCheckbox.check()
    await editedPropertiesPage.poolCheckbox.uncheck()
    await editedPropertiesPage.bedroomsInput.fill('3')
    await editedPropertiesPage.editPropertySubmitButton.click()
    await editedPropertiesPage.closeModalButton.click()
}

export default editProperty