import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.HomeText}</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/About'>{props.AboutText}</Link>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>

                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}

                        <div className={`form-check form-switch text-${props.mode !=='dark' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" aria-checked='false' onClick={props.togglemode} />

                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.modetext}</label>

                            {/* <p className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.modetext}</p> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}




Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    HomeText: PropTypes.string,
    AboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'TextUtils',
    HomeText: 'Home',
    AboutText: 'About'
}