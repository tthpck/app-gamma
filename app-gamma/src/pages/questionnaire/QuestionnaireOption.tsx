import type { QuestionOption } from "../../types/questionnaireTypes";
import { NavLink } from "react-router-dom";
import styles from './Questionnaire.module.css'


type Props = {
    option: QuestionOption
    pageId: number
    isLast:boolean
}
const QuestionnaireOption = ({option, pageId, isLast}:Props) => {

function handleSelection(n: number) {
    const rawPoints = localStorage.getItem("points");
    const cleanPoints: number = rawPoints === null ? 0 : Number(rawPoints);
    const updatedPoints = cleanPoints + n;
    localStorage.setItem("points", String(updatedPoints));
  }


const nextUrl = isLast? '/risultati' : `/questionario/${pageId+1}`


  return (
    <div>
        <NavLink className={styles.optionButton}to={nextUrl} onClick={() => handleSelection(option.points)}>
          {option.option}
        </NavLink>
    </div>
  )
}

export default QuestionnaireOption