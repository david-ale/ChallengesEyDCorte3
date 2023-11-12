import React from "react";
import {Link,NavLink,Navigate,Route,Routes} from 'react-router-dom'
import { AboutUs } from "./AboutPage";
import { Home } from "./Homepage";
import { Login } from "./LoginPage";
import './index.css'

export const NavComponent = () => {
    return (
        <>
            <div className="navbar">
                <h1>MainApp</h1>
                <hr />

                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="about">About</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="login">Login</NavLink>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="/*" element={<Navigate to="about" />} />
                </Routes>
            </div>
        </>
    )
}