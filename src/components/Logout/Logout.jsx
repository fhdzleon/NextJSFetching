import React from "react";

const Logout = ({ token, setToken }) => {
  const logoutHandler = () => {
    setToken(null);
    localStorage.clear();
  };

  return (
    <div>
      <button onClick={logoutHandler}>Salir</button>
    </div>
  );
};

export default Logout;
