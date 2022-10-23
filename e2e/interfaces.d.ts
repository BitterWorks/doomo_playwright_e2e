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
    propertyType: PropertyTypes
    address: string
    zipCode: string
    surface: string
    description: string
}

interface IListing {
    property: IProperty
    title: string
    operation: string
    currency: string
    description: string
    price: string
}

export enum PropertyTypes {
    TERRENO= "Terreno",
    CAMPO= "Campo",
    COCHERA="Cochera",
    OFICINA="Oficina",
    CASA="Casa",
    DEPARTAMENTO="Departamento",
    LOCAL_COMERCIAL="Local Comercial",
    OTRO="Otro"
}


export { IClient, IProperty, IListing }