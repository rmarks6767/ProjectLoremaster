import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';

class Maps extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <h1>Maps</h1>
                </div>
                <Canvas canvasName="map" width="600px" height="300px"/>
            </div>
        );
    }
}

export default Maps;