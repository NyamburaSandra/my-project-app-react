import React from "react";

function MyProjects({ myProjects }) {
    
    return (
        <React.Fragment>
            {myProjects.map(project => {
                return (
                   /* <div class= "card">
                        <du
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
                )*/
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h2 class="card-title"> {project.name} </h5>
                        <h5 class= "card text ">{project.description}</h5>
                        <br></br>
                        {project.comments.map(comment => {
                            return (
                                <div className="card-text">
                                <p>{comment.opinion}</p>
                                </div>
                            )
                        })}

                        <button type="button" class="btn btn-primary">Edit *remember to enable*</button>

                    </div>
                </div>
                )
            })}
        </React.Fragment>
    )
}


                        
export default MyProjects;
