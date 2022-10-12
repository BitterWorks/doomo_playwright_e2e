import { Page } from "@playwright/test"

class ClientsPage {
    readonly page: Page
    // readonly url: string

    constructor(page: Page) {
        this.page = page
    }

    public get closeButton() {
        return this.page.locator('[aria-label="Close"]')
    }

    public get newClientButton() {
        return this.page.locator('[data-test=create-client-button]')
    }

    public get createClientButton() {
        return this.page.locator('text=Crear cliente')
    }

    public get editClientButton() {
        return this.page.locator('text=Actualizar cliente')
    }

    public get newClientAlert() {
        return this.page.locator('div[role="alert"]:has-text("Éxito Cliente creado con éxito")')
    }

    public get clientNameInput() {
        return this.page.locator('[placeholder="Nombre\\/s del cliente"]')
    }

    public get clientLastnameInput() {
        return this.page.locator('[placeholder="Apellido\\/s del cliente"]')
    }

    public get clientEmailInput() {
        return this.page.locator('[placeholder="Dirección de email"]')
    }

    public get clientPhoneInput() {
        return this.page.locator('[placeholder="Número de teléfono"]')
    }

    public get clientBirthdateInput() {
        return this.page.locator('[placeholder="Fecha de cumpleaños"]')
    }

    public get clientPassportInput() {
        return this.page.locator('[placeholder="Número\\/Dígitos del pasaporte"]')
    }

    public get clientCountryInput() {
        return this.page.locator('select[name="passportCountryId"]')
    }

    public get clientCIInput() {
        return this.page.locator('[placeholder="Ingrese un nro\\. de CI "]')
    }

    public get clientNITInput() {
        return this.page.locator('[placeholder="Ingrese un nro\\. de NIT "]')
    }
}

export default ClientsPage