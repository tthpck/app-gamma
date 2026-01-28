import { NavLink } from "react-router-dom";
import styles from "./Questionnaire.module.css";

const QuestionnairePage = () => {
  return (
    <div className={styles.questionnairePage}>
      <div>
        <p className={styles.startText}>
          Rispondi a 3 brevi domande per capire quale dei portafogli Gamma fa al
          caso tuo.
        </p>
        <NavLink className={styles.startButton} to={"/questionario/1"}>
          Cominciamo!
        </NavLink>
      </div>
    </div>
  );
};

export default QuestionnairePage;
