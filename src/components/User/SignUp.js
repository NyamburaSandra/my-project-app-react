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
        <React.Fragment>
            <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div><br/>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div><br/>
            <div>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                placeholder="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            </div><br/>
            <div>
            <button type="submit">Sign Up</button>
            </div>
            </form>
            <button type="click" className="btn btn-secondary" onClick={signIn}>
                Member? Sign In
            </button>
        </React.Fragment>
    )
}

export default SignUp;
