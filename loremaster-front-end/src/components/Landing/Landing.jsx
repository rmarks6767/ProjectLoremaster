import React, { Component } from 'react';

class Landing extends Component{
    render(){
        return(
            <div className="Landing">
                <div className="jumbotron text-center">
                    <h1>Welcome to Project Loremaster</h1>
                    <p>An all encompassing Dungeon and Dragons application that helps create, manage, and store D&D Campaigns</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Characters</h3>
                            <p>Use our character creator to create your very own D&D characters to use during campaigns</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Maps</h3>
                            <p>Make battle and world maps using our extensive map creation tools</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Campaigns</h3>
                            <p>Make, Manage, and Play a full D&D campaign online with friends</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;