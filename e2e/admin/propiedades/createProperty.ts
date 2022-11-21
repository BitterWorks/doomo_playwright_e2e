import test from '@playwright/test';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import PropiertiesPage from '../pages/properties-page';

async function createProperty(propertiesPage: PropiertiesPage, propertiesNavBarPage: AdminNavbarPage) {
  await propertiesNavBarPage.selector.click();
  await propertiesPage.newPropertyButton.click()
  await propertiesPage.clientSelect.click();
  await propertiesPage.clientSelectOption.click();
  await propertiesPage.aaliSelect.click();
  await propertiesPage.aaliOption(0, 1).click();
  await propertiesPage.aaliSelect.click();
  await propertiesPage.aaliOption(1, 1).click();
  await propertiesPage.aaliSelect.click();
  await propertiesPage.aaliOption(2, 1).click();
  // await propertiesPage.aali3Option.click();
  // await propertiesPage.addressInput.fill(propertiesPage.property.address);
  await propertiesPage.zipCodeInput.fill(propertiesPage.property.zipCode);  
  await propertiesPage.surfaceInput.fill(propertiesPage.property.surface);  
  await propertiesPage.properetyTypeInput.click();  
  await propertiesPage.propertyTypeOption.click();    
  test.slow();
  test.slow();
  await propertiesPage.antiqueInput.fill('2');  
  await propertiesPage.descriptionInput.fill(propertiesPage.property.description);
  await propertiesPage.coveredSurfaceInput.fill('333');
  await propertiesPage.bedroomsInput.fill('2');
  await propertiesPage.poolCheckbox.check();
  await propertiesPage.garageCheckbox.check();
  await propertiesPage.createPropertyButton.click();
  await propertiesPage.closeModalButton.click();
}

export default createProperty