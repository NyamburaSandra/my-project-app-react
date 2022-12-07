import React, { useEffect, useState } from "react";
import Login from "./User/LogIn";

function Home({ allProjects, user, setUser }) {

    const [opinion, setOpinion] = useState("")

    useEffect(() => {
        fetch("/me")
        .then((response) => {
          if (response.ok) {
            response.json().then(setUser);
          }
        //   else {
        //     response.json().then(console.log);
        //   }
        });
    }, []);

    function handleComment(e) {
        e.preventDefault()
        let user_id = user.id
        let project_id = e.target.id
        fetch('/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id, project_id, opinion })
        })
        e.target.reset()
    }
    
    if (user) {
        return (
            <React.Fragment>
                <h2 className="d-flex justify-content-center text-decoration-none">Welcome, {user.username}!</h2>
                <br />
                <br/>
                {allProjects.map(project => {
                    return (
                        <div key={project.id} className="card" class = "text-center justify-content-center text-decoration-none">
                            <h2>{project.name} by {project.user.username}</h2>
                            <img src={project.image_url} alt={project.name} width="250px" />
                            <h5>{project.description}</h5>
                            {project.comments ? (
                                project.comments.map(comment => {
                                    return (
                                        <div key={comment.id} >
                                            <p>{comment.user.username} : {comment.opinion}</p>
                                        </div>
                                    )
                                }
                                )
                            ) : (
                                <div></div>
                            )}
                            <form onSubmit={handleComment} id={project.id} >
                                <input type="text" id="comment" placeholder="Add comment!" value={opinion} onChange={(e) => setOpinion(e.target.value)} className="form-control form-control-lg mb-4 text-center text-decoration-none text-dark bg-dark border border-light"
                                ></input>
                                <button type="submit" className="btn btn-primary btn-lg btn-block" >Submit</button>
                            </form>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    } else {
        console.log(user);
        return <Login setUser={setUser} />;
    }
}

export default Home;
