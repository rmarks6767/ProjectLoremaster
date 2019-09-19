import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component{
    canvas = null;
    context = null;

    constructor(props){
        super(props);
        this.state={
            isPainting : false,
            clickX : new Array(),
            clickY : new Array(),
            clickDrag : new Array(),
            width : this.props.width,
            height : this.props.height,
            canvasName : this.props.canvasName
        };

        this.canvasOnClick = this.canvasOnClick.bind(this);
        this.canvasOnMove = this.canvasOnMove.bind(this);
        this.canvasOnUp = this.canvasOnUp.bind(this);
        this.canvasOnLeave = this.canvasOnLeave.bind(this);
        this.addClick = this.addClick.bind(this);

    }

    canvasOnClick(event){
        if(this.canvas == null || this.context == null) {
            this.canvas = document.getElementById(this.state.canvasName);
            this.context = this.canvas.getContext("2d");
        }
        else {
            this.state.isPainting = true;
        
            this.addClick(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop, false);

            this.context.strokeStyle = "#df4b26";
            this.context.lineJoin = "round";
            this.context.lineWidth = 5;

            this.context.moveTo(this.state.clickX[this.state.clickX.length - 1] - 1, this.state.clickY[this.state.clickX.length - 1]);

            this.context.lineTo(this.state.clickX[this.state.clickX.length - 1], this.state.clickY[this.state.clickX.length - 1]);
            this.context.closePath();
            this.context.stroke();
        
            console.log("Mosue Click:", event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop);
        }
    }
    
    canvasOnMove(event){
        if(this.canvas == null || this.context == null) {
            this.canvas = document.getElementById(this.state.canvasName);
            this.context = this.canvas.getContext("2d");
        }
        else {
            if(this.state.isPainting) {
                this.addClick(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop, true);

                this.context.strokeStyle = "#df4b26";
                this.context.lineJoin = "round";
                this.context.lineWidth = 5;

                this.context.moveTo(this.state.clickX[this.state.clickX.length - 2] - 1, this.state.clickY[this.state.clickX.length - 2]);

                this.context.lineTo(this.state.clickX[this.state.clickX.length - 1], this.state.clickY[this.state.clickX.length - 1]);
                this.context.closePath();
                this.context.stroke();
        
                console.log("Mosue Move");
            }
        }
    }
    
    canvasOnUp(){
        this.state.isPainting = false;
        console.log("Mosue Up");
    }
    
    canvasOnLeave(){
        this.state.isPainting = false;
        console.log("Mosue Leave");
    }
    
    addClick(x, y, drag){
        this.state.clickX.push(x);
        this.state.clickY.push(y);
        this.state.clickDrag.push(drag);
    }

    render(){
        return(
            <div className="Canvas" width="100%" height={this.state.height}>
                <div className="editorBar" width={this.state.width} height={this.state.height}>
                    <button className="btn btn-simple">Red</button>
                    <button className="btn btn-simple">Blue</button>
                    <button className="btn btn-simple">Green</button>
                </div>
                <canvas id={this.state.canvasName} width={this.state.width} height={this.state.height} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }
}

export default Canvas;