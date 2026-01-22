import {useParams} from 'react-router-dom'
import { questionnaire } from '../../data/questionnaire';
import type { Questionnaire } from '../../types/questionnaireTypes';
import { NavLink } from 'react-router-dom';


const QuestionCard = () => {

    const {id} = useParams();

    if (!id) return <div>Domanda non valida</div>

    const currentQuestionnaire = questionnaire.find(q => q.id === id)

    const currentIndex = Number(id);

    if (typeof currentIndex === 'NaN') return <div>Domanda non trovata</div>
    
    const isFirst = (currentIndex === Number(questionnaire[0].id));
    const isLast = (currentIndex>=questionnaire.length)
  return (
    <div>
        <div>{currentQuestionnaire?.question}</div>
        <div>
            <button>{currentQuestionnaire?.option1}</button>
            <button>{currentQuestionnaire?.option2}</button>
            <button>{currentQuestionnaire?.option3}</button>
        </div>
    
    { !isFirst && <NavLink to={`/questionario/${currentIndex-1}`}>Indietro</NavLink>}
    { (isFirst || !isLast) && <NavLink to={`/questionario/${currentIndex+1}`}>Prossima</NavLink>}
    {isLast && <NavLink to={`/risultati`}>Scopri il portafoglio adatto a te</NavLink>}

    </div>
  )
}

export default QuestionCard