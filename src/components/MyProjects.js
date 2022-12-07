import React from "react";

function MyProjects({ myProjects }) {
    
    return (
        <React.Fragment>
            {myProjects.map(project => {
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
}

export default MyProjects;
