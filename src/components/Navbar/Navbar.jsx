import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c0047',borderBottom:'1px solid white'}}>
  <div className="container">
    <Link className="navbar-brand" to={''}><img src={logo} className='w-50' alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to={''} aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'artist'}>Artist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
      </nav>
      </>
  )
}
