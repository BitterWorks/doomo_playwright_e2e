import { Page } from "@playwright/test";

export enum Pages {
    // Inicio = 'home',
    Clientes = 'clients',
    Propiedades = 'properties',
    // Documentos = 'documents',
    // Publicaciones = 'listings'
}

interface PageAttributes {
    buttonSelectorText: string,
    url: string
}

interface NavBarPages {
    // [Pages.Inicio]: PageAttributes
    [Pages.Clientes]: PageAttributes
    [Pages.Propiedades]: PageAttributes
    // [Pages.Documentos]?: PageAttributes
    // [Pages.Publicaciones]?: PageAttributes
}

const AdminPages: NavBarPages = {
    [Pages.Clientes]: {
        buttonSelectorText: '[data-test=nav-clients]',
        url: '/admin/clientes'
    },
    [Pages.Propiedades]: {
        buttonSelectorText: '[data-test=nav-properties]',
        url: '/admin/propiedades'
    },
}

class AdminNavbarPage {
    readonly page: Page
    readonly url: string
    readonly buttonSelectorText: string

    constructor(page: Page, baseUrl: string, actualPage: Pages) {
        this.page = page
        this.url = baseUrl + AdminPages[actualPage].url
        this.buttonSelectorText = AdminPages[actualPage].buttonSelectorText
    }

    public get selector() {
        return this.page.locator(this.buttonSelectorText)
    }
}


export default AdminNavbarPage