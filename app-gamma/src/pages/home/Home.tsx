import { useState } from "react";
import styles from "./Home.module.css";
import HomePortfoliosCard from "./HomePortfoliosCard";
import HomeAnalysisCard from "./HomeAnalysisCard";
import LoginCard from "./LoginCard";
import PortfoglioUpdateCountDown from "./PortfoglioUpdateCountDown";
import getUserTest from "../../data/userTest";

function Home() {
  const [user, setUser] = useState(getUserTest());

  return (
    <div className={styles.homePage}>
      <LoginCard userName={user.firstName} />
      <div className={styles.mainCard}></div>
      <div className={styles.welcomeCard}>
        <h1>
          {user ? "Bentornato" : "Ciao"} {user.firstName} !{" "}
        </h1>
      </div>

      <PortfoglioUpdateCountDown />

      <HomePortfoliosCard user={user} />

      <HomeAnalysisCard />
    </div>
  );
}

export default Home;
