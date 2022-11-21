import { Countries, Country } from "./interfaces";


const countries: Countries = {
    paraguay: {
        nationalIdName: "CIC",
        taxIdName: "RUC",
        aalisOptions: ["Asunción", "La Recoleta", "Villa Morra"]
    },
    bolivia: {
        nationalIdName: "CI",
        taxIdName: "NIT",
        aalisOptions: ["Asunción", "La Recoleta", "Villa Morra"]
    }
}

export { countries }