import React, { Component } from 'react';
import DrawingBoard from 'drawingboard.js';

class Canvas extends Component{
    constructor(props){
        super(props);

        this.id = this.props.id;
    }

    render(){
        return(
            <div className="Canvas">
                <div className='test'></div>
                <script>
                    var imageBoard = new DrawingBoard.Board('test', {
                        controls: false,
                        background: 'bower_components/drawingboard.js/example/drawingboardjs.png',
                        color: '#ff0',
                        webStorage: false
                    });
                </script>
            </div>
        );
    }
}

export default Canvas;