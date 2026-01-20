import styles from './AnalysisCard.module.css'
import type { Analysis } from '../../types/analysisTypes'
import { NavLink } from 'react-router-dom'

type Props = {
    analysis: Analysis
}
const AnalysisCard = ({analysis}:Props) => {

    function cutText(text: string){
        const maxLength = 150;
        return `${text.slice(0,maxLength)}${'...'}`
    }
  return (
    <NavLink className={styles.analysisCard} to={`/analisi/${analysis.id}`}>
      <div className={styles.titleCard}>{analysis.title}</div>
      <div className={styles.dateCard}>{analysis.date}</div>
      <>{cutText(analysis.text)}</>
    </NavLink>
  )
}

export default AnalysisCard