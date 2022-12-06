import React, { useEffect } from "react";
import Login from "./User/LogIn";

function Home({ allProjects, user, setUser }) {

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then(setUser);
          }
        });
    }, [setUser]);
    
    if (user) {
        return (
            <React.Fragment>
                <h2>Welcome, {user.username}!</h2>
                {allProjects.map(project => {
                    return (
                        <div>
                            {project.name}
                        </div>
                    )
                })}
            </React.Fragment>
        )
    } else {
        return <Login onLogin={setUser} />;
    }
}

export default Home;
