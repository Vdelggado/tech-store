export const formatCurrency = (amount: number, locate: string, currencyCode: string) => {
    const formater = new Intl.NumberFormat(locate, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    return formater.format(amount)
}