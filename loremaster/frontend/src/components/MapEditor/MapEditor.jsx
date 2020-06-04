import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import testImage from '../../imgs/test.jpg'
import './MapEditor.css';
import GridElement from '../GridElement/GridElement'

class MapEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            canvas : null,
            context : null,
            gridMap : null,
            mapImage : null,

            gridElements : null,
            sideNum : 1,
        }

        this.displayGrid = this.displayGrid.bind(this);
        this.generateGridComponents = this.generateGridComponents.bind(this);
    }

    // Displays the grid over the image based on a given side length
    displayGrid(side=1){
        this.setState({sideNum : side}, () => this.generateGridComponents());

        // if(this.state.gridElements){
        //     ReactDOM.unmountComponentAtNode(this.state.gridMap);
        //     this.state.gridElements = null;
        // }

        this.state.context.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);

        for(let i = 1; i < side; i++){
            this.state.context.beginPath();
            this.state.context.strokeStyle = "#000000"
            this.state.context.lineJoin = "round";
            this.state.context.lineWidth = 0.20;
            this.state.context.moveTo(Math.floor(this.state.canvas.width * (i / side)), 0);
            this.state.context.lineTo(Math.floor(this.state.canvas.width * (i / side)), this.state.canvas.height - 1);
            this.state.context.closePath();
            this.state.context.stroke();

            if(this.state.canvas.width * (i / side) < this.state.canvas.height){
                this.state.context.beginPath();
                this.state.context.strokeStyle = "#000000"
                this.state.context.lineJoin = "round";
                this.state.context.lineWidth = 0.20;
                this.state.context.moveTo(0, Math.floor(this.state.canvas.width * (i / side)));
                this.state.context.lineTo(this.state.canvas.width - 1, Math.floor(this.state.canvas.width * (i / side)));
                this.state.context.closePath();
                this.state.context.stroke();
            }
        }
    }

    generateGridComponents(){
        if(this.state.gridElements){
            ReactDOM.unmountComponentAtNode(this.state.gridMap);
            this.state.gridElements = null;
        }

        this.setState({gridElements : new Array()}, async () => {
            let sideLength = Math.floor(this.state.canvas.width * (1 / this.state.sideNum));

            this.state.gridMap.style.gridTemplateColumns = `repeat(${this.state.sideNum}, ${(1 / this.state.sideNum) * 100}%)`;
            this.state.gridMap.style.gridTemplateRows = `repeat(${this.state.sideNum / 2}, ${(1 / (this.state.sideNum / 2)) * 100}%)`;

            for(let i = 0; i < this.state.sideNum * (this.state.sideNum / 2); i++){
                this.state.gridElements.push(React.createElement(GridElement, {x: i % this.state.sideNum, y: Math.floor(i / this.state.sideNum)}));
            }
            ReactDOM.render(this.state.gridElements, this.state.gridMap);
        });
    }

    render(){
        return(
            <div className="MapEditor">
                <div id='me-editor'>
                    <input type="range" min="10" max="30" defaultValue="10" step="2" className="slider" id="grid-size"/>
                </div>
                <div id='me-map'>
                    <canvas id='me-current-map'></canvas>
                    <div id='me-grid-map'></div>
                </div>
                
            </div>
        );
    }

    componentDidMount(){
        this.setState({canvas : document.querySelector('#me-current-map')}, () => {
            this.setState({context : this.state.canvas.getContext("2d")}, () => {
                this.displayGrid(document.querySelector('#grid-size').value);
            });

            this.setState({mapImage : testImage}, () => {
                this.state.canvas.style.backgroundImage = `url('${this.state.mapImage}')`;
            });
        });

        this.setState({gridMap : document.querySelector('#me-grid-map')});

        document.querySelector('#grid-size').oninput = () => this.displayGrid(document.querySelector('#grid-size').value);    }
}

export default MapEditor;