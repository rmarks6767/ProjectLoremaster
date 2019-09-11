import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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

                    <button type="button" class="btn btn-default pull-right" data-toggle="collapse" data-target="#login">Sign In</button>
                </nav>
                <div id="login" className="login-menu bg-info collapse">
                    <p className="pull-left">Username</p><br/>
                    <input id="username" className="input-sm"></input><br/>
                    <p className="pull-left">Password</p><br/>
                    <input id="password" className="input-sm"></input>
                    <br/>
                    <button type="button" className="btn btn-default pull-right">Login</button>
                </div>
            </div>
        );
    }
}
export default Navbar;