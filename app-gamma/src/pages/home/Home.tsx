import { useState } from "react";
import mainLogo from "./GAMMA-LOGO.jpg";
import styles from "./Home.module.css";
import HomePortfoliosCard from "./HomePortfoliosCard";
import HomeAnalysisCard from "./HomeAnalysisCard";
import LoginCard from "./LoginCard";
import PortfoglioUpdateCountDown from "./PortfoglioUpdateCountDown";

function Home() {
  const [userName, _] = useState<string>("");
  return (
    <div className={styles.homePage}>
      <LoginCard userName={userName} />
      <div className={styles.mainCard}>
      </div>
      <div className={styles.welcomeCard}><h1>{userName? 'Bentornato' : 'Ciao'} {userName} ! </h1>
      </div>
      

      <PortfoglioUpdateCountDown />

      <HomePortfoliosCard />

      <HomeAnalysisCard />
    </div>
  );
}

export default Home;
