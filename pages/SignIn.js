import { NavLink } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import img1 from "../images/signinPageImg.jpg";
import classes from "./SignIn.module.css";
const signIn = () => {
  return (
    <div className={classes.page}>
        <h2>Hey there,dawg!</h2>
        <p >I see you have come for a monde tour avec des copaines</p>
      <AuthForm />
      <div className={classes.image}>
        <img src={img1} alt=""></img>
      </div>
      <nav >
        <NavLink to="/CardPage">Continue as Guest</NavLink>
      </nav>
    </div>
  );
};

export default signIn;
