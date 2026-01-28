import getUserTest from "../../data/userTest";
import { useState } from "react";
import ProfileUserName from "./ProfileUserName";

const Profilo = () => {
  const user = getUserTest();
  return (
    <>
      <ProfileUserName user={user} />

      <div>Dark mode</div>

      <div>FAQ</div>

      <div>Contattaci</div>

      <div>Lascia una recensione</div>
    </>
  );
};

export default Profilo;
