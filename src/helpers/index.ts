export function formatCurrency(amount : number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount)
}

export function toBoolean(str: string) {
    return str.toLowerCase() === "true" //Retorna true si al convertir a minisculas resulta "true", de lo contrario, false
}