import getUserTest, { updateUserTest } from "../../data/userTest";
import ProfileUserName from "./ProfileUserName";
import { useState } from "react";
import ContactUs from "./ContactUs";

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

      <div>Dark mode</div>

      <div>FAQ</div>

      <ContactUs />

      <div>Lascia una recensione</div>
    </>
  );
};

export default Profilo;
