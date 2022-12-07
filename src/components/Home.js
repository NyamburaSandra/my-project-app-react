import React, { useEffect } from "react";
import Login from "./User/LogIn";

function Home({ allProjects, user, setUser }) {

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then(setUser);
          }
        });
    }, []);
    
    if (user) {
        return (
            <React.Fragment>
                <h2 className="d-flex justify-content-center text-decoration-none">Welcome, {user.username}!</h2>
                <br />
                <br>
                </br>
                {user.projects.length > 0 ? (
                    <div>
                        <h2 className="d-flex justify-content-center text-decoration-none">My Projects</h2>
                        {user.projects.map(project => {
                            return (
                                <div>
                                    <h2>{project.name}</h2>
                                    <h5>{project.description}</h5>
                                    {project.comments.map(comment => {
                                        return (
                                            <div>
                                                <p>{comment.opinion}</p>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <h2 className="d-flex justify-content-center text-decoration-none">You have no projects yet!</h2>   
                )}
                <br />
                <div className="d-flex justify-content-center mt-5"> 
                <button className = "btn btn-primary" /*onClick={() => setUser(null)}*/>Add Project</button>
                </div>
                {allProjects.map(project => {
                    return (
                        <div>
                            <h2>{project.name}</h2>
                            <h5>{project.description}</h5>
                            {project.comments.map(comment => {
                                return (
                                    <div>
                                        <p>{comment.opinion}</p>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )
                })}
            </React.Fragment>
        )
    } else {
        return <Login setUser={setUser} />;
    }
}

export default Home;
