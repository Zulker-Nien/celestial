import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase";
import { FirebaseError } from "firebase/app";
import FormInput from "../formInput/FormInput";
import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (response) {
        const { user } = response;
      }
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
          <Button type="submit" buttonType="default">
            Sign In
          </Button>
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
