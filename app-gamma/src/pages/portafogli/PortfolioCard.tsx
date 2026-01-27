import styles from "./Portafogli.module.css";
import { NavLink } from "react-router-dom";
import type { Portfolio } from "../../types/portfolioTypes";
import { formatMoney } from "../../utils/money";
import Icons from "../../components/Icons";
import { portfolioIcons } from "./portfolioIcons";

type Props = {
  portfolio: Portfolio;
};

const PortfolioCard = ({ portfolio }: Props) => {
  const icon = portfolioIcons[portfolio.id] ?? "";
  return (
    <NavLink
      to={`/dettagli/${portfolio.id}`}
      key={portfolio.id}
      className={styles.portfolioCard}
    >
      <div className={styles.headerCard}>
        <h1>{portfolio.name}</h1>
        <Icons Icon={icon} size={65}></Icons>
      </div>

      <span>{formatMoney(portfolio.monthlyPriceCents)}</span>
      <div className={styles.infoCard}>
        <strong>Portfolio minimo</strong>
        <span>{portfolio.minCapital}</span>
      </div>
      <div className={styles.infoCard}>
        <strong>Orizzonte Temporale</strong>
        <span>{portfolio.timeHorizon}</span>
      </div>
      <div className={styles.infoCard}>
        <strong>Strumenti</strong>
        <span>{portfolio.instruments}</span>
      </div>
    </NavLink>
  );
};

export default PortfolioCard;
