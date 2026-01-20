export function formatMoney(priceCents: string | number){
    if (typeof priceCents === 'string') return priceCents;

    return `${(priceCents/100).toFixed(2)}€`
}