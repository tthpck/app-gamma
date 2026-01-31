import { useState } from "react";
import type { User } from "../../data/userTest";
import styles from "./profile.module.css";
import Icons from "../../components/Icons";
import ProfileIcon from '../../images/profilePage/profilo.svg?react'

type Props = {
  user: User;
  handleUpdateUserName: (newUserName: string) => void;
};

const ProfileUserName = ({ user, handleUpdateUserName }: Props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleUpdate() {
    setIsUpdating(true);
  }

  function handleConfirm() {
    handleUpdateUserName(inputValue);
    setIsUpdating(false);

    setInputValue("");
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className={styles.profileCard}>
      <Icons Icon={ProfileIcon} size={30}/>

      <p className={styles.profileText}>{!user.userName? "" : user.userName?.charAt(0).toUpperCase() + user.userName?.substring(1)}</p>

      {!isUpdating && <button className ={styles.modifyButton} onClick={handleUpdate}>Modifica</button>}
      {isUpdating && (
        <>
          <input
          className={styles.inputName}
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e)}
          ></input>{" "}
          <button className ={styles.confirmButton} onClick={handleConfirm}>Conferma</button>
        </>
      )}

      {user.premium && <div>Premium User</div>}
    </div>
  );
};

export default ProfileUserName;
