import React, { Component } from 'react';
import axios from 'axios';
import FrontData from 'form-data';
import './Canvas.css';

const tool = {
    BRUSH : 'brush',
    ERASE : 'erase',
    FILL : 'fill',
    SQUARE : 'square'
}

const terrain = {
    BLANK : '#FFFFFF',
    GRASS : '#0C8F00',
    STONE : '#7A7A7A',
    SAND : '#D1CB92',
    DIRT : '#4D4924',
    WATER : '#1897F2',
    LAVA : '#FFB300'
}

const terrainRGB = {
    BLANK : {r:255,g:255,b:255},
    GRASS : {r:12,g:143,b:0},
    STONE : {r:122,g:122,b:122},
    SAND : {r:209,g:203,b:146},
    DIRT : {r:77,g:73,b:36},
    WATER : {r:24,g:151,b:242},
    LAVA : {r:255,g:179,b:0}
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    let output = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return output.toUpperCase();
}

function isTerrain(color, terrain='#'){
    switch(color){
        case terrain:
            return false;
            break;

        case terrain.BLANK:
        case terrain.GRASS:
        case terrain.STONE:
        case terrain.SAND:
        case terrain.DIRT:
        case terrain.WATER:
        case terrain.LAVA:
            return true;
            break;

        default:
            return false;
            break;
    }
}

class Canvas extends Component{
    canvas = null;
    context = null;
    brushSize = null;

    constructor(props){
        super(props);
        this.state={
            isPainting : false,

            mapWidth : this.props.width,
            mapHeight : this.props.height,
            styleWidth : 0,
            styleHeight : 0,
            canvasName : this.props.canvasName,

            toolMode : tool.BRUSH,
            toolTerrain : terrain.GRASS,
            toolSize : 5,

            prevClick : {x: 0, y: 0},

            isDrawingSquare : false,
            squarePos1 : {x: 0, y: 0},
            squarePos2 : {x: 0, y: 0},

            prevImageData : new Array(),
            numOfSavedData : 5,
            currentImageDataIndex : 0,
        };

        this.canvasOnClick = this.canvasOnClick.bind(this);
        this.canvasOnMove = this.canvasOnMove.bind(this);
        this.canvasOnUp = this.canvasOnUp.bind(this);
        this.canvasOnLeave = this.canvasOnLeave.bind(this);

        this.fill = this.fill.bind(this);
        this.square = this.square.bind(this);
        this.squareFill = this.squareFill.bind(this);

        this.setTool = this.setTool.bind(this);
        this.setTerrain = this.setTerrain.bind(this);
        this.setToolSize = this.setToolSize.bind(this);

        this.addCurrentImageData = this.addCurrentImageData.bind(this);
        this.setCurrentImageData = this.setCurrentImageData.bind(this);
        this.clear = this.clear.bind(this);
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
        this.save = this.save.bind(this);
    }

    /* Canvas Event Functions */

    canvasOnClick(event){
        let x = (event.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.state.styleWidth);
        let y = (event.pageY - this.canvas.offsetTop) * (this.canvas.height / this.state.styleHeight);
        let toolMode = this.state.toolMode;
        let terrainStyle = this.state.toolTerrain;
        let size = this.state.toolSize;

        console.log(toolMode);


        switch(toolMode){
            case tool.BRUSH:
            case tool.ERASE:
                this.state.isPainting = true;
                this.state.prevClick.x = x;
                this.state.prevClick.y = y;

                this.context.beginPath();

                if(toolMode == tool.BRUSH){
                    this.context.strokeStyle = terrainStyle;
                }
                else{
                    this.context.strokeStyle = terrain.BLANK;
                }
                this.context.lineJoin = "round";
                this.context.lineWidth = size;

                this.context.moveTo(x - .5, y);

                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                break;

            case tool.FILL:
                let imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

                let clickPos = ((Math.floor(y) * this.canvas.width) + Math.floor(x)) * 4;

                let ter = terrainRGB[Object.keys(terrain).find(key => terrain[key] === this.state.toolTerrain)];
                this.fill(imgData, ter, imgData.data[clickPos], imgData.data[clickPos + 1], imgData.data[clickPos + 2], clickPos);

                this.context.putImageData(imgData, 0, 0);

                break;

            case tool.SQUARE:
                this.state.isDrawingSquare = true;
                this.state.squarePos1.x = x;
                this.state.squarePos1.y = y;
                break;

            default:
                console.log("ERROR: Invalid tool used on canvas");
                break;
        }

        
    }
    
    canvasOnMove(event){
        if(this.state.isPainting && (this.state.toolMode == tool.BRUSH || this.state.toolMode == tool.ERASE)) {
            let x = (event.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.state.styleWidth);
            let y = (event.pageY - this.canvas.offsetTop) * (this.canvas.height / this.state.styleHeight);
            let tool = this.state.toolMode;
            let terrain = this.state.toolTerrain;
            let size = this.state.toolSize;

            this.context.beginPath();

            if(this.state.toolMode == tool.BRUSH){
                this.context.strokeStyle = terrain;
            }
            else{
                this.context.strokeStyle = terrain.BLANK;
            }
            this.context.lineJoin = "round";
            this.context.lineWidth = size;

            this.context.moveTo(this.state.prevClick.x, this.state.prevClick.y);

            this.context.lineTo(x, y);
            this.context.closePath();
            this.context.stroke();

            this.state.prevClick.x = x;
            this.state.prevClick.y = y;
        }
    }
    
    canvasOnUp(event){
        this.state.isPainting = false;

        if(this.state.isDrawingSquare){
            let x = (event.pageX - this.canvas.offsetLeft) * (this.canvas.width / this.state.styleWidth);
            let y = (event.pageY - this.canvas.offsetTop) * (this.canvas.height / this.state.styleHeight);
            let terrain = this.state.toolTerrain;
            let size = this.state.toolSize;

            this.state.squarePos2.x = x;
            this.state.squarePos2.y = y;

            this.square(this.state.squarePos1, this.state.squarePos2, terrain, size);

            this.state.isDrawingSquare = false;
        }

        this.addCurrentImageData();
    }
    
    canvasOnLeave(){
        if(this.state.isPainting){
            this.addCurrentImageData();
        }
        
        this.state.isPainting = false;
    }

    /* Canvas Drawing Tools */

    fill(imageData, terrain, red, green, blue, pos){
        console.log(pos)
        if((pos >= 0 && pos < imageData.data.length) && ((red === imageData.data[pos] && green === imageData.data[pos + 1] && blue === imageData.data[pos + 2]) || !isTerrain(rgbToHex(imageData.data[pos], imageData.data[pos + 1], imageData.data[pos + 2]), rgbToHex(red, green, blue)))){
            imageData.data[pos] = terrain.r;
            imageData.data[pos + 1] = terrain.g;
            imageData.data[pos + 2] = terrain.b;
            imageData.data[pos + 3] = 255;

            this.fill(imageData, terrain, red, green, blue, pos + ((this.canvas.width * 4) - (pos % (this.canvas.width * 4))));
            this.fill(imageData, terrain, red, green, blue, pos - 4);
            this.fill(imageData, terrain, red, green, blue, pos - (pos % (this.canvas.width * 4)));
            this.fill(imageData, terrain, red, green, blue, pos + 4);
        }
    }

    square(pos1, pos2, terrain, size){
        this.context.beginPath();

        this.context.strokeStyle = terrain;
        this.context.lineJoin = "round";
        this.context.lineWidth = size;

        this.context.moveTo(pos1.x, pos1.y);
        this.context.lineTo(pos1.x, pos2.y);

        this.context.moveTo(pos1.x, pos2.y);
        this.context.lineTo(pos2.x, pos2.y);

        this.context.moveTo(pos2.x, pos2.y);
        this.context.lineTo(pos2.x, pos1.y);

        this.context.moveTo(pos2.x, pos1.y);
        this.context.lineTo(pos1.x, pos1.y);

        this.context.closePath();
        this.context.stroke();
    }

    squareFill(pos1, pos2, terrain){
        this.context.beginPath();

        this.context.strokeStyle = this.state.toolTerrain;
        this.context.fillStyle = this.state.toolTerrain;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.state.toolSize;

        this.context.moveTo(pos1.x, pos1.y);
        this.context.lineTo(pos1.x, pos2.y);

        this.context.moveTo(pos1.x, pos2.y);
        this.context.lineTo(pos2.x, pos2.y);

        this.context.moveTo(pos2.x, pos2.y);
        this.context.lineTo(pos2.x, pos1.y);

        this.context.moveTo(pos2.x, pos1.y);
        this.context.lineTo(pos1.x, pos1.y);

        this.context.closePath();
        this.context.stroke();
        this.context.fill();
    }

    /* Set Drawing Properties */

    setTool(tool){
        this.state.toolMode = tool;
    }

    setTerrain(terrain){
        this.state.toolTerrain = terrain;
    }

    setToolSize(size){
        this.state.toolSize = size;
    }

    /* Canvas Tools Misc */

    addCurrentImageData(){
        if(this.state.currentImageDataIndex != this.state.prevImageData.length - 1){
            this.state.prevImageData.splice(this.state.currentImageDataIndex + 1);
        }

        this.state.prevImageData.push(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height));

        if(this.state.prevImageData.length > this.state.numOfSavedData){
            this.state.prevImageData.shift();
        }

        this.state.currentImageDataIndex = this.state.prevImageData.length - 1;
    }

    setCurrentImageData(imageData){
        this.context.putImageData(imageData, 0, 0);
    }

    clear(){
        this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);
        this.context.fillStyle = terrain.BLANK;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.addCurrentImageData();
    }

    undo(){
        if(this.state.currentImageDataIndex > 0){
            this.state.currentImageDataIndex--;
            this.setCurrentImageData(this.state.prevImageData[this.state.currentImageDataIndex]);
        }
    }

    redo(){
        if(this.state.currentImageDataIndex < this.state.prevImageData.length - 1){
            this.state.currentImageDataIndex++;
            this.setCurrentImageData(this.state.prevImageData[this.state.currentImageDataIndex]);
        }
    }

    save(){
        axios({
            method: 'post',
            url: 'http://localhost:5001/chameleon/test',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify("test"),
        })
            .then(response => console.log(response.data));
    }

    render(){
        return(
            <div className="Canvas" width="100%" height={this.state.height}>
                <div className="editorBar" width="1000rem" height="75rem">
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.BRUSH);}}>Brush</button>
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.FILL);}}>Fill</button>
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.SQUARE);}}>SQUARE</button>
                    <button className="btn btn-primary" onClick={() => {this.setTool(tool.ERASE);}}>Erase</button>
                    <button className="btn btn-primary" onClick={() => {this.setTerrain(terrain.GRASS);}}>Grass</button>
                    <button className="btn btn-primary" onClick={() => {this.setTerrain(terrain.STONE);}}>Stone</button>
                    <button className="btn btn-primary" onClick={() => {this.setTerrain(terrain.WATER);}}>Water</button>
                    <input type="range" min="10" max="30" defaultValue="10" class="slider" id="brush-size"/>
                    <button className="btn btn-primary" onClick={this.undo}>Undo</button>
                    <button className="btn btn-primary" onClick={this.redo}>Redo</button>
                    <button className="btn btn-primary" onClick={this.clear}>Clear</button>
                    <button className="btn btn-primary" onClick={this.save}>Save</button>
                </div>
                <canvas id={this.state.canvasName} onMouseDown={this.canvasOnClick} onMouseUp={this.canvasOnUp} onMouseMove={this.canvasOnMove} onMouseLeave={this.canvasOnLeave}></canvas>
            </div>
        );
    }

    componentDidMount(){
        this.canvas = document.querySelector("#" + this.state.canvasName);
        this.context = this.canvas.getContext("2d");
        this.brushSize = document.querySelector("#brush-size");

        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.canvas.style.width = "1600px";
        this.canvas.style.height = "900px";

        this.state.styleWidth = parseInt(this.canvas.style.width, 10);
        this.state.styleHeight = parseInt(this.canvas.style.height, 10);

        this.context.fillStyle = terrain.BLANK;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.brushSize.oninput = () => {this.setToolSize(this.brushSize.value);};
        this.context.imageSmoothingEnabled = false;

        this.addCurrentImageData();
    }
}

export default Canvas;