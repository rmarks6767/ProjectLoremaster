import React, { Component } from 'react';

class GridElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            x : this.props.x,
            y : this.props.y,
            id : `${this.props.x}-${this.props.y}`
        }
    }

    render(){
        return(
            <div className='GridElement' id={this.state.id}>
                <p>({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}

export default GridElement;