import React, { Component } from 'react';

var canvasElement;
var isPainting = false;

class Canvas extends Component{

    getCanvas(){
        canvasElement = document.getElementById(this.props.canvasName);
    }

    canvasOnClick(){
        isPainting = true;
        console.log("Mosue Click");
    }

    canvasOnMove(){
        if(isPainting)
        {
            console.log("Mosue Move");
        }
    }

    canvasOnUp(){
        isPainting = false;
        console.log("Mosue Up");
    }

    canvasOnLeave(){
        isPainting = false;
        console.log("Mosue Leave");
    }

    render(){
        return(
            <div className="Canvas" width={this.props.width} height={this.props.height}>
                <canvas id={this.props.canvasName} width={this.props.width} height={this.props.height} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }
}

export default Canvas;