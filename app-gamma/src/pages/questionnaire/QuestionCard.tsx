import { useParams } from "react-router-dom";
import { questionnaire } from "../../data/questionnaire";
import { NavLink } from "react-router-dom";
import QuestionnaireOption from "./QuestionnaireOption";
import styles from './Questionnaire.module.css'



const QuestionCard = () => {
  const { id } = useParams();

  if (!id) return <div>Domanda non valida</div>;

  const currentIndex = Number(id);

  if (Number.isNaN(currentIndex)) return <div>Domanda non trovata</div>;

  const currentQuestionnaire = questionnaire.find((q) => q.id === id);

  const isFirst = currentIndex === Number(questionnaire[0].id);
  const isLast = currentIndex >= questionnaire.length;


  return (
    <div>
          {!isFirst && (
        <NavLink className = {styles.optionButton}to={`/questionario/${currentIndex - 1}`}>⬅</NavLink>
      )}
      <div>{currentQuestionnaire?.question}</div>

        {currentQuestionnaire?.options?.map(option=>
            <QuestionnaireOption isLast={isLast} pageId={currentIndex} key={option.id} option={option}/>
        )}

   

    </div>
  );
}

export default QuestionCard;
