import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setUser }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUser());
    }

    return (
        <React.Fragment>
            <NavLink to="/" >
                <div>
                    Home
                </div>
            </NavLink>
            <NavLink to="/myprojects" >
                <div>
                    My Projects
                </div>
            </NavLink>
            <header>
                <button onClick={handleLogout}>Logout</button>
            </header>
        </React.Fragment>
    )
}

export default NavBar;
