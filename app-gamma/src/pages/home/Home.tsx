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
        <img className={styles.logo} src={mainLogo} />
        <div>Prendi in mano il tuo futuro finanziario da oggi.</div>
      </div>

      {userName ? (
        <div>E' un piacere rivederti, {userName}</div>
      ) : (
        <div className={styles.welcomeCard}>
          <h3>Benvenuto/a!</h3>{" "}
        </div>
      )}

      <PortfoglioUpdateCountDown />

      <HomePortfoliosCard />

      <HomeAnalysisCard />
    </div>
  );
}

export default Home;
