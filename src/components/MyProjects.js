import React from "react";

function MyProjects({ myProjects }) {
    return (
        <React.Fragment>
            {myProjects.map(project => {
                return (
                    <div>
                        {project.name}
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default MyProjects;
