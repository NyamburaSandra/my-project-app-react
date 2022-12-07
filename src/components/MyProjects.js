import React, { useState } from "react";

function MyProjects({ myProjects, user }) {
    
    const [edit, setEdit] = useState(false)
    const [add, setAdd] = useState(false)

    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")

    function handleEdit(e) {
        e.preventDefault()
        fetch(`/projects/${e.target.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, imageUrl, description})
        })
        .then(res => res.json())
        .then(console.log)

        setEdit(false)
    }

    function handleSetEdit() {
        setEdit(!edit)
    }

    function handleAdd(e) {
        e.preventDefault()
        let user_id = user.id
        fetch(`/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id, name, imageUrl, description})
        })
        .then(res => res.json())
        .then(console.log)

        setAdd(false)
    }

    return (
        <React.Fragment>
            {myProjects.length > 0 ? (
                    <div>
                        <h2 className="d-flex justify-content-center text-decoration-none">My Projects</h2>
                        {myProjects ? (
                            myProjects.map(project => {
                                return (
                                        <div key={project.id} className="card" style={{width: 18 + "rem"}}>
                                            <div className="card-body" >
                                                <h2 className="card-title" >{project.name}</h2>
                                                <img src={project.image_url} alt={project.name} width="250px" />
                                                <p className= "card text " >{project.description}</p>
                                                <div>
                                                    {project.comments ? (
                                                        project.comments.map(comment => {
                                                            return (
                                                                <div key={comment.id} className="card-text" >
                                                                    <p>{comment.opinion}</p>
                                                                </div>
                                                            )
                                                        }
                                                        )
                                                    ) : (
                                                        <div>
                                                            <p>Add comment</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <button id={project.id} type="button" className="btn btn-primary" onClick={handleSetEdit} >Edit</button>

                                            {edit ? (
                                                <div  key={project.id}>
                                                <form onSubmit={handleEdit} id={project.id} >
                                                <div className="form-outline mb-4" >
                                                <input id="project_name" value={name} type="text" placeholder={project.name} onChange={(e) => setName(e.target.value)}  className ="form-control form-control-lg" />
                                                <input id="project_image_url" value={imageUrl} type="text" placeholder={project.image_url} onChange={(e) => setImageUrl(e.target.value)}  className ="form-control form-control-lg" />
                                                <input id="project_description" value={description} type="text" placeholder={project.description} onChange={(e) => setDescription(e.target.value)}  className ="form-control form-control-lg" />
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button>
                                                </form>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}

                                        </div>
                                    )
                            })
                        ) : (
                            <div>
                                <p>Add a project?</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <h2 className="d-flex justify-content-center text-decoration-none">You have no projects yet!</h2>   
                )
            }
            <br />
            <div className="d-flex justify-content-center mt-5"> 
                {add ? (
                    <form onSubmit={handleAdd} >
                    <div className="form-outline mb-4" >
                    <input id="project_name" value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)}  className ="form-control form-control-lg" />
                    <input id="project_image_url" value={imageUrl} type="text" placeholder="image_url" onChange={(e) => setImageUrl(e.target.value)}  className ="form-control form-control-lg" />
                    <input id="project_description" value={description} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}  className ="form-control form-control-lg" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block" >Add</button>
                    </form>
                ) : (
                    <button className = "btn btn-primary" onClick={() => setAdd(true)}>Add Project</button>
                )}
            </div>
        </React.Fragment>
    )
}


                        
export default MyProjects;
