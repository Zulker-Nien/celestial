import { useState } from "react";
import { useDispatch } from "react-redux";
import { FirebaseError } from "firebase/app";
import FormInput from "../formInput/FormInput";
import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/UserAction";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch<any>(googleSignInStart());
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      dispatch<any>(emailSignInStart(email, password));
      // if (response) {
      //   const { user } = response;
      // }
      resetFormFields();
    } catch (error: unknown) {
      switch ((error as FirebaseError).code) {
        case "auth/wrong-password":
          alert("Incorrect password for email.");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email.");
          break;
        default:
          console.log(error);
      }

      console.error("User creation encountered an error", error);
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
