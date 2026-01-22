
import { useState} from 'react'
import mainLogo from './GAMMA-LOGO.jpg'
import styles from './Home.module.css'
import HomePortfoliosCard from './HomePortfoliosCard'
import HomeAnalysisCard from './HomeAnalysisCard'
import LoginCard from './LoginCard'
import PortfoglioUpdateCountDown from './PortfoglioUpdateCountDown'


function Home (){

  const [userName, setUserName]= useState<string>('')
return (
  <>
    <div className = {styles.mainCard}>GAMMA INVESTIMENTI</div>
    <img className = {styles.logo} src={mainLogo}/>

    {userName? <div>E' un piacere rivederti, {userName}</div> : <>Benvenuto/a!</>}


    <div>Prendi in mano il tuo futuro finanziario da oggi.</div>
    <LoginCard userName={userName}/>

  <PortfoglioUpdateCountDown />

  <HomePortfoliosCard />

  <HomeAnalysisCard />


    </>
  )
}

export default Home