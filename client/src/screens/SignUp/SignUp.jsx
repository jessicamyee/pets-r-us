import React, { useState } from "react";
import "./SignUp.css";
import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout user={props.user}>
      <div className="form-container-sign-up">
        <h3 className="sign-up-header">Sign-Up For An Account</h3>
        <div className="signup-fields">
          <form onSubmit={onSignUp}>
            <div className="input-field">
              <input
                required
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <input
                required
                type="text"
                name="username"
                value={username}
                placeholder="Create Username"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <input
                required
                name="password"
                value={password}
                type="password"
                placeholder="Create Password"
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <input
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
