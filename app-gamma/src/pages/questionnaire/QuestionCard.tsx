import { useParams } from "react-router-dom";
import { questionnaire } from "../../data/questionnaire";
import { NavLink } from "react-router-dom";

const QuestionCard = () => {
  const { id } = useParams();

  if (!id) return <div>Domanda non valida</div>;

  const currentIndex = Number(id);

  if (Number.isNaN(currentIndex)) return <div>Domanda non trovata</div>;

  const currentQuestionnaire = questionnaire.find((q) => q.id === id);

  const isFirst = currentIndex === Number(questionnaire[0].id);
  const isLast = currentIndex >= questionnaire.length;

  function handleSelection(n: number) {
    const rawPoints = localStorage.getItem("points");
    const cleanPoints: number = rawPoints === null ? 0 : Number(rawPoints);
    const updatedPoints = cleanPoints + n;
    localStorage.setItem("points", String(updatedPoints));
  }

  return (
    <div>
      <div>{currentQuestionnaire?.question}</div>
      <div>
        <button onClick={() => handleSelection(10)}>
          {currentQuestionnaire?.option1}
        </button>
        <button onClick={() => handleSelection(20)}>
          {currentQuestionnaire?.option2}
        </button>
        <button onClick={() => handleSelection(30)}>
          {currentQuestionnaire?.option3}
        </button>
      </div>

      {!isFirst && (
        <NavLink to={`/questionario/${currentIndex - 1}`}>Indietro</NavLink>
      )}
      {!isLast && (
        <NavLink to={`/questionario/${currentIndex + 1}`}>Prossima</NavLink>
      )}
      {isLast && (
        <NavLink to={`/risultati`}>Scopri il portafoglio adatto a te</NavLink>
      )}
    </div>
  );
};

export default QuestionCard;
