import styles from './Portafogli.module.css';
import { portfolios } from '../../data/portfolios';
import PortfolioCard from './PortfolioCard'

const Portafogli = () => {
  return (
    <div className={styles.portfolioList}>

      {portfolios.map(portfolio => {
        return (
          <PortfolioCard key={portfolio.id}portfolio={portfolio} />
        )
      })}

    </div>



  )
}

export default Portafogli