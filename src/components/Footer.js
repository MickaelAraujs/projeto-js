import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

import '../styles.css';

function Map() {
    return (
      <GoogleMap defaultZoom={15}
      defaultCenter={{lat: -6.892003, lng: -38.559437}} />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Footer() {
    return (
        <div className='container'>
            <h2>Localização:</h2>
            <div style={{ width: '80vw', height: '80vh', margin: '50px auto'}}>
                <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA9Yu9xPa8OZYDO9DwUwN-bHGnqDf7LZTU`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
            </div>
        </div>
    );
}

export default Footer;