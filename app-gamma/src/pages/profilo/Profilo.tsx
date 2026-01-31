import { NavLink } from "react-router-dom";
import getUserTest from "../../data/userTest";
import ProfileUserName from "./ProfileUserName";
import { DarkModeToggle } from "./DarkModeToggle";
import { useState } from "react";
import ContactUs from "./ContactUs";
import { updateUserTest } from "../../data/userTest";
import styles from "./profile.module.css";
import Icons from "../../components/Icons";
import FAQIcon from '../../images/profilePage/FAQ.svg?react';
import reviewIcon from '../../images/profilePage/review.svg?react';
import logoutIcon from '../../images/profilePage/logout.svg?react';
import trustPilotIcon from '../../images/profilePage/trustPilot.svg?react';



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
      <Icons Icon = {FAQIcon} size ={30}/>
        <p className={styles.profileText}>FAQ</p>
      </NavLink>

      <ContactUs />

      <NavLink
        className={styles.profileCard}
        target="_blank"
        to="https://it.trustpilot.com/review/gammainvestimenti.it"
      >
        <Icons Icon={reviewIcon} size={30}/>
        <p className={styles.profileText}>Lascia una recensione</p>
        <div className={styles.trustIcon}><Icons Icon={trustPilotIcon} size={40}/></div>
      </NavLink>

      <div className={styles.profileCard}>
        <Icons Icon={logoutIcon} size={30}/>
        <p className={styles.profileText}>Logout</p>
      
      </div>
    </div>
  );
};

export default Profilo;
