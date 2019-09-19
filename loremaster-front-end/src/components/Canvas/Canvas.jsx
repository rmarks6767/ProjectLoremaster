import React, { Component } from 'react';

class Canvas extends Component{

    context = null;

    constructor(props){
        super(props);
        this.state={
            isPainting : false,
            clickX : new Array(),
            clickY : new Array(),
            clickDrag : new Array(),
            width : this.props.width,
            height : this.props.height
        };

        this.canvasOnClick = this.canvasOnClick.bind(this);
        this.canvasOnMove = this.canvasOnMove.bind(this);
        this.canvasOnUp = this.canvasOnUp.bind(this);
        this.canvasOnLeave = this.canvasOnLeave.bind(this);
        this.addClick = this.addClick.bind(this);
        this.redraw = this.redraw.bind(this);

    }

    canvasOnClick(event){
        this.state.isPainting = true;
    
        this.addClick(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop, false);
        // this.redraw();
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;

        this.context.moveTo(this.state.clickX[this.state.clickX.length - 1] - 1, this.state.clickY[this.state.clickX.length - 1]);

        this.context.lineTo(this.state.clickX[this.state.clickX.length - 1], this.state.clickY[this.state.clickX.length - 1]);
        this.context.closePath();
        this.context.stroke();
    
        console.log("Mosue Click:", event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop);
    }
    
    canvasOnMove(event){
        if(this.state.isPainting) {
            this.addClick(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop, true);
            // this.redraw();
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
    
    canvasOnUp(){
        this.state.Painting = false;
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
    
    redraw(){
        this.context.clearRect(0, 0, this.state.width, this.state.height);
    
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
    
        for(var i = 0; i < this.state.clickX.length; i++) {
            if(this.state.clickDrag[i] && i) {
                this.context.moveTo(this.state.clickX[i-1], this.state.clickY[i-1]);
            }
            else{
                this.context.moveTo(this.state.clickX[i] - 1, this.state.clickY[i]);
            }
    
            this.context.lineTo(this.state.clickX[i], this.state.clickY[i]);
            this.context.closePath();
            this.context.stroke();
        }
    }

    render(){
        return(
            <div className="Canvas" width={this.props.width} height={this.props.height}>
                <canvas id={this.props.canvasName} ref={(c) => {this.canvas = c; this.context = c.getContext('2d');}} width={this.props.width} height={this.props.height} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }
}

export default Canvas;