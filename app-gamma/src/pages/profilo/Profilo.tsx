import { NavLink } from "react-router-dom";
import getUserTest from "../../data/userTest";
import ProfileUserName from "./ProfileUserName";
import { DarkModeToggle } from "./DarkModeToggle";
import { useState } from "react";
import ContactUs from "./ContactUs";
import { updateUserTest } from "../../data/userTest";
import styles from "./profile.module.css";

const Profilo = () => {
  const [user, setUser] = useState(getUserTest());

  function handleUpdateUserName(newUserName: string) {
    updateUserTest({ userName: newUserName });
    setUser(getUserTest());
  }
  return (
    <div className={styles.profilePage}>
      <div>
        <ProfileUserName
          user={user}
          handleUpdateUserName={handleUpdateUserName}
        />
      </div>

      <DarkModeToggle />

      <NavLink className={styles.profileCard} to="/FAQ/">
        FAQ
      </NavLink>

      <ContactUs />

      <NavLink
        className={styles.profileCard}
        target="_blank"
        to="https://it.trustpilot.com/review/gammainvestimenti.it"
      >
        Lascia una recensione
      </NavLink>

      <div className={styles.profileCard}>Logout</div>
    </div>
  );
};

export default Profilo;
