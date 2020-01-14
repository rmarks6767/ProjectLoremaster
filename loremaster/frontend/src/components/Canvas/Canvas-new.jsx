import React, { Component } from 'react';

class Canvas extends Component{
    constructor(props){
        super(props);

        this.id = this.props.id;
    }

    render(){
        return(
            <div className="Canvas">
                <div className='canvas'></div>
            </div>
        );
    }

    componentDidMount(){
        
    }
}

export default Canvas;