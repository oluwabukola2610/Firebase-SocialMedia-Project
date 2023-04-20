import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const NavBar = () => {
  const [user] = useAuthState(auth);

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? <Link to="/login">Login</Link> : <Link to="/createpost">Create Post</Link>}
      </div>

      <div className="user">
        {user && (
          <>
            <p> {user?.displayName}</p>
            <img src={user?.photoURL || ""} width="35" height="35" alt="" />
            <button onClick={logout} className="logout">
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
