import React from "react";
import { NavLink } from "react-router-dom";
import AboutUs from "./AboutUs";

function NavBar({ setUser, user }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(setUser(null));
    }

    return (
        /*<React.Fragment>
            <NavLink to="/"  activeStyle>
                <h1>Logo</h1>
                <div>
                    Home
                </div>
            </NavLink>
            <NavLink to="/myprojects" activeStyle >
                <div>
                    My Projects
                </div>
            <NavLink>
                <div>
                  <AboutUs/>
                </div>
            </NavLink>
            </NavLink >
            {user ? (
                    <header>
                        <button onClick={handleLogout}>Logout</button>
                    </header>
                    ) : (
                    <div>
                        
                    </div>
                    )}
            
            
        </React.Fragment>
    )*/
        <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Logo</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/myprojects">My Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                    </li>
                </ul>
            </div>
            {user ? (

                <header>
                    <button onClick={handleLogout} className="btn btn-outline-primary" type="submit" 
                    >Logout</button></header>
                ) : (
                <div>

                </div>
                )}
        </div>
    </nav>
</React.Fragment>
    )
}




export default NavBar;
