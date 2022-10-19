import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Utilities/auth";
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const value = { user, loading };
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
