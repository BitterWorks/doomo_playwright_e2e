import { Page } from "@playwright/test"

class PropiertiesPage{
    readonly page: Page
    // readonly url: string

    constructor (page: Page) {
        this.page = page
    }

    public get newPropertyButton() {
        return this.page.locator('[data-test=create-property-button]')
    }
}

export default PropiertiesPage