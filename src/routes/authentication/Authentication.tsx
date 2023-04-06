import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/signInForm/SignInForm";
import { AuthenticationContainer } from "./Authentication.styles";
const SignIn = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default SignIn;
