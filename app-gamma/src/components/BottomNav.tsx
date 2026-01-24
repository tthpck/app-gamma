import styles from "./BottomNav.module.css";
import { NavLink } from "react-router-dom";
import AnalysisIcon from "../../src/images/navbar/analisi.svg?react";
import PortfolioIcon from "../../src/images/navbar/portafogli.svg?react";
import HomeIcon from "../../src/images/navbar/home.svg?react";
import ProfileIcon from "../../src/images/navbar/profilo.svg?react";
import Icons from "./Icons";

const BottomNav = () => {
  console.log(PortfolioIcon);
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navlink} to="/">
        <Icons Icon={HomeIcon} size={30} />
      </NavLink>

      <NavLink className={styles.navlink} to="/portafogli">
        <Icons Icon={PortfolioIcon} size={30} />
      </NavLink>

      <NavLink className={styles.navlink} to="/analisi">
        <Icons Icon={AnalysisIcon} size={30} />
      </NavLink>

      <NavLink className={styles.navlink} to="/profilo">
        <Icons Icon={ProfileIcon} size={30} />
      </NavLink>
    </nav>
  );
};

export default BottomNav;
