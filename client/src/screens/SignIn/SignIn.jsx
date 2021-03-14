import React, { useState } from "react";
import "./SignIn.css";
import { signIn } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
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
        <button type="submit" className="signin-btn">
          SIGN IN
        </button>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout user={props.user} backgroundColor={"#82B0A2"}>
      <div className="form-container-sign-in">
        <h3 className="sign-in-header">Sign-in to your Account</h3>
        <div className="signin-fields">
          <form onSubmit={onSignIn}>
            <div className="individ-signin-input-container">
              <input
                required
                className="individual-signin-input"
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>

            <div className="individ-signin-input-container">
              <input
                required
                className="individual-signin-input"
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            {renderError()}
            <Link to={'/sign-up'} className="redirect-to-signup">
              <p>Don’t have an account? Sign up here!</p>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
