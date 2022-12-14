import { Page } from "@playwright/test"
import { Country, IClient } from "../../config/interfaces"
class ClientsPage {
    readonly page: Page
    client: IClient
    country: Country

    constructor(page: Page, client: IClient, country: Country) {
        this.page = page
        this.client = client
        this.country = country
    }

    public get closeButton() {
        return this.page.locator('[aria-label="Close"]')
    }

    public get newClientButton() {
        return this.page.locator('[data-test=create-client-button]')
    }

    public get createClientSubmitButton() {
        return this.page.locator('text=Crear cliente')
    }

    public get editClientSubmitButton() {
        return this.page.locator('text=Actualizar cliente')
    }

    public get newClientAlert() {
        return this.page.locator('div[role="alert"]:has-text("Éxito Cliente creado con éxito")')
    }

    public get editClientButton() {
        return this.page.locator(`text=${this.client.firstname}${this.client.lastname}${this.client.email} >> button`).first()
    }

    public get removeClientButton() {
        return this.page.locator(`text=${this.client.firstname}${this.client.lastname}${this.client.email} >> button`).nth(1)
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

    public get clientNationalIdInput() {
        return this.page.locator(`[placeholder="Ingrese un nro\\. de ${this.country.nationalIdName} "]`)
    }

    public get clientTaxIdInput() {
        return this.page.locator(`[placeholder="Ingrese un nro\\. de ${this.country.taxIdName} "]`)
    }
}

export default ClientsPage