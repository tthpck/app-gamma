import styles from './Portafogli.module.css'
import {NavLink} from 'react-router-dom'

type Props = {
    portfolio: {
      name: string
      id: string
      monthlyPrice: string | number
      minCapital: number
      timeHorizon: string
      instruments: string
    }
}

const PortfolioCard = ({portfolio}: Props) => {




  return (
        <div key = {portfolio.id}className={styles.portfolioCard}>
      <div className={styles.titleCard}>
        {portfolio.name}
      </div>
      <div className={styles.priceCard}>
        {portfolio.monthlyPrice}
      </div>
      <NavLink to={`/dettagli/${portfolio.id}`}>Scopri di piu</NavLink>
      <div className={styles.infoCard}>
        <p className={styles.infoTitle}>Portfolio minimo</p>
        <p className={styles.infoDetails}>{portfolio.minCapital}</p>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.infoTitle}>Orizzonte Temporale</p>
        <p className={styles.infoDetails}>{portfolio.timeHorizon}</p>
      </div>
      <div className={styles.infoCard}>
        <p className={styles.infoTitle}>Strumenti</p>
        <p className={styles.infoDetails}>{portfolio.instruments}</p>
      </div>
     
    </div>
  )
}

export default PortfolioCard