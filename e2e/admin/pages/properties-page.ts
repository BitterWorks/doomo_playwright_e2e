import { Page } from "@playwright/test"
import { IProperty } from "../../config/interfaces"

class PropiertiesPage {
    readonly page: Page
    property: IProperty

    constructor(page: Page, property: IProperty) {
        this.page = page
        this.property = property
    }

    public get newPropertyButton() {
        return this.page.locator('[data-test=create-property-button]')
    }

    public get clientSelect() {
        return this.page.locator('[placeholder="Seleccionar cliente"]')
    }

    public get clientSelectOption() {
        // TODO: replace with correct selector
        let nth = 1
        if (this.property.client.firstname === "Franchisee") nth = 0
        return this.page.locator(`text=${this.property.client.firstname}, ${this.property.client.lastname}, ${this.property.client.email}`).nth(nth)
    }

    public get clientSelectOptionN() {
        return this.page.locator(`text=${this.property.client.firstname}, ${this.property.client.lastname}, ${this.property.client.email}`)
    }

    public get aaliSelect() {
        return this.page.locator('[placeholder="Seleccionar"]')
    }

    public get aali1Option() {
        return this.page.locator('text=Tarija')
    }

    public get aali2Option() {
        return this.page.locator('text=Cercado')
    }

    public get aali3Option() {
        return this.page.locator('text=Tarija').nth(1)
    }

    public get propertyTypeOption() {
        return this.page.locator('text=Departamento').nth(1)
    }

    public get addressInput() {
        return this.page.locator('[placeholder="Ingrese una dirección"]')
    }

    public get zipCodeInput() {
        return this.page.locator('input[name="zip-code"]')
    }

    public get surfaceInput() {
        return this.page.locator('input[name="surface"]')
    }

    public get properetyTypeInput() {
        return this.page.locator('[placeholder="Seleccionar Tipo de Propiedad"]')
    }

    public get antiqueInput() {
        return this.page.locator('text=Antiguedad >> input[type="number"]')
    }

    public get descriptionInput() {
        return this.page.locator('textarea[name="description"]')
    }

    public get coveredSurfaceInput() {
        return this.page.locator('text=Superficie Cubierta (m2) >> input[type="number"]')
    }

    public get bedroomsInput() {
        return this.page.locator('text=Dormitorios >> input[type="number"]')
    }

    public get poolCheckbox() {
        return this.page.locator('text=Piscina >> input[type="checkbox"]')
    }

    public get garageCheckbox() {
        return this.page.locator('text=Cochera >> input[type="checkbox"]')
    }


    public get createPropertyButton() {
        return this.page.locator('form >> text=Crear propiedad')
    }

    public get closeModalButton() {
        return this.page.locator('[aria-label="Close"]')
    }

    // Edit
    public get editPropertyButton() {
        return this.page.locator(`text=${this.property.client.firstname} ${this.property.client.lastname}${this.property.propertyType} >> button`).first()
    }

    public get grillCheckbox() {
        return this.page.locator('text=Parrilla >> input[type="checkbox"]')
    }

    public get pitSaleCheckbox() {
        return this.page.locator('text=En pozo >> input[type="checkbox"]')
    }

    public get editPropertySubmitButton() {
        return this.page.locator('text=Editar propiedad')
    }

}

export default PropiertiesPage