import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/Firebase";
import { FirebaseError } from "firebase/app";
import FormInput from "../formInput/FormInput";
import "./SignUpForm.styles.scss";
import Button from "../button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const userCredentials = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (userCredentials) {
        const { user } = userCredentials;
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      }
    } catch (error: unknown) {
      if ((error as FirebaseError).code === "auth/email-already-in-use") {
        alert("This Email is already in use.");
      }
      console.error("User creation encountered an error", error);
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="signUpContainer">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit" buttonType={"default"}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;