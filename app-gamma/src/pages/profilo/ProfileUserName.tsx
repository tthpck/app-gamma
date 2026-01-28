const ProfileUserName = ({ user }) => {
  return (
    <div>
      {user.firstName}
      {` `}
      {user.lastName}
      <button>Modifica</button>
      {user.premium && <div>Premium User</div>}
    </div>
  );
};

export default ProfileUserName;
