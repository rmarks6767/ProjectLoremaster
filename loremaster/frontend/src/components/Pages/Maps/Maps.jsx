import React, { Component } from 'react';
import Canvas from '../../Canvas/Canvas';
import MapEditor from '../../MapEditor/MapEditor';

class Maps extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1>Maps</h1>
                </div>
                <MapEditor/>
            </div>
        );
    }
}

export default Maps;