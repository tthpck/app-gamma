import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const HomePortfoliosCard = () => {
  return (
    <NavLink to={`/questionario`} className={styles.homeCard}>
      <div className={styles.cardContent}>
 <strong>Scopri il tuo portafoglio</strong>
    <span>Rispondi a poche domande e trova quello giusto per te</span>
    </div>
    </NavLink>
  );
};

export default HomePortfoliosCard;
