import styles from './HomeCards.module.css'
import { NavLink } from 'react-router-dom'

const HomeAnalysisCard = () => {
  return (

        <NavLink to={'/analisi'}className = {styles.homeCard}>
      <div>Leggi le nostre analisi</div>
    </NavLink>
  )
}

export default HomeAnalysisCard