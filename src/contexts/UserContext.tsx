import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/Firebase";

interface IUserContext {
  currentUser: any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>> | null;
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
