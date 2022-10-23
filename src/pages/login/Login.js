import "./login.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  const rusername = useSelector((state) => state.user.username);
  const rpassword = useSelector((state) => state.user.password);
  console.log(rusername);

  const [values, setValues] = useState({
    firstName: "",
    email: "",
  });
  console.log(values);

  const [submitted, setSubmitted] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleFirstName = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handLeEmailName = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  console.log(setValues);

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      values.firstName === rusername &&
      values.email === rpassword
    ) {
      setSubmitted(true);
      setTimeout(()=>navigate("/welcome"),2000) 
    }
    else{
      setWrong(true);
    }
    
  };

  return (
    <div class="form-container">
      {submitted ? (
        <div className="success-message">Welcome {values.firstName}</div>
      ) :null}

      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          onChange={handleFirstName}
          value={values.firstName}
          placeholder="username"
        />
        {values.firstName === rusername ? null : null}
        <input
          id="email"
          class="form-field"
          type="password"
          onChange={handLeEmailName}
          value={values.email}
          placeholder="password"
        />
        {values.email === rpassword ? null : null}
       
        <button onClick={handleRegister} class="form-field" type="submit">
          Login
        </button>
      </form>
      <Link className="link" to="/register"> Did you register?</Link>
      {wrong? <h1 className="wrong">Sorry!Somting went wrong</h1>:null}
    </div>
  );
}

export default Login;
