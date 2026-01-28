import { useEffect } from "react";
import { pointsCheck } from "../../utils/pointsCheck";
import styles from "./Questionnaire.module.css";
import { NavLink } from "react-router-dom";
import { updateUserTest } from "../../data/userTest";

const ResultSuggestion = () => {
  const totalPoints = localStorage.getItem("points");
  const updatedPoints = Number(totalPoints);
  useEffect(() => {
    localStorage.removeItem("points");
    updateUserTest({ suggestedPortfolio: pointsCheck(updatedPoints) });
  }, []);
  if (!totalPoints) return <div>Punteggio incorretto</div>;

  if (Number.isNaN(updatedPoints)) return <div>Punteggio incorretto</div>;

  return (
    <div className={styles.questionnairePage}>
      <div className={styles.result}>
        <span>In base al tuo profilo, il piu' adatto e' il portafoglio</span>{" "}
        <strong className={styles.resultPortfolio}>
          {pointsCheck(updatedPoints)}
        </strong>
      </div>
      <span className={styles.disclaymerText}>
        Questo questionario fornisce un’indicazione orientativa e non
        costituisce consulenza finanziaria.
      </span>

      <NavLink
        className={styles.infoButton}
        to={`/dettagli/${pointsCheck(updatedPoints)?.toLowerCase()}`}
      >
        Scopri il portafoglio {pointsCheck(updatedPoints)}
      </NavLink>
    </div>
  );
};

export default ResultSuggestion;
