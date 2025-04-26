import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
        <nav>
            <ul>
                <NavLink to={"/parte1"}> <h3 className="H2" >Parte 1</h3> </NavLink>
                <NavLink to={"/parte2"}> <h3 className="H2" >Parte 2</h3> </NavLink>
            </ul>
        </nav>
    </div>
  )
}
