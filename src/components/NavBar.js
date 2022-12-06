import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setUser, user }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(setUser(null));
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
            {user ? (
                    <header>
                        <button onClick={handleLogout}>Logout</button>
                    </header>
                    ) : (
                    <div>
                        
                    </div>
                    )}
            
        </React.Fragment>
    )
}

export default NavBar;
