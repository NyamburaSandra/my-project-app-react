import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  const [myProjects, setMyProjects] = useState([])
  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then(res => res.json())
    .then(data => setMyProjects(data.projects))
  setMyProjects()
  },[user.id])

  useEffect(() => {
    fetch(`/projects`)
    .then(res => res.json())
    .then(setAllProjects)
  },[])

  return (
    <BrowserRouter>
      <NavBar setUser={setUser} />
      <Routes >
        <Route exact path="/" element={<Home allProjects={allProjects} user={user} setUser={setUser} />} />
        <Route exact path="/myprojects" element={<MyProjects myProjects={myProjects} />} />
      </Routes>
      <AboutUs />
    </BrowserRouter>
  );
}

export default App;
