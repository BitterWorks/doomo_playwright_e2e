import { IClient, IListing, IProfile, IProperty, PropertyTypes } from "./interfaces"

const profile: IProfile = {
    firstname: "AgentName",
    lastname: "AgentLastname",
    phone: "777777"
}


const franchiseeClientExample: IClient = {
    firstname: 'Franchisee',
    lastname: 'Client',
    email: 'franchisee@test.com',
    phone: '22222',
    birthday: '1999-07-07',
    pasport: '222222',
    pasportCountry: 'BO',
    identificationCard: '333333',
    nit: '4444'
}

const franchiseeEditedClientExample: IClient = {
    firstname: 'Franchisee',
    lastname: 'Client',
    email: 'franchisee@test.com',
    phone: '2223333',
    birthday: '1999-07-09',
    pasport: '223333',
    pasportCountry: 'BO',
    identificationCard: '334444',
    nit: '4455'
}

const franchiseePropertyExample: IProperty = {
    client: franchiseeClientExample,
    propertyType: PropertyTypes.DEPARTAMENTO,
    address: "españa 22",
    zipCode: "22222",
    surface: "320",
    description: "hermoso departamento..."
}

const franchiseeEditedPropertyExample: IProperty = {
    client: franchiseeEditedClientExample,
    propertyType: PropertyTypes.CASA,
    address: "españa 222",
    zipCode: "33333",
    surface: "420",
    description: "hermosa casa..."
}

const franchiseeListingExample: IListing = {
    property: franchiseePropertyExample,
    title: "Casa centro",
    operation: "Venta",
    currency: "US$",
    description: "venta casa",
    price: "800"
}

const franchiseeEditedListingExample: IListing = {
    property: franchiseeEditedPropertyExample,
    title: "Casa centro",
    operation: "Alquiler",
    currency: "US$",
    description: "alquiler casa",
    price: "1000"
}

export { 
    franchiseeClientExample, franchiseePropertyExample, franchiseeListingExample, 
    franchiseeEditedClientExample, franchiseeEditedPropertyExample, 
    franchiseeEditedListingExample, profile }