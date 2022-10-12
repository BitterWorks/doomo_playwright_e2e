interface IClient {
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

interface IProperty {
    client: IClient
    propertyType: string
    address: string
}

interface IListing {
    property: IProperty
    title: string
    operation: string
    currency: string
    description: string
}


export { IClient, IProperty, IListing }