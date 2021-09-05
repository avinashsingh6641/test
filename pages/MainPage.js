import { NavLink } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    
      <div className="div">
        <div className="image">
          <div className="circle"></div>
        </div>
        <div className="line"></div>
        <p className="p1"><b>Watchdawgs</b></p>
        <p className="p2">Because you need your 'dawgs' come home to</p>
        <p className="p3"><b>watchdawgs is a free webapp made just for you to share
            your precious time with your friends and family no matter
            the distance.
            </b>
        </p>
        
        <nav>
        
            <NavLink className='button' to="/signin">
              Make A Party
            </NavLink>
          
          </nav>
         
        
      </div>
      
    
  );
};
export default MainPage;