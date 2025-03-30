import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, editUser, userToEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Se houver um usuário para editar, preenche os campos
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const user = {
      id: userToEdit ? userToEdit.id : Date.now(), // ID novo ou do usuário existente
      name,
      email,
    };

    if (userToEdit) {
      editUser(user); // Se for edição, chama editUser
    } else {
      addUser(user); // Se for adição, chama addUser
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{userToEdit ? "Editar" : "Adicionar"}</button>
    </form>
  );
};

export default UserForm;
