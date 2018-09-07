import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./images/map-pin.svg'),
    iconRetinaUrl: null,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50),
});

export { iconPerson };