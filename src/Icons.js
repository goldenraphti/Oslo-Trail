import L from 'leaflet';

const iconStart = new L.Icon({
    iconUrl: require('./images/map-pin.svg'),
    iconRetinaUrl: null,
    iconAnchor: [20,35],
    popupAnchor:  [0, -30],
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(40, 40),
});

const iconFinish = new L.Icon({
    iconUrl: require('./images/map-pin-finish.svg'),
    iconRetinaUrl: null,
    iconAnchor: [20,35],
    popupAnchor:  [0, -30],
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(40, 40),
    zIndexOffset: 0,
});

const iconWater = new L.Icon({
    iconUrl: require('./images/pin-water.png'),
    iconRetinaUrl: null,
    iconAnchor: [10,30],
    popupAnchor:  [0, -30],
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(24, 30),
    zIndexOffset: 0,
});

const iconWC = new L.Icon({
    iconUrl: require('./images/pin-wc.png'),
    iconRetinaUrl: null,
    iconAnchor: [10,30],
    popupAnchor:  [0, -30],
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(24, 30),
    zIndexOffset: 0,
});

const iconViewPoint = new L.Icon({
    iconUrl: require('./images/pin-favorite.png'),
    iconRetinaUrl: null,
    iconAnchor: [10,30],
    popupAnchor:  [0, -30],
    shadowUrl: require('./images/marker-shadow.png'),
    shadowSize: [40, 40],
    shadowAnchor: [10, 37],
    iconSize: new L.Point(24, 30),
    zIndexOffset: 0,
});

export { iconStart , iconFinish, iconWater, iconWC , iconViewPoint};