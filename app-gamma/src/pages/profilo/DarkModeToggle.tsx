import toggleStyles from "./DarkModeToggle.module.css";
import profileStyles from "./profile.module.css";
import { useState, useEffect } from "react";
import Icons from '../../components/Icons'
import DarkModeToggleIcon from '../../images/profilePage/darkMode.svg?react'

export const DarkModeToggle = () => {
  const [checkStatus, setCheckStatus] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setCheckStatus(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", checkStatus);
    localStorage.setItem("theme", checkStatus ? "dark" : "");
  }, [checkStatus]);

  return (
    <div className={profileStyles.profileCard}>
      <Icons Icon={DarkModeToggleIcon}size={30}/>
      <p className={profileStyles.profileText}>Dark mode</p>

      <label className={`${toggleStyles.switch} ${profileStyles.switch}`}>
        <input
          onChange={() => setCheckStatus(!checkStatus)}
          type="checkbox"
          checked={checkStatus}
        />
        <span className={toggleStyles.slider}></span>
      </label>
    </div>
  );
};
