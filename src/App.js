import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GMap from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GMap/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDCVPr02Mp6OtEUNEilXUs_SQslYozWohc')
})(App)
