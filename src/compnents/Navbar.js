import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
        <nav className="row nav-bar-tag shadow-sm m-0">
            <ul className="list-unstyled nav-bar-list">
                <li><NavLink to="/" activeStyle={{ fontWeight:"bold", color:"red"}}> Home</NavLink></li>
                <li><NavLink to="/calculator">Calculator</NavLink> </li>
                <li><NavLink to="/today-plans">TodayPlan's</NavLink></li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar;