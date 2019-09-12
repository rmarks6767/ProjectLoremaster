import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../Login/Login';

class Navbar extends Component{


    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-fixed-top navbar-default">
                    <div className="navbar-header">
                        <p className="nav navbar-brand">Project Loremaster</p>
                    </div>

                    <ul className="nav navbar-nav nav-tabs" role="tablist">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/characters'}>Characters</Link></li>
                        <li><Link to={'/maps'}>Maps</Link></li>
                        <li><Link to={'/campaigns'}>Campaigns</Link></li>
                        <li><Link to={'/compendium'}>Compendium</Link></li>
                    </ul>

                    <button type="button" class="btn btn-default pull-right" data-toggle="modal" data-target="#login">Sign In</button>
                </nav>
                <Login />
            </div>
        );
    }
}
export default Navbar;