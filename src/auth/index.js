import { useHistory, useLocation } from "@docusaurus/router";
import React, { useState, useEffect, useContext, createContext } from "react";
const AuthContext = createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(auth, location) {
  const history = useHistory();

  useEffect(() => {
    const inAuthGroup = location.pathname.includes("haltec");

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !auth &&
      inAuthGroup
    ) {
      // Redirect to the sign-in page.
      ("/sign-in");
      history.push("/sign-in?u=" + location.pathname);
    } else if (auth && inAuthGroup) {
      // Redirect away from the sign-in page.
      // history.push(location.pathname);
    }
  }, [auth, location]);
}

export function AuthProvider(props) {
  const [auth, setAuth] = useState();
  const location = useLocation();

  useProtectedRoute(auth, location);

  const signIn = (password) => {
    if (password === "CpvYF4aaks9xCDj") {
      setAuth(password);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
