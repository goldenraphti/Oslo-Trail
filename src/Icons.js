import L from 'leaflet';

const iconStart = new L.Icon({
    iconUrl: require('./images/map-pin.svg'),
    iconRetinaUrl: null,
    iconAnchor: [20,35],
    popupAnchor: null,
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(40, 40),
});

const iconFinish = new L.Icon({
    iconUrl: require('./images/map-pin-finish.svg'),
    iconRetinaUrl: null,
    iconAnchor: [20,35],
    popupAnchor: null,
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(40, 40),
});

export { iconStart , iconFinish};