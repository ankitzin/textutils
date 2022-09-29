import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-md navbar-${props.mode} fixed-top bg-${props.mode}`} >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

        <div className={`form-check form-switch text-${props.mode==='light' ?'dark':'light'}`} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode==='light' ?'Dark':'Light'} Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutTitle: 'About Us'
}
