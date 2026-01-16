import {portfolios} from '../../../src/data/portfolios'
import { useParams } from 'react-router-dom'

const PortfolioDetails = () => {

    const { id } = useParams()

    const portfolio = portfolios.find(p => p.id === id)

    if (!portfolio) return <div>Portafoglio non trovato</div>;
    else return (
        <div>
    <div> Portafoglio {portfolio.name}</div>
    <div> {portfolio.description}</div>
    <a href = {portfolio.subscribeURL}>Abbonati Ora</a>
    {portfolio.help && <div> {portfolio.help}</div>}
    <div> Liquidita' minima consigliata: {portfolio.minCapital}</div>
    <div> Orizzonte temporale minimo consgliato: {portfolio.timeHorizon}</div>
    <div> Strumenti: {portfolio.instruments}</div>
    <div> Media strumenti in portafoglio {portfolio.averageInstruments}</div>
    <div> Media operazioni mensili {portfolio.averageMonthlyOperations}</div>
    <div> Ribilanciamenti {portfolio.balancing}</div>
    <div> Comunicazioni {portfolio.communications}</div>
    {portfolio.extra && <div> Extra: {portfolio.extra}</div>}
    </div>
  )
}

export default PortfolioDetails 