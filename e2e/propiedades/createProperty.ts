import { expect, Page } from '@playwright/test';

async function createProperty(page: Page, baseUrl: string) {

  // Click text=Propiedades
  await page.locator('text=Propiedades').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/propiedades`);

  // Click text=Crear Propiedad
  await page.locator('text=Crear Propiedad').click();

  // Click [placeholder="Seleccionar cliente"]
  await page.locator('[placeholder="Seleccionar cliente"]').click();

  // Click text=Juan, Perez, juan@test.com, imendivil@doomobienesraices.com, 111111 >> nth=1
  await page.locator('text=Juan, Perez, juan@test.com, imendivil@doomobienesraices.com, 111111').nth(1).click();

  // Click [placeholder="Seleccionar"]
  await page.locator('[placeholder="Seleccionar"]').click();

  // Click text=Tarija >> nth=1
  await page.locator('text=Tarija').nth(1).click();

  // Click [placeholder="Seleccionar"]
  await page.locator('[placeholder="Seleccionar"]').click();

  // Click text=Cercado >> nth=1
  await page.locator('text=Cercado').nth(1).click();

  // Click [placeholder="Seleccionar"]
  await page.locator('[placeholder="Seleccionar"]').click();

  // Click text=Tarija >> nth=2
  await page.locator('text=Tarija').nth(2).click();

  // Click [placeholder="Ingrese una dirección"]
  await page.locator('[placeholder="Ingrese una dirección"]').click();

  // Fill [placeholder="Ingrese una dirección"]
  await page.locator('[placeholder="Ingrese una dirección"]').fill('españa 22');

  // Click [placeholder="Seleccionar"]
  await page.locator('[placeholder="Seleccionar"]').click();

  // Click text=San Antonio >> nth=1
  await page.locator('text=San Antonio').nth(1).click();

  // Click input[name="zip-code"]
  await page.locator('input[name="zip-code"]').click();

  // Fill input[name="zip-code"]
  await page.locator('input[name="zip-code"]').fill('222222');

  // Click input[name="surface"]
  await page.locator('input[name="surface"]').click();

  // Fill input[name="surface"]
  await page.locator('input[name="surface"]').fill('333');

  // Click [placeholder="Seleccionar Tipo de Propiedad"]
  await page.locator('[placeholder="Seleccionar Tipo de Propiedad"]').click();

  // Click text=Departamento >> nth=2
  await page.locator('text=Departamento').nth(2).click();

  // Click text=Antiguedad (años) >> input[type="number"]
  await page.locator('text=Antiguedad (años) >> input[type="number"]').click();

  // Fill text=Antiguedad (años) >> input[type="number"]
  await page.locator('text=Antiguedad (años) >> input[type="number"]').fill('2');

  // Click text=Superficie Cubierta (m2) >> input[type="number"]
  await page.locator('text=Superficie Cubierta (m2) >> input[type="number"]').click();

  // Fill text=Superficie Cubierta (m2) >> input[type="number"]
  await page.locator('text=Superficie Cubierta (m2) >> input[type="number"]').fill('333');

  // Click text=Dormitorios >> input[type="number"]
  await page.locator('text=Dormitorios >> input[type="number"]').click();

  // Fill text=Dormitorios >> input[type="number"]
  await page.locator('text=Dormitorios >> input[type="number"]').fill('2');

  // Check text=Piscina >> input[type="checkbox"]
  await page.locator('text=Piscina >> input[type="checkbox"]').check();

  // Click text=Cochera
  await page.locator('text=Cochera').click();

  // Check text=Cochera >> input[type="checkbox"]
  await page.locator('text=Cochera >> input[type="checkbox"]').check();

  // Click textarea[name="description"]
  await page.locator('textarea[name="description"]').click();

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('La mejor casa');

  // Click form >> text=Crear propiedad
  await page.locator('form >> text=Crear propiedad').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/propiedades#close`);

}

export default createProperty