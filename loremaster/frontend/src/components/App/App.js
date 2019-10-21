import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import NavbarNarrow from '../Navbar/NavbarNarrow';

var currentLocation = 'landing';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar />>
          <NavbarNarrow />
          <Content />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
