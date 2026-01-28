import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const HomePortfoliosCard = ({ user }) => {
  return (
    <NavLink to={`/questionario`} className={styles.homeCard}>
      <div className={styles.cardContent}>
        {!user.suggestedPortfolio ? (
          <>
            <strong>Scopri il tuo portafoglio</strong>
            <span>Rispondi a poche domande e trova quello giusto per te</span>
          </>
        ) : (
          <>
            <strong>
              Il portafoglio piu' adatto a te e' il
              <p className={styles.suggestedPortfolio}>
                {user.suggestedPortfolio ?? ""}
              </p>
            </strong>
            <span>Rifai il questionario</span>
          </>
        )}
      </div>
    </NavLink>
  );
};

export default HomePortfoliosCard;
