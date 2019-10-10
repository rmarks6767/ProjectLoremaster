import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../Login/Login';

class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            navItems : document.getElementsByClassName("nav-item"),
        };
        this.setLinkActive = this.setLinkActive.bind(this);
    }

    setLinkActive(link){
        if(this.state.navItems == null){
            this.state.navItems = document.getElementsByClassName("nav-item");
        }
        else{
            switch(link){
                case "home":
                    for(i = 0; i < this.state.navItems.length(); i++){
                        this.state.navItems[i].className = "nav-item";
                    }
                    this.state.navItems[0].className = "nav-item active";
                    break;

                case "characters":

                    break;

                case "maps":

                    break;

                case "campaigns":

                    break;

                case "compendium":

                    break;

                default:
                    console.Log("Error: Invalid Page");
                    break;
            }
        }
    }

    render(){
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg bg-light navbar-light">
                    <a className="navbar-brand">Project Loremaster</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav nav-tabs">
                            <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/characters">Characters</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/maps">Maps</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/campaigns">Campaigns</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/compendium">Compendium</Link></li>
                        </ul>
                        <button type="button" className="btn btn-primary ml-auto" data-toggle="modal" data-target="#login">Sign In</button>
                    </div>
                </nav>
                <Login />
            </div>
        );
    }
}
export default Navbar;