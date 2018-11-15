import React, { Component } from 'react';
import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GMap extends Component {
  render() {
    return (
        <div id="map">
        <Map 
            google={this.props.google} 
            zoom={10} 
            initialCenter={{
                lat: 12.9915975,
                lng: 77.7321687
        }}>
 
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
    </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDCVPr02Mp6OtEUNEilXUs_SQslYozWohc')
})(GMap)
