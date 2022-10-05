import { IClient, IListing, IProperty } from "./interfaces.d"

const clientExample: IClient = {
    firstname: 'Juan',
    lastname: 'Perez',
    email: 'juan@test.com',
    phone: '111111',
    birthday: '1999-07-07',
    pasport: '222222',
    pasportCountry: 'BO',
    identificationCard: '333333',
    nit: '4444'
}

const propertyExample: IProperty = {
    client: clientExample,
    propertyType: "Departamento",
    address: "españa 22"
}

const listingExample: IListing = {
    property: propertyExample,
    title: "Casa centro",
    operation: "Compra",
    currency: "US$",
    description: "venta casa"
}

export { clientExample, propertyExample, listingExample }