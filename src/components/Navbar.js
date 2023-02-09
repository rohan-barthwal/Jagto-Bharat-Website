import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <div className="Navbar">
            <div className='top_navbar'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand card-text1" href="/" style={{color:"cyan"}}>ROHAN BARTHWAL</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active card-text" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link active card-text" aria-current="page" href="#" style={{color:"cyan"}}>About Me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link active card-text" aria-current="page" href="#">Contact Me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/download" className="nav-link active card-text" aria-current="page" href="#" style={{color:"cyan"}}>Download Resume</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}