import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ setUser, setMember }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then((user) => setUser(user));

        navigate('/')
    }

  function signUp(e) {
    e.preventDefault();
    setMember(false);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Username:</label>
            <input type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div><br></br>
            <div>
            <label htmlFor="">Password:</label>
            <input type="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div><br></br>
            <button type="submit" >Sign In</button>
        </form>
            <button type="click" className="btn btn-secondary" onClick={signUp}>
                Not a Member? Sign Up
            </button>
      </div>
    </div>
  );
}

export default SignIn;