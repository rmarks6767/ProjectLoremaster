import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login.jsx'
import './Navbar.css';
import menu from '../../imgs/menu.svg';

class NavbarNarrow extends Component{
    render(){
        return(
            <div className="NavbarNarrow">
                <nav className="navbar navbar-fixed-top navbar-default">
                    <div className="navbar-brand">
                        <Link to="/home"><p>Project Loremaster</p></Link>
                    </div>

                    <button className="btn btn-navbar btn-default pull-right" type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-expanded="false" aria-controls="navbarcollapse"><img src={menu} alt="Menu"/></button>

                    <div className="nav nav-navbar collapse" id="navbarcollapse">
                        <div className="nav-collapse">
                            <Link to="/home" ><p>Home</p></Link>
                            <Link to="/characters" ><p>Characters</p></Link>
                            <Link to="/maps" ><p>Maps</p></Link>
                            <Link to="/campaigns" ><p>Campaigns</p></Link>
                            <Link to="/compendium" ><p>Compendium</p></Link>
                            <button type="button" className="btn btn-default pull-right login-button" data-toggle="modal" data-target="#login">Sign In</button>
                        </div>
                    </div>
                </nav>
                <Login />
            </div>
        );
    }
}

export default NavbarNarrow;