import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Signup = () => {
  const navigate = useNavigate();
  const [signupFields, setsignupFields] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleSignupFieldChange = (e) => {
    setsignupFields({ ...signupFields, [e.target.name]: e.target.value });
    validateForm();
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, userName, email, phone, newPassword, confirmPassword } =
      signupFields;

    if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only alphabets";
    }

    if (!/^[A-Za-z0-9@._-]+$/.test(userName)) {
      newErrors.userName = "Username must be alphanumeric";
    }

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      newErrors.email = "Email must be a valid Gmail address";
    }

    if (!/^\+\d{1,3}[-\s]?\d{6,14}$/.test(phone)) {
      newErrors.phone =
        "Phone must start with country code (e.g., +919876543210).";
    }

    if (!/^[A-Za-z0-9@._-]+$/.test(newPassword)) {
      newErrors.newPassword = "Password must be alphanumeric and symbols";
    }
    if (newPassword === userName) {
      newErrors.newPassword = "Password cannot be the same as username.";
    }

    if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "New and confirm password do not match";
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    let newErrors = validateForm();
    let allFieldsFilled = Object.values(signupFields).some(
      (item) => item == ""
    );
    console.log(newErrors, signupFields, !allFieldsFilled);
    if (Object.keys(errors).length === 0 && !allFieldsFilled) {
      alert("Registered Successfully");
      navigate("/login");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <header className="login-theme text-center p-5 mb-5">
        <h2>Create New Account</h2>
      </header>
      <div className="text-center col-12">
        <div className="mt-5">
          <TextField
            label="NAME"
            name="name"
            type="text"
            variant="standard"
            className="col-5 m-4"
            value={signupFields.name}
            onChange={(e) => handleSignupFieldChange(e)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="USERNAME"
            name="userName"
            type="text"
            variant="standard"
            className="col-5 m-4"
            value={signupFields.userName}
            onChange={(e) => handleSignupFieldChange(e)}
            error={!!errors.userName}
            helperText={errors.userName}
          />
        </div>
        <div>
          <TextField
            label="EMAIL"
            name="email"
            type="email"
            variant="standard"
            className="col-5 m-4"
            value={signupFields.email}
            onChange={(e) => handleSignupFieldChange(e)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="PHONE NO"
            name="phone"
            type="text"
            variant="standard"
            className="col-5 m-4"
            value={signupFields.phone}
            onChange={(e) => handleSignupFieldChange(e)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </div>
        <div>
          <TextField
            label="NEW PASSWORD"
            name="newPassword"
            type="password"
            variant="standard"
            className="col-5 m-4"
            value={signupFields.newPassword}
            onChange={(e) => handleSignupFieldChange(e)}
            error={!!errors.newPassword}
            helperText={errors.newPassword}
          />
          <TextField
            label="CONFIRM PASSWORD"
            name="confirmPassword"
            type="password"
            variant="standard"
            className="col-5 m-4"
            value={signupFields.confirmPassword}
            onChange={(e) => handleSignupFieldChange(e)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </div>
        <div className="text-end col-11">
          <Button
            variant="contained"
            className="mt-5 mb-5 login-theme big-button"
            onClick={(e) => handleSignupSubmit(e)}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
