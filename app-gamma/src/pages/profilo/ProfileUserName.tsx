import { useState } from "react";
import type { User } from "../../data/userTest";

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
    <div>
      {user.userName}

      {!isUpdating && <button onClick={handleUpdate}>Modifica</button>}
      {isUpdating && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e)}
          ></input>{" "}
          <button onClick={handleConfirm}>Conferma</button>
        </>
      )}

      {user.premium && <div>Premium User</div>}
    </div>
  );
};

export default ProfileUserName;
