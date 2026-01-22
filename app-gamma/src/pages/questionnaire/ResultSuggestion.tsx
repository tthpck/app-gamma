import { useEffect } from "react";
import { pointsCheck } from "../../utils/pointsCheck";

const ResultSuggestion = () => {
  const totalPoints = localStorage.getItem("points");

  useEffect(() => {
    return () => localStorage.removeItem("points");
  }, []);
  if (!totalPoints) return <div>Punteggio incorretto</div>;

  const updatedPoints = Number(totalPoints);
  if (Number.isNaN(updatedPoints)) return <div>Punteggio incorretto</div>;

  return (
    <div>
      <div>
        “Questo questionario fornisce un’indicazione orientativa e non
        costituisce consulenza finanziaria.”
      </div>
      <div>
        {`In base al tuo profilo, il piu' adatto e' il portafoglio ${pointsCheck(updatedPoints)} `}
      </div>
    </div>
  );
};

export default ResultSuggestion;
