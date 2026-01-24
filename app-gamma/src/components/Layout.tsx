import BottomNav from "./BottomNav";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.main}>
    <div className={styles.div}>
      {children}
      <BottomNav />
    </div>
    </div>
  );
};

export default Layout;
