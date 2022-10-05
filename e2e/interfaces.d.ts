export interface IClient {
    firstname: string
    lastname: string
    email: string
    phone: string
    birthday: string
    pasport: string
    pasportCountry: string
    identificationCard: string
    nit: string
}

export interface IProperty {
    client: IClient
    propertyType: string
    address: string
}

export interface IListing {
    property: IProperty
    title: string
    operation: string
    currency: string
    description: string
}