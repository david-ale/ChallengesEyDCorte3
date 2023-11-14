import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

export const LoginPage = () => {
    const { user = {}, setUser = () => {} } = useContext(UserContext);
    const navigate = useNavigate();
  
    const onLogin = () => {
      setUser({
        id: 313,
        name: "David Alejandro",
        email: "davidalejo02@hotmail.com",
      });
  
      const lastPath = localStorage.getItem('lastPath') || '/';
      navigate(lastPath, {
        replace: true
      });
    };
  
    return (
      <>
        <div>Login Page</div>
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
        {!user.id && <button onClick={() => onLogin()}>Login</button>}
      </>
    );
  };