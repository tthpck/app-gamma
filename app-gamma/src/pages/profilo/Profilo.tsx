<<<<<<< Updated upstream
import getUserTest, { updateUserTest } from "../../data/userTest";
import ProfileUserName from "./ProfileUserName";
import { useState } from "react";
import ContactUs from "./ContactUs";
=======
import { NavLink } from "react-router-dom";
import getUserTest from "../../data/userTest";
import FAQ from "./FAQ";
import ProfileUserName from "./ProfileUserName";
import { DarkModeToggle } from "./DarkModeToggle";
>>>>>>> Stashed changes

const Profilo = () => {
  const [user, setUser] = useState(getUserTest());

  function handleUpdateUserName(newUserName: string) {
    updateUserTest({ userName: newUserName });
    setUser(getUserTest());
  }
  return (
    <>
      <ProfileUserName
        user={user}
        handleUpdateUserName={handleUpdateUserName}
      />

      <DarkModeToggle />

      <NavLink to='/FAQ/'>FAQ</NavLink>

      <ContactUs />

      <NavLink to='https://it.trustpilot.com/review/gammainvestimenti.it'>Lascia una recensione</NavLink>
    </>
  );
};

export default Profilo;
