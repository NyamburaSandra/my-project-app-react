import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Login from './components/User/LogIn';
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  const [myProjects, setMyProjects] = useState([])
  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    if (user) {
	    fetch(`/users/${user.id}`)
	    .then(res => res.json())
	    .then(data => setMyProjects(data.projects))
    }
  },[user])

  useEffect(() => {
    fetch(`/projects`)
    .then(res => res.json())
    .then(setAllProjects)
  },[])

  return (
    <BrowserRouter>
      <NavBar setUser={setUser} user={user} />
      <Routes >
        <Route exact path="/" element={<Home allProjects={allProjects} user={user} setUser={setUser} />} />
        <Route exact path="/myprojects"  element={user ? <MyProjects myProjects={myProjects} /> : <Login setUser={setUser} />} />
      </Routes>
      <AboutUs />
    </BrowserRouter>
  );
}

export default App;
