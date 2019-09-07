import React, { Component } from 'react';

class Navbar extends Component{

    changeLocation (loc) {
        window.location=loc;
    }

    render(){
        return(
            <div className="Navbar">
                <div className="navbar navbar-fixed-top navbar-default">
                    <p className="nav navbar-brand">Project Loremaster</p>

                    <ul className="nav navbar-nav nav-tabs navbar-left" role="tablist">
                        <li><button className="btn btn-link" onClick={this.changeLocation("#")}>Maps</button></li>
                        <li><button className="btn btn-link" onclick={this.changeLocation("#")}>Characters</button></li>
                        <li><button className="btn btn-link" onclick={this.changeLocation("#")}>Compendium</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Navbar;