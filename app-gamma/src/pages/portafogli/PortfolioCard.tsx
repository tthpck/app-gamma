import styles from "./PortfolioCard.module.css";
import { NavLink } from "react-router-dom";
import type { Portfolio } from "../../types/portfolioTypes";
import { formatMoney } from "../../utils/money";


type Props = {
  portfolio: Portfolio;
};

const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <NavLink to={`/dettagli/${portfolio.id}`} key={portfolio.id} className={styles.portfolioCard}>
      <div className={styles.titleCard}>{portfolio.name}</div>
      <div className={styles.priceCard}>{formatMoney(portfolio.monthlyPriceCents)}</div>
      <div className={styles.infoCard}>
        <p className={styles.infoTitle}>Portfolio minimo</p>
        <p className={styles.infoDetails}>{portfolio.minCapital}</p>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.infoTitle}>Orizzonte Temporale</p>
        <p className={styles.infoDetails}>{portfolio.timeHorizon}</p>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.infoTitle}>Strumenti</p>
        <p className={styles.infoDetails}>{portfolio.instruments}</p>
      </div>
    </NavLink>
  );
};

export default PortfolioCard;
