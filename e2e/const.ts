import { IClient, IListing, IProperty } from "./interfaces.d"

enum PropertieTypes {
    DEPARTAMENTO = "Departamento"

}

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

const editedClientExample: IClient = {
    firstname: 'Juan',
    lastname: 'Perez',
    email: 'juan@test.com',
    phone: '112222',
    birthday: '1999-07-09',
    pasport: '223333',
    pasportCountry: 'BO',
    identificationCard: '334444',
    nit: '4455'
}

const propertyExample: IProperty = {
    client: clientExample,
    propertyType: PropertieTypes.DEPARTAMENTO,
    address: "españa 22"
}

const editedPropertyExample: IProperty = {
    client: editedClientExample,
    propertyType: "Departamento",
    address: "españa 22"
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