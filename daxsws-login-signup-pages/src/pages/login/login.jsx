import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [loginFields, setloginFields] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleLoginFieldChange = (e) => {
    if (e.target.name === "username")
      setloginFields({ ...loginFields, username: e.target.value });
    else setloginFields({ ...loginFields, password: e.target.value });
  };

  const handleLoginSubmit = () => {
    const newErrors = {};
    const { username, password } = loginFields;
    if (!username) {
      newErrors.username = "Enter username";
    }
    if (!password) {
      newErrors.password = "Enter password";
    }
    setErrors(newErrors);
    console.log(loginFields);
  };
  return (
    <div>
      <header className="login-theme text-center p-5 mb-5">
        <h1>Login</h1>
        <h5>Sign in to continue</h5>
      </header>
      <div className="text-center">
        <div className="mt-5">
          <TextField
            label="Username"
            name="username"
            type="text"
            variant="standard"
            className="mt-3 col-4"
            value={loginFields.username}
            onChange={(e) => handleLoginFieldChange(e)}
            error={errors.username}
            helperText={errors.username}
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="standard"
            className="mt-3 col-4"
            value={loginFields.password}
            onChange={(e) => handleLoginFieldChange(e)}
            error={errors.password}
            helperText={errors.password}
          />
        </div>
        <div>
          <Button
            variant="contained"
            className="mt-5 login-theme login-button"
            onClick={handleLoginSubmit}
          >
            Login
          </Button>
        </div>
        <div className="mt-2">
          <b>
            Don’t have an account?{" "}
            <span className="link" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </b>
        </div>
      </div>
    </div>
  );
};
export default Login;
