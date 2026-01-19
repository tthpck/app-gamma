import styles from "./Portafogli.module.css";
import { portfolios } from "../../data/portfolios";
import PortfolioCard from "./PortfolioCard";
import type { Portfolio } from "../../types/portfolioTypes";

const Portafogli = () => {
  return (
    <div className={styles.portfolioList}>
      {portfolios.map((portfolio: Portfolio) => {
        return <PortfolioCard key={portfolio.id} portfolio={portfolio} />;
      })}
    </div>
  );
};

export default Portafogli;
