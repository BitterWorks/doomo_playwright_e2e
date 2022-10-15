import test from '@playwright/test';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import PropiertiesPage from '../pages/properties-page';

async function createProperty(propertiesPage: PropiertiesPage, propertiesNavBarPage: AdminNavbarPage) {
  await propertiesNavBarPage.selector.click();
  await propertiesPage.newPropertyButton.click()
  await propertiesPage.clientSelect.click();
  await propertiesPage.clientSelectOption.click();
  await propertiesPage.aaliSelect.click();
  await propertiesPage.aali1Option.click();
  await propertiesPage.aaliSelect.click();  
  test.slow();
  await propertiesPage.aali2Option.click();
  test.slow();
  await propertiesPage.aaliSelect.click();
  await propertiesPage.aali3Option.click();
  await propertiesPage.addressInput.fill('españa 22');
  await propertiesPage.zipCodeInput.fill('222222');  
  await propertiesPage.surfaceInput.fill('333');  
  await propertiesPage.properetyTypeInput.click();  
  await propertiesPage.propertyTypeOption.click();    
  test.slow();
  test.slow();
  await propertiesPage.antiqueInput.fill('2');  
  await propertiesPage.descriptionInput.fill('La mejor casa');
  await propertiesPage.coveredSurfaceInput.fill('333');
  await propertiesPage.bedroomsInput.fill('2');
  await propertiesPage.poolCheckbox.check();
  await propertiesPage.garageCheckbox.check();
  await propertiesPage.createPropertyButton.click();
  await propertiesPage.closeModalButton.click();
}

export default createProperty