import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/authSlice";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authorization, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (authorization) {
      navigate("/user");
    }
  }, [authorization, navigate]);

  return (
    <div>
      <h1>Authorization page</h1>
      {error && <span>{error}</span>}
      <form onSubmit={onSubmit}>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          type="email"
        />
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Authorization;
