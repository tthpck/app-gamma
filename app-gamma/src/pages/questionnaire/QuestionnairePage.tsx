import {NavLink} from 'react-router-dom'
import styles from './Questionnaire.module.css'

const QuestionnairePage = () => {
  return (
    <div>
        <div>Rispondi a 3 brevi domande per capire quale dei portafogli Gamma fa al caso tuo.</div>
        <NavLink className={styles.optionButton}to={'/questionario/1'}>Cominciamo!</NavLink>
    </div>
  )
}

export default QuestionnairePage