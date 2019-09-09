import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{


    render(){
        return(
            <div className="Navbar">
                <div className="navbar navbar-header navbar-fixed-top navbar-default">
                    <p className="nav navbar-brand">Project Loremaster</p>

                    <ul className="nav navbar-nav nav-tabs navbar-left" role="tablist">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/characters'}>Characters</Link></li>
                        <li><Link to={'/maps'}>Maps</Link></li>
                        <li><Link to={'/compendium'}>Compendium</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Navbar;