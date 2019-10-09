import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../Login/Login';

class Navbar extends Component{


    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <a className="navbar-brand">Project Loremaster</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav nav-tabs">
                            <li className="nav-item"><Link className="nav-link" to="/home" >Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/characters" >Characters</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/maps" >Maps</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/campaigns" >Campaigns</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/compendium" >Compendium</Link></li>
                            <li className="nav-item"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">Sign In</button></li>
                        </ul>
                    </div>
                </nav>
                <Login />
            </div>
        );
    }
}
export default Navbar;