import { useState, useEffect } from "react";
import { updatesDates } from "../../data/updatesDates";
import type { UpdatesDates } from "../../types/updatesDatesTypes";
import dayjs from "dayjs";
import styles from "./Home.module.css";

const PortfoglioUpdateCountDown = () => {
  const nextPortfolioUpdate = updatesDates.find(
    (update: UpdatesDates) => new Date(update.date).getTime() - Date.now() > 0,
  );
  const nextPortfolioUpdateDate = dayjs(nextPortfolioUpdate?.date).format(
    "DD MMM YY",
  );

  function calculateCountdown() {
    if (!nextPortfolioUpdate) return `Cannot find next update`;
    const now = Date.now();
    const timeDifference = new Date(nextPortfolioUpdate.date).getTime() - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const d = days > 1 ? "giorni" : "giorno";
    const h = hours > 1 ? "ore" : "ora";
    const m = minutes > 1 ? "minuti" : "minuto";
    const s = seconds > 1 ? "secondi" : "secondo";
    return `${days} ${d} ${hours} ${h} ${minutes} ${m} ${seconds} ${s}`;
  }
  const [countdown, setCountdown] = useState(() => calculateCountdown());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={styles.homeCard}>
      <div>{`Il prossimo aggiornamento per i portafogli è previsto il ${nextPortfolioUpdateDate}`}</div>
      <div>Tra {countdown}</div>
    </div>
  );
};

export default PortfoglioUpdateCountDown;
