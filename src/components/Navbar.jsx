import React from 'react'
import "../styles/Navbar.css"
import onjuno from "../images/onjuno.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo-outter">
                    <img className="logo" src={onjuno} alt="logo"/>
                    <h3>Onjuno</h3>
                </div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Learn</li>
                    <li>Legal</li>
                    <li><button>Login</button></li>
                    <li><button>Signup</button></li>
                </ul>
            </nav>
            
        </>
    )
}

export default Navbar
