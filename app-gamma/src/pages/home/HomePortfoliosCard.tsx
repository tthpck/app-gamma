import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const HomePortfoliosCard = () => {
  return (
    <NavLink to={`/questionario`} className={styles.homeCard}>
      <div>Scopri quale portafoglio Gamma fa al caso tuo</div>
    </NavLink>
  );
};

export default HomePortfoliosCard;
