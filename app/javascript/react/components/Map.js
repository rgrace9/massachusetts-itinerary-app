import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
   render() {
     const GoogleMapMassachusetts = withGoogleMap(props => (
           <GoogleMap
             defaultCenter = { { lat: 42.361145, lng: -71.057083 } }
             defaultZoom = { 13 }
           >
           </GoogleMap>
        ));

   return(
     <div>
        <GoogleMapMassachusetts
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
