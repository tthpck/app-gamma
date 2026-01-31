import { getPortfolioById } from "../../../src/data/portfolios";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import styles from "./PortfolioDetails.module.css";
import { portfolioIcons } from "./portfolioIcons";
import Icons from "../../components/Icons";
import type { PortfolioId } from "../../types/portfolioTypes";
import telegramIcon from '../../images/contactus/telegram.svg?react'
import whatsappIcon from '../../images/contactus/whatsapp.svg?react'



const PortfolioDetails = () => {
  const { id } = useParams<{ id: string }>();

  function isPortfolioId(id: string): id is PortfolioId {
    return id in portfolioIcons;
  }

  if (!id || !isPortfolioId(id)) return <div>Portafoglio non valido!</div>;

  const portfolio = getPortfolioById(id);

  if (!portfolio)
    return (
      <div>
        <p>Questo Portafoglio non esiste.</p>
        <Link to="/portafogli">Torna ai portafogli</Link>
      </div>
    );

  const icon = portfolioIcons[portfolio.id];

  const isPremium = portfolio.id === "advanced" || portfolio.id === "master";

  return (
    <div className={styles.portfolioDetailsPage}>
      <h1> Portafoglio {portfolio.name}</h1>
      <div>
        <Icons size={75} color={"orange"} Icon={icon} />
      </div>
      <span> {portfolio.description}</span>
      {isPremium && (
        <a className={styles.subscribeButton} href={portfolio.subscribeURL}>
          Ottieni il portafoglio {portfolio.name}
        </a>
      )}
      {portfolio.help && (
        <div className={styles.helpCard}> <span>{portfolio.help}</span>
        <div>
          <NavLink className={styles.contactUsIcon}to={`https://t.me/manuel_gamma`}>
          <Icons Icon={telegramIcon} size={30}/></NavLink>
          <NavLink className={styles.contactUsIcon} to={`https://web.whatsapp.com/send?phone=393337926257`}>
          <Icons Icon={whatsappIcon} size={30}/></NavLink>
        </div>
        
        
        </div>
      )}
      <div className={styles.infoCard}>
        <strong> Liquidita' minima consigliata: </strong>
        <span>{portfolio.minCapital}</span>
        <strong>Orizzonte temporale minimo consgliato: </strong>
        <span>{portfolio.timeHorizon}</span>
        <strong>Strumenti:</strong> <span>{portfolio.instruments}</span>
        <strong>Media strumenti in portafoglio </strong>
        <span>{portfolio.averageInstruments}</span>
        <strong>Media operazioni mensili</strong>
        <span>{portfolio.averageMonthlyOperations}</span>
        <strong>Ribilanciamenti</strong> <span>{portfolio.balancing}</span>
        <strong>Comunicazioni</strong> <span>{portfolio.communications}</span>
        {portfolio.extra && (
          <>
            <strong>Extra:</strong>
            <span>{portfolio.extra}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetails;
