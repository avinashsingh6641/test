import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div>
          <div >

          </div>

      </div>
      
      <nav>
        <ul>
          <li>Home</li>
          <li>Tutorial</li>
          <li>About us</li>
          <li>Help</li>
          <li>
            <NavLink activeClassName={classes.active} to="/signin">
              signIn
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
