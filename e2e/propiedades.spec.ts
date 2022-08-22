import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://staging.doomobr.com/
  await page.goto('https://staging.doomobr.com/');

  // Go to https://staging.doomobr.com/admin/
  await page.goto('https://staging.doomobr.com/admin/');

  // Go to https://staging.doomobr.com/admin/login
  await page.goto('https://staging.doomobr.com/admin/login');

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('imendivil@doomobienesraices.com');

  // Fill [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').fill('Doomotja!9');

  // Click button:has-text("Ingresá")
  await page.locator('button:has-text("Ingresá")').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin');

  // Click text=Propiedades
  await page.locator('text=Propiedades').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/propiedades');

  // Click text=Crear Propiedad
  await page.locator('text=Crear Propiedad').click();

  // Select 3
  await page.locator('select[name="property_type_id"]').selectOption('3');

  // Select 32
  await page.locator('select[name="aali-1"]').selectOption('32');

  // Fill textarea[name="description"]
  await page.locator('textarea[name="description"]').fill('descriptionnnnn....');

  // Fill [placeholder="Ingrese un número"]
  await page.locator('[placeholder="Ingrese un número"]').fill('123');

  // Fill [placeholder="Ingrese una dirección"]
  await page.locator('[placeholder="Ingrese una dirección"]').fill('123');

  // Click text=Propiedades Crear Propiedad Tipo de propiedad TerrenoCampoOtrosCocheraLocal Come >> article
  await page.locator('text=Propiedades Crear Propiedad Tipo de propiedad TerrenoCampoOtrosCocheraLocal Come >> article').click();


  // Fill [placeholder="Ingrese una dirección"]
  await page.locator('[placeholder="Ingrese una dirección"]').fill('adas 111');

  // Fill [placeholder="Ingrese un código postal"]
  await page.locator('[placeholder="Ingrese un código postal"]').fill('11111');

  // Click form >> text=Crear propiedad
  await page.locator('form >> text=Crear propiedad').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/propiedades/');

  // Click text=adas 111descriptionnnnn....VICTOR EDUARDO GARCIA MASSACampoimendivil@doomobienes >> button >> nth=0
  await page.locator('text=adas 111descriptionnnnn....VICTOR EDUARDO GARCIA MASSACampoimendivil@doomobienes >> button').first().click();

  // Select 5
  await page.locator('select[name="property_type_id"]').selectOption('5');

  // Check input[name="presale"]
  await page.locator('input[name="presale"]').check();

  // Click text=Tipo de propiedad TerrenoCampoOtrosCocheraLocal ComercialOficinaCasaDepartamento
  await page.locator('text=Tipo de propiedad TerrenoCampoOtrosCocheraLocal ComercialOficinaCasaDepartamento').click();
  
  // Fill [placeholder="Número de Años de antigüedad"]
  await page.locator('[placeholder="Número de Años de antigüedad"]').fill('1111');

  // Click text=Actualizar propiedad
  await page.locator('text=Actualizar propiedad').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/propiedades/');

  // Click text=adas 111descriptionnnnn....VICTOR EDUARDO GARCIA MASSACocheraimendivil@doomobien >> button >> nth=1
  await page.locator('text=adas 111descriptionnnnn....VICTOR EDUARDO GARCIA MASSACocheraimendivil@doomobien >> button').nth(1).click();

});