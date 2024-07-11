import { useState } from "react";

const LoginForm = ({ token, setToken }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setToken(json.token);
        localStorage.setItem("userToken", json.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center p-10 space-y-4 rounded bg-slate-600">
      <p>Inicia sesión</p>
      <form onSubmit={submitHandler} className="flex flex-col space-y-4">
        <input
          className="px-2"
          type="text"
          name="username"
          onChange={inputHandler}
          placeholder="Username"
          value={userData.username}
        />
        <input
          className="px-2"
          type="password"
          name="password"
          onChange={inputHandler}
          placeholder="Password"
          value={userData.password}
        />
        <button className="bg-sky-600">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;
