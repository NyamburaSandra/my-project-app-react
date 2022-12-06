import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function Login({ setUser }) {

    const [member, setMember] = useState(false)

    return (
        <div className="container">
            <div className="header">
                <h1>MY PROJECT APP</h1>
            </div>
            <div>
                <div>
                    {member ? (
                    <div>
                        <h2>Sign In</h2>
                        <SignIn setUser={setUser} setMember={setMember} />
                    </div>
                    ) : (
                    <div>
                        <h2>Sign Up</h2>
                        <SignUp setUser={setUser} setMember={setMember} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;
