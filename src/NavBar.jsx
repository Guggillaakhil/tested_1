import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">My  projects</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/*  */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Counter">Counter</NavLink>
        </li>
        <li className="nav-item">
         <NavLink  to='/DarkBackground'>DarkBackground</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to='/ChangeTheme'>Changetheme</NavLink>
        </li>
       
      </ul>
    </div>
    {/*  */}
  </div>
</nav>
  )
}

export default NavBar;
