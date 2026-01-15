import {portfolios} from '../../../src/data/portfolios'
import { useParams } from 'react-router-dom'

const PortfolioDetails = () => {

    const { id } = useParams()

    const portfolio = portfolios.find(p => p.id === id)

    if (!portfolio) return <div>Portafoglio non trovato</div>;
    else return (
        <>
    <div> Portafoglio {portfolio.name}</div>
    <div> Portafoglio {portfolio.name}</div>
    <div> Portafoglio {portfolio.name}</div>
    <div> Portafoglio {portfolio.name}</div>
    <div> Portafoglio {portfolio.name}</div>
    <div> Portafoglio {portfolio.name}</div>
    <div> Portafoglio {portfolio.name}</div>
    </>
  )
}

export default PortfolioDetails 