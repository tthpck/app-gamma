import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const HomeAnalysisCard = () => {
  return (
    <NavLink to={"/analisi"} className={styles.homeCard}>
   <div className={styles.cardContent}>
     <strong>Leggi le nostre analisi</strong>
      <span>Approfondimenti regolari sui mercati</span>
   </div>
    </NavLink>
  );
};

export default HomeAnalysisCard;
