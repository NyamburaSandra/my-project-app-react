import React from "react";

function MyProjects({ myProjects }) {
    
    return (
        <React.Fragment>
            {myProjects.map(project => {
                return (
                    <div>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default MyProjects;
