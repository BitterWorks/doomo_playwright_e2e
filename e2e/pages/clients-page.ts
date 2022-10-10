import { Page } from "@playwright/test"

class ClientsPage{
    readonly page: Page
    // readonly url: string

    constructor (page: Page) {
        this.page = page
    }

    public get newClientButton() {
        return this.page.locator('[data-test=create-client-button]')
    }
}

export default ClientsPage