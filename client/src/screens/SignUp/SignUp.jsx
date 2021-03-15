import { useState} from "react";
import "./SignUp.css";
import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";

const SignUp = (props) => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const checkForErrors = () => {
    if (password !== passwordConfirmation) {
      setErrorMessage("Sorry, passwords do not match!");
      return true;
    }
    setErrorMessage(null);
    return false;
  };

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    const hasError = checkForErrors();

    if (!hasError) {
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
    }
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
        <div>
          {errorMessage && <p id="error-message">{errorMessage}</p>}
          <button type="submit" className="signup-btn">
            SIGN UP
          </button>
        </div>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout user={props.user} backgroundColor={"#71A9B0"}>
      <div className="form-container-sign-up">
        <h3 className="sign-up-header">Sign-Up For An Account</h3>
        <div className="signup-fields">
          <form onSubmit={onSignUp}>
            <div className="signup-input-container">
              <input
                className= "individual-signup-input"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <div className="signup-input-container">
              <input
                className="individual-signup-input"
                required
                type="text"
                name="username"
                value={username}
                placeholder="Create Username"
                onChange={handleChange}
              />
            </div>

            <div className="signup-input-container">
              <input
                className="individual-signup-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Create Password"
                onChange={handleChange}
              />
            </div>

            <div className="signup-input-container">
              <input
                className="individual-signup-input"
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
