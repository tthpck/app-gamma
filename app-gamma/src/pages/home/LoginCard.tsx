import styles from "./Home.module.css";

type Props = {
  userName: string | null;
};

const LoginCard = ({ userName }: Props) => {
  return (
    <>
      {!userName && (
        <div className={`${styles.homeCard} ${styles.loginCard}`}>
          Registrati o Accedi
        </div>
      )}
    </>
  );
};

export default LoginCard;
