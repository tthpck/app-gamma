import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

type Props = {
  userName: string | null;
};

const LoginCard = ({ userName }: Props) => {
  return (
    <>
      {!userName && <div className={styles.homeCard}>Registrati o Accedi</div>}
    </>
  );
};

export default LoginCard;
