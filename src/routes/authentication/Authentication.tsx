import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/signInForm/SignInForm";
import "./Authentication.styles.scss";
const SignIn = () => {
  return (
    <div className="authenticationContainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
