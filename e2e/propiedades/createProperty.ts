import test, { expect, Page } from '@playwright/test';
import { IClient } from '../interfaces.d';
import AdminNavbarPage, { Pages } from '../pages/admin-navbar-page';
import PropiertiesPage from '../pages/properties-page';

async function createProperty(propertiesPage: PropiertiesPage, propertiesNavBarPage: AdminNavbarPage) {
  
  await propertiesNavBarPage.selector.click();
  await propertiesPage.newPropertyButton.click()

  // Click [placeholder="Seleccionar cliente"]
  await propertiesPage.clientSelect.click();

  // Click text=Juan, Perez, juan@test.com, imendivil@doomobienesraices.com, 111111 >> nth=1
  await propertiesPage.clientSelectOption.click();
//   await page.locator(`text=${client.firstname}, ${client.lastname}, ${client.email}, ${userEmail}, ${client.phone}`).nth(1).click();

  // Click [placeholder="Seleccionar"]
  await propertiesPage.aaliSelect.click();

  // Click text=Tarija >> nth=1
  await propertiesPage.aali1Option.click();

  // Click [placeholder="Seleccionar"]
  await propertiesPage.aaliSelect.click();
  
  test.slow();
  // Click text=Cercado >> nth=1
  await propertiesPage.aali2Option.click();

  // Click [placeholder="Seleccionar"]
  test.slow();
  await propertiesPage.aaliSelect.click();
  // Click text=Tarija >> nth=2
  await propertiesPage.aali3Option.click();

  await propertiesPage.addressInput.fill('españa 22');

  // Fill input[name="zip-code"]
  await propertiesPage.zipCodeInput.fill('222222');
  
  // Fill input[name="surface"]
  await propertiesPage.surfaceInput.fill('333');
  
  // Click [placeholder="Seleccionar Tipo de Propiedad"]
  await propertiesPage.properetyTypeInput.click();
  
  // Click text=Departamento >> nth=2
  await propertiesPage.propertyTypeOption.click();
  
  
  // await page.waitForSelector('text=Antiguedad >> input[type="number"]', { timeout: 100000 });
  test.slow();
  test.slow();
  // Fill text=Antiguedad (años) >> input[type="number"]
  await propertiesPage.antiqueInput.fill('2');
  
  // Fill textarea[name="description"]
  await propertiesPage.descriptionInput.fill('La mejor casa');

  // Fill text=Superficie Cubierta (m2) >> input[type="number"]
  await propertiesPage.coveredSurfaceInput.fill('333');

  // Fill text=Dormitorios >> input[type="number"]
  await propertiesPage.bedroomsInput.fill('2');

  // Check text=Piscina >> input[type="checkbox"]
  await propertiesPage.poolCheckbox.check();

  // Check text=Cochera >> input[type="checkbox"]
  await propertiesPage.garageCheckbox.check();


  // Click form >> text=Crear propiedad
  await propertiesPage.createPropertyButton.click();

  // Click [aria-label="Close"]
  await propertiesPage.closeModalButton.click();
  // await expect(page).toHaveURL(`${baseUrl}/admin/propiedades#close`);

}

export default createProperty