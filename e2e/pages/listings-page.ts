import { Page } from "@playwright/test"
import { IListing } from "../config/interfaces"

class ListingsPage{
    readonly page: Page
    listing: IListing

    constructor (page: Page, listing: IListing) {
        this.page = page
        this.listing = listing
    }

    public get newListingButton() {
        return this.page.locator('[data-test=create-listing-button]')
    }

    public get selectProperty() {
        return this.page.locator('[placeholder="Seleccionar propiedad"]')
    }

    public get selectPropertyOption() {
        return this.page.locator(`text=${this.listing.property.client.firstname} ${this.listing.property.client.lastname}`).nth(1)
    }

    public get operationTypeRadioButton() {
        return this.page.locator(`#properties >> text=${this.listing.operation} >> input[name="operationId"]`)
    }

    public get currencyRadioButton() {
        return this.page.locator('text=US Dollar >> input[name="currencyCode"]')
    }

    public get priceInput() {
        return this.page.locator('input[name="price"]')
    }

    public get titleInput() {
        return this.page.locator('input[name="title"]')
    }

    public get descriptionInput() {
        return this.page.locator('textarea[name="description"]')
    }

    public get createListingButton() {
        return this.page.locator('text=Crear publicación')
    }

    public get closeModalButton() {
        return this.page.locator('[aria-label="Close"]')
    }

    // EDIT

    public get editListingButton() {
        return this.page.locator(`text=${this.listing.title}${this.listing.operation}${this.listing.currency} >> button`).first()
    }

    public get saveChangesButton() {
        return this.page.locator('text=Guardar cambios')
    }

    public get operationTypeRadioButtonEDIT() {
        return this.page.locator(`dialog >> text=${this.listing.operation}`)
    }

}

export default ListingsPage