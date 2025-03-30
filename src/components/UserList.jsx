import React, { useState } from "react";
import { usersData } from "../data";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState(usersData);
  const [userToEdit, setUserToEdit] = useState(null);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setUserToEdit(null); // Limpa o estado de edição após salvar
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <UserForm addUser={addUser} editUser={editUser} userToEdit={userToEdit} />
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            removeUser={removeUser}
            setUserToEdit={setUserToEdit} // Passa a função de editar para cada UserCard
          />
        ))
      )}
    </div>
  );
};

export default UserList;
