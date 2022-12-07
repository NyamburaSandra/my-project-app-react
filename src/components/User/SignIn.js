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
   /* <div>
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
    </div>*/
    <div className="container h-100">
<div class="container h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-lg-12 col-xl-11">
      <div class="card text-black" style="border-radius: 25px;">
        <div class="card-body p-md-5">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form class="mx-1 mx-md-4">

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input type="text" id="form3Example1c" class="form-control" />
                    <label class="form-label
                    " for="form3Example1c">Your Name</label>
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">

                    <input type="email" id="form3Example3c" class="form-control" />
                    <label class="form-label
                    " for="form3Example3c">Your Email</label>
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input type="password" id="form3Example4c" class="form-control" />
                    <label class="form-label
                    " for="form3Example4c">Password</label>
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-key
                  fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">

                    <input type="password" id="form3Example4cd" class="form-control" />
                    <label class="form-label
                    " for="form3Example4cd">Repeat your password</label>
                  </div>
                </div>

                <div class="form-check
                d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                  <label class="form-check-label text-black" for="form2Example3">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="button" class="btn btn-primary btn-lg">Register</button>
                </div>

                <div className = "d-flex justify-content-center mb-5">
                  <p class="mb-0">Already have an account?</p>
                  
                  <a /*link to sign in page here do not forget*/ href="#!" class="text-body"><u>Sign in here</u></a>

                </div>

              </form>

            </div>
            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />

            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</div>
</div>


                    
                    
  );
}

export default SignIn;

/*
<section class="vh-100" style="background-color: #FFFFFF;">
<div class="container h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-lg-12 col-xl-11">
      <div class="card text-black" style="border-radius: 25px;">
        <div class="card-body p-md-5">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form class="mx-1 mx-md-4">

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    
                    <%= f.label :name , class: "form-label" %><br />
                    <%= f.text_field :name, autofocus: true, autocomplete: "name"  , class: "form-control" %>
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                   
                    <%= f.label :email , class: "form-label" %><br />
                    <%= f.email_field :email, autofocus: true, autocomplete: "email" , class: "form-control" %>
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    
                    <%= f.label :password , class: "form-label" %>
                    <% if @minimum_password_length %>
                    <em>(<%= @minimum_password_length %> characters minimum)</em>
                    <% end %><br />
                    <%= f.password_field :password, autocomplete: "new-password" , class: "form-control" %>
                  </div>
                </div>

                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                   
                    <%= f.label :password_confirmation ,class: "form-label" %><br />
                    <%= f.password_field :password_confirmation, autocomplete: "new-password" , class: "form-control" %>
                  </div>
                </div>

                

                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                 
                  <%= f.submit "Sign up" , class: "btn btn-primary btn-lg" %>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  Already have an account? <%= link_to "Sign in", new_session_path(resource_name) , class: "mx-2" %>
                </div>

              </form>

            </div>
            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                class="img-fluid" alt="Sample image">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
 
<% end %>


*/