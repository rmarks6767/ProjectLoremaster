import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

                    <ul className="nav navbar-nav navbar-right">
                        <li><button type="button" class="btn btn-link" data-toggle="collapse" data-target="#login">Login</button></li>
                    </ul>
                </nav>
                <div id="login" className="row collapse">
                    <p>Username: <input id="username" className="input-sm"></input></p>
                    <p>Password: <input id="password" className="input-sm"></input></p>
                </div>
            </div>
        );
    }
}
export default Navbar;