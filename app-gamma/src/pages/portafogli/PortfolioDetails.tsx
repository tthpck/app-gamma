import { getPortfolioById } from "../../../src/data/portfolios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PortfolioDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Portafoglio non valido!</div>;

  const portfolio = getPortfolioById(id);

  if (!portfolio)
    return (
      <div>
        <p>Questo Portafoglio non esiste.</p>
        <Link to="/portafogli">Torna ai portafogli</Link>
      </div>
    );
  else
    return (
      <div>
        <div> Portafoglio {portfolio.name}</div>
        <div> {portfolio.description}</div>
        <a href={portfolio.subscribeURL}>Abbonati Ora</a>
        {portfolio.help && <div> {portfolio.help}</div>}
        <div> Liquidita' minima consigliata: {portfolio.minCapital}</div>
        <div>
          {" "}
          Orizzonte temporale minimo consgliato: {portfolio.timeHorizon}
        </div>
        <div> Strumenti: {portfolio.instruments}</div>
        <div>
          {" "}
          Media strumenti in portafoglio {portfolio.averageInstruments}
        </div>
        <div>
          {" "}
          Media operazioni mensili {portfolio.averageMonthlyOperations}
        </div>
        <div> Ribilanciamenti {portfolio.balancing}</div>
        <div> Comunicazioni {portfolio.communications}</div>
        {portfolio.extra && <div> Extra: {portfolio.extra}</div>}
      </div>
    );
};

export default PortfolioDetails;
