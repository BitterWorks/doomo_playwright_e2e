import { Page } from "@playwright/test";

export enum Pages {
    Inicio = 'home',
    Clientes = 'clients',
    // Documentos = 'documents',
    // Propiedades = 'properties',
    // Publicaciones = 'listings'
}

interface PageAttributes {
    buttonSelectorText: string,
    url: string
}

interface NavBarPages {
    [Pages.Inicio]: PageAttributes
    [Pages.Clientes]: PageAttributes
    // [Pages.Documentos]?: PageAttributes
    // [Pages.Propiedades]?: PageAttributes
    // [Pages.Publicaciones]?: PageAttributes
}

const AdminPages: NavBarPages = {
    [Pages.Inicio]: {
        buttonSelectorText: 'text=Clientes',
        url: '/admin/clientes'
    },
    [Pages.Clientes]: {
        buttonSelectorText: 'text=Clientes',
        url: '/admin/clientes'
    }
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