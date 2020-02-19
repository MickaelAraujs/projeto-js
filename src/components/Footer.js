import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import '../styles.css';

function buscarLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarPosicoes);
    }
}

var Lat;
var Lon;

function mostrarPosicoes(posicao) {
    Lat = posicao.coords.latitude; 
    Lon = posicao.coords.longitude;
}

buscarLocalizacao();

const LatLoja = -6.8896512;
const LonLoja = -38.5454042;

function Map() {
  return (
    <GoogleMap defaultZoom={8}
    defaultCenter={{lat: (Lat + LatLoja) / 2, lng: (Lon + LonLoja) / 2}}>
      <Marker position={{lat: Lat, lng: Lon}} />
      <Marker position={{lat: LatLoja, lng: LonLoja}}/>
    </GoogleMap>
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