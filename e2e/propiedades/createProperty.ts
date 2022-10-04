import test, { expect, Page } from '@playwright/test';

async function createProperty(page: Page, baseUrl: string, client: IClient) {

  // Click text=Propiedades
  await page.locator('text=Propiedades').click();
  await expect(page).toHaveURL(`${baseUrl}/admin/propiedades`);

  // Click text=Crear Propiedad
  await page.locator('text=Crear Propiedad').click();

  // Click [placeholder="Seleccionar cliente"]
  await page.locator('[placeholder="Seleccionar cliente"]').click();

  // Click text=Juan, Perez, juan@test.com, imendivil@doomobienesraices.com, 111111 >> nth=1
  await page.locator(`text=${client.firstname}, ${client.lastname}`).click();
//   await page.locator(`text=${client.firstname}, ${client.lastname}, ${client.email}, ${userEmail}, ${client.phone}`).nth(1).click();

  // Click [placeholder="Seleccionar"]
  await page.locator('[placeholder="Seleccionar"]').click();

  // Click text=Tarija >> nth=1
  await page.locator('text=Tarija').click();

  // Click [placeholder="Seleccionar"]
  await page.locator('[placeholder="Seleccionar"]').click();

  // Click text=Cercado >> nth=1
  await page.locator('text=Cercado').click();

  // Click [placeholder="Seleccionar"]
  test.slow();
  await page.locator('[placeholder="Seleccionar"]').click();
  // Click text=Tarija >> nth=2
  await page.locator('text=Tarija').nth(1).click();

  // Click [placeholder="Ingrese una dirección"]
  await page.locator('[placeholder="Ingrese una dirección"]').click();

  // Fill [placeholder="Ingrese una dirección"]
  await page.locator('[placeholder="Ingrese una dirección"]').fill('españa 22');

  // Fill input[name="zip-code"]
  await page.locator('input[name="zip-code"]').fill('222222');
  
  // Fill input[name="surface"]
  await page.locator('input[name="surface"]').fill('333');
  
  // Click [placeholder="Seleccionar Tipo de Propiedad"]
  await page.locator('[placeholder="Seleccionar Tipo de Propiedad"]').click();
  
  // Click text=Departamento >> nth=2
  await page.locator('text=Departamento').nth(1).click();
  
  
  // await page.waitForSelector('text=Antiguedad >> input[type="number"]', { timeout: 100000 });
  test.slow();
  test.slow();
  // Fill text=Antiguedad (años) >> input[type="number"]
  await page.locator('text=Antiguedad >> input[type="number"]').fill('2');
  
  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('La mejor casa');

  // Fill text=Superficie Cubierta (m2) >> input[type="number"]
  await page.locator('text=Superficie Cubierta (m2) >> input[type="number"]').fill('333');

  // Fill text=Dormitorios >> input[type="number"]
  await page.locator('text=Dormitorios >> input[type="number"]').fill('2');

  // Check text=Piscina >> input[type="checkbox"]
  await page.locator('text=Piscina >> input[type="checkbox"]').check();

  // Check text=Cochera >> input[type="checkbox"]
  await page.locator('text=Cochera >> input[type="checkbox"]').check();


  // Click form >> text=Crear propiedad
  await page.locator('form >> text=Crear propiedad').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  // await expect(page).toHaveURL(`${baseUrl}/admin/propiedades#close`);

}

export default createProperty