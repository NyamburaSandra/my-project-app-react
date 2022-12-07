import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setUser, setMember }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then((r) => r.json())
            .then(setUser);

        navigate('/')
    }

    function signIn(e) {
        e.preventDefault();
        setMember(true);
    }

    return (


<section class="vh-100" >
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" >
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />

                                            </div>

                                        <form onSubmit={handleSubmit} class="mx-1 mx-md-4">


                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <label htmlFor="name">Name:</label>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        placeholder="username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className="form-control" />
                                                </div>
                                            </div>


                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <label htmlFor="password">Password:</label><br/>
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        placeholder="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control" />
                                                </div>
                                            </div>


                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-keya-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">   
                                                    <label htmlFor="password_confirmation">Confirm Password:</label><br/>
                                                    <input
                                                        type="password"
                                                        id="password_confirmation"
                                                        placeholder="password"
                                                        value={passwordConfirmation}
                                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                        className="form-control"
                                                    />
                                                </div>

                                            </div>
                                            
                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" class="btn btn-primary btn-lg">Sign up</button>
                                            </div>

                                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>

    );
}








export default SignUp;