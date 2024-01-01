const coins = '/coins'
const currency = '/simple/supported_vs_currencies'

const urls = {
    list: `${coins}/markets?vs_currency=usd&cache=false`,
    currency: currency,
    chartData: (id: string) => `${coins}/${id}/market_chart?vs_currency=usd&days=1}`
}

export {
    urls
}