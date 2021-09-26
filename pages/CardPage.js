import classes from "./CardPage.module.css";
import Card from "../components/Card";

import { NavLink } from "react-router-dom";

const CardPage = () => {
  return (
    <div className={classes.container}>
      <nav>
        <NavLink to="/videopage">
          <Card><p>Make A Party</p>
          <i class="material-icons md-48">movie</i>
          </Card>
        </NavLink>
      </nav>

      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};
export default CardPage;
