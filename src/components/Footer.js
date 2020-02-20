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
const LatLoja = -6.8896512;
const LonLoja = -38.5454042;

var zoom;

function mostrarPosicoes(posicao) {
    Lat = posicao.coords.latitude;
    Lon = posicao.coords.longitude;
    if (Number.parseInt(Lat) > Number.parseInt(LatLoja)){
      zoom = Number.parseInt(Lat) - Number.parseInt(LatLoja);
    }
    else if (Number.parseInt(Lat) < Number.parseInt(LatLoja)){
      zoom = Number.parseInt(LatLoja) - Number.parseInt(Lat);
    }
    else if (Number.parseInt(Lon) > Number.parseInt(LonLoja)){
      zoom = Number.parseInt(Lon) - Number.parseInt(LonLoja);
    }
    else if (Number.parseInt(Lon) < Number.parseInt(LonLoja)){
      zoom = Number.parseInt(LonLoja) - Number.parseInt(Lon);
    }
    else {
      zoom = 0;
    }
    if (zoom === 0 || zoom === 1 || zoom === 2){
      zoom = 9;
    }
    else {
      zoom = zoom * 4 / 2;
    }
}

buscarLocalizacao();

function Map() {
  return (
    <GoogleMap defaultZoom={zoom}
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