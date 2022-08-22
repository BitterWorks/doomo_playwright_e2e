import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://staging.doomobr.com/
  await page.goto('https://staging.doomobr.com/');

  // Go to https://staging.doomobr.com/admin/
  await page.goto('https://staging.doomobr.com/admin/');

  // Go to https://staging.doomobr.com/admin/login
  await page.goto('https://staging.doomobr.com/admin/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('imendivil@doomobienesraices.com');

  // Click [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').click();

  // Fill [placeholder="Contraseña"]
  await page.locator('[placeholder="Contraseña"]').fill('Doomotja!9');

  // Click button:has-text("Ingresá")
  await page.locator('button:has-text("Ingresá")').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin');

  // Click text=Clientes
  await page.locator('text=Clientes').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/clientes');

  // Click text=Nuevo Cliente
  await page.locator('text=Nuevo Cliente').click();

  // Click [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').click();

  // Fill [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').fill('prue');

  // Click [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').click();

  // Fill [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').fill('ba');

  // Click [placeholder="Dirección de email"]
  await page.locator('[placeholder="Dirección de email"]').click();

  // Fill [placeholder="Dirección de email"]
  await page.locator('[placeholder="Dirección de email"]').fill('prueba@mail.com');

  // Click [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').click();

  // Fill [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').fill('111111');

  // Fill [placeholder="Fecha de cumpleaños"]
  await page.locator('[placeholder="Fecha de cumpleaños"]').fill('2022-08-24');

  // Click [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').click();

  // Fill [placeholder="Fecha de cumpleaños"]
  await page.locator('[placeholder="Fecha de cumpleaños"]').fill('2000-06-13');

  // Click [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').click();

  // Fill [placeholder="Número\/Dígitos del pasaporte"]
  await page.locator('[placeholder="Número\\/Dígitos del pasaporte"]').fill('11111232');

  // Select AN
  await page.locator('select[name="passportCountryId"]').selectOption('AN');

  // Click [placeholder="Ingrese un nro\. de CI "]
  await page.locator('[placeholder="Ingrese un nro\\. de CI "]').click();

  // Fill [placeholder="Ingrese un nro\. de CI "]
  await page.locator('[placeholder="Ingrese un nro\\. de CI "]').fill('3333333');

  // Click [placeholder="Ingrese un nro\. de NIT "]
  await page.locator('[placeholder="Ingrese un nro\\. de NIT "]').click();

  // Fill [placeholder="Ingrese un nro\. de NIT "]
  await page.locator('[placeholder="Ingrese un nro\\. de NIT "]').fill('333333');

  // Click text=Crear cliente
  await page.locator('text=Crear cliente').click();

  // Click [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').click();

  // Fill [placeholder="Número de teléfono"]
  await page.locator('[placeholder="Número de teléfono"]').fill('111111111');

  // Click text=Crear cliente
  await page.locator('text=Crear cliente').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/clientes#close');

  // Click text=pruebaprueba@mail.comimendivil@doomobienesraices.com111111111 >> button >> nth=0
  await page.locator('text=pruebaprueba@mail.comimendivil@doomobienesraices.com111111111 >> button').first().click();

  // Click [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').click();

  // Fill [placeholder="Nombre\/s del cliente"]
  await page.locator('[placeholder="Nombre\\/s del cliente"]').fill('pruedsa');

  // Click [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').click();

  // Fill [placeholder="Apellido\/s del cliente"]
  await page.locator('[placeholder="Apellido\\/s del cliente"]').fill('badsa');

  // Click text=Actualizar cliente
  await page.locator('text=Actualizar cliente').click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();

  // Click text=pruedsabadsaprueba@mail.comimendivil@doomobienesraices.com111111111 >> button >> nth=1
  await page.locator('text=pruedsabadsaprueba@mail.comimendivil@doomobienesraices.com111111111 >> button').nth(1).click();

  // Click text=Cerrar Sesión
  await page.locator('text=Cerrar Sesión').click();
  await expect(page).toHaveURL('https://staging.doomobr.com/admin/login');

});