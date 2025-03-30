import React from "react";

const UserCard = ({ user, removeUser, setUserToEdit }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => removeUser(user.id)}>Remover</button>
      <button onClick={() => setUserToEdit(user)}>Editar</button>
    </div>
  );
};

export default UserCard;
