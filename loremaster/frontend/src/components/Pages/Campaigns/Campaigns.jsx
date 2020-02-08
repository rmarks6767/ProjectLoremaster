import React, { Component } from 'react';
import './Campaign.css';

class Campaigns extends Component{

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1>Create New Campaign</h1>
                </div>

                <div className="row">
                    <div className="maps-container col-md">
                        <h2>Maps</h2>
                    </div>
                    <div className="monsters-container col-md">
                        <h2>Monsters</h2>
                    </div>
                    <div className="characters-container col-md">
                        <h2>Characters</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Campaigns;