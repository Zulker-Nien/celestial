// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/Firebase";

const SignIn = () => {
  //   useEffect(() => {
  //     async function fetchData() {
  //       const result = await getRedirectResult(auth);
  //       if (result) {
  //         const userDocRef = await createUserDocumentFromAuth(result.user);
  //       }
  //       console.log(result);
  //     }
  //     fetchData();
  //   }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
