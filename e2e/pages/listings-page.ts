import { Page } from "@playwright/test"

class ListingsPage{
    readonly page: Page
    // readonly url: string

    constructor (page: Page) {
        this.page = page
    }

    public get newListingButton() {
        return this.page.locator('[data-test=create-listing-button]')
    }
}

export default ListingsPage