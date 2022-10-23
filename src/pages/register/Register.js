import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { save } from "../../redux/userSlice";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.username);
  console.log(name);

  const dispatch = useDispatch();

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [pass, setpassed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
 
  let email = formValues.email;
  let username = formValues.username;
  let password = formValues.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    (setFormErrors(validate(formValues))) 
    if(pass){
      setIsSubmit(true);
      navigate("/welcome");
      dispatch(save({ email, username, password }));
    }
    //setFormErrors(validate(formValues));
   // setTimeout(() => navigate("/welcome"), 2000);
     //navigate("/welcome");
  };
  console.log(pass);
  console.log(formValues)

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    console.log(values.username)

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } 
    if(values.username && regex.test(values.email) && values.password.length >=4){
      setpassed(true)
    }
  
    return errors;
  };

  return (
    <div className="container">
      {isSubmit? (
        <div className="success-message">Signed in successfully</div>
      ) : null}

      <h1>CREATE AN ACCOUNT</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        <p>{formErrors.username}</p>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />

        <p>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
