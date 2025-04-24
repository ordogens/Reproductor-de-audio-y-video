import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
        <nav>
            <ul>
                <NavLink to={"/parte1"}>parte 1</NavLink>
                <NavLink to={"/parte2"}>parte 2</NavLink>
            </ul>
        </nav>
    </div>
  )
}
