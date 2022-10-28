import { IClient, IListing, IProperty, PropertyTypes } from "./interfaces"

const clientExample: IClient = {
    firstname: 'Agent',
    lastname: 'Client',
    email: 'agent@test.com',
    phone: '111111',
    birthday: '1999-07-07',
    pasport: '222222',
    pasportCountry: 'BO',
    identificationCard: '333333',
    nit: '4444'
}

const editedClientExample: IClient = {
    firstname: 'Agent',
    lastname: 'Client',
    email: 'agent@test.com',
    phone: '112222',
    birthday: '1999-07-09',
    pasport: '223333',
    pasportCountry: 'BO',
    identificationCard: '334444',
    nit: '4455'
}

const propertyExample: IProperty = {
    client: clientExample,
    propertyType: PropertyTypes.DEPARTAMENTO,
    address: "españa 22",
    zipCode: "22222",
    surface: "320",
    description: "hermoso departamento..."
}

const editedPropertyExample: IProperty = {
    client: editedClientExample,
    propertyType: PropertyTypes.DEPARTAMENTO,
    address: "españa 222",
    zipCode: "33333",
    surface: "420",
    description: "hermosa casa..."
}

const listingExample: IListing = {
    property: propertyExample,
    title: "Casa centro",
    operation: "Venta",
    currency: "US$",
    description: "venta casa",
    price: "800"
}

const editedListingExample: IListing = {
    property: editedPropertyExample,
    title: "Casa centro",
    operation: "Alquiler",
    currency: "US$",
    description: "alquiler casa",
    price: "1000"
}

export { clientExample, propertyExample, listingExample, editedClientExample, editedPropertyExample, editedListingExample }