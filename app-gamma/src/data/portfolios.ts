

export const portfolios = [{
    id: 'basic',
    name: 'Basic',
    monthlyPriceCents: 'FREE',
    yearlyPriceCents: 'FREE',
    instruments: 'ETF e ETC',
    composition: 'Azionario e oro',
    minCapital: 1000,
    timeHorizon: '5-10 anni',
    averageInstruments: 10000000,
    averageMonthlyOperations: 100000000,
    pac: '',
    geographicalCoverage: 'Globale',
    balancing: 'Mensili, ogni 1 domenica del mese',
    communications: 'lettera trimestrale agli investitori',
    description: 'Basic è il portafoglio completo e dinamico adatto all’investitore con una liquidità minima, un orizzonte temporale ampio e una propensione al rischio medio-bassa. Registrati al sito per controllare i rendimenti storici e ricevere ogni aggiornamento sul portafoglio gratuitamente!    ',
},{
    id: 'essential',
    name: 'Essential',
    monthlyPriceCents: 'FREE',
    yearlyPriceCents: 'FREE',
    instruments: 'ETF e ETC',
    composition: 'Azionario e oro', 
    minCapital: 5000,
    timeHorizon: '5-10 anni',
    averageInstruments: 10000000,
    averageMonthlyOperations: 100000000,
    pac: '',
    geographicalCoverage: 'Globale',
    balancing: 'Mensili, ogni 1 domenica del mese',
    communications: 'lettera trimestrale agli investitori',
    description: 'Essential è il portafoglio completo e dinamico adatto all’investitore con una liquidità ridotta, un orizzonte temporale ampio e una propensione al rischio media. Registrati al sito per controllare i rendimenti storici e ricevere ogni aggiornamento sul portafoglio gratuitamente!',

}, {
    id: 'advanced',
    name: 'Advanced',
    monthlyPriceCents: 3000,
    yearlyPriceCents: 300000000,
    instruments: 'ETF settoriali e tematicie ETC materie prime ETN criptovalute',
    composition: 'Azionario, materie prime, criptovalute', 
    minCapital: 10000,
    timeHorizon: '5-10 anni',
    averageInstruments: 12.3,
    averageMonthlyOperations: 4.9,
    pac: 'Suggerito a cadenza mensile o trimestrale (>500€ a trimestre)',
    geographicalCoverage: 'Globale',
    balancing: 'Mensili, ogni 1 domenica del mese',
    communications: 'Lettera trimestrale agli investitori',
    extra: 'Garanzia di performance',
    description: 'Advanced è il portafoglio completo e dinamico adatto all’investitore con una liquidità moderata, un orizzonte temporale ampio e una propensione al rischio media. Registrati al sito per controllare i rendimenti storici del portafoglio gratuitamente! ',
    help: 'Hai dubbi o domande? Prenota una call gratuita e senza impegno su Telegram o su WhatsApp con uno dei nostri esperti.',
    subscribeURL: 'https://www.gammainvestimenti.it/checkout-2/?group=1'

},{
    id: 'master',
    name: 'Master',
    monthlyPriceCents: 8000,
    yearlyPriceCents: 8000000000,
    instruments: 'ETF settoriali e tematici ETC materie prime ETN criptovalute Azioni globali',
    composition: 'Azionario, materie prime, criptovalute', 
    minCapital: 25000,
    timeHorizon: '5-10 anni',
    averageInstruments: 14.8,
    averageMonthlyOperations: 6.7,
    pac: 'Suggerito a cadenza trimestrale (>1000€ a trimestre)',
    geographicalCoverage: 'Globale',
    balancing: 'Mensili, ogni 1 domenica del mese',
    communications: 'Lettera trimestrale agli investitori',
    extra: 'Garanzia di performance',
    description: 'Master è il portafoglio completo e dinamico adatto all’investitore con una liquidità significativa, un orizzonte temporale ampio e una propensione al rischio alta. Registrati al sito per controllare i rendimenti storici del portafoglio gratuitamente!',
    help: 'Hai dubbi o domande? Prenota una call gratuita e senza impegno su Telegram o su WhatsApp con uno dei nostri esperti.',
    subscribeURL: 'https://www.gammainvestimenti.it/checkout-2/?group=6'
 
}]


export function getPortfolioById (id: string) {
    return portfolios.find(p => p.id === id)
}