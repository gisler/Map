/*
 * Layer definitions.
 */
var BasemapAT_basemap = new L.tileLayer(
    'https://mapsneu.wien.gv.at/basemap/geolandbasemap/{type}/google3857/{z}/{y}/{x}.{format}',
    {
        maxZoom: 19,
        attribution: 'Map data and style: &copy; <a href="https://www.basemap.at">basemap.at</a>',
        type: 'normal',
        format: 'png',
        bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
    }
);

var BasemapAT_highdpi = new L.tileLayer(
    'https://mapsneu.wien.gv.at/basemap/bmaphidpi/{type}/google3857/{z}/{y}/{x}.{format}',
    {
        maxZoom: 19,
        attribution: 'Map data and style: &copy; <a href="https://www.basemap.at">basemap.at</a>',
        type: 'normal',
        format: 'jpeg',
        bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
    }
);

var BasemapAT_orthofoto = new L.tileLayer(
    'https://mapsneu.wien.gv.at/basemap/bmaporthofoto30cm/{type}/google3857/{z}/{y}/{x}.{format}',
    {
        maxZoom: 19,
        attribution: 'Map data: &copy; <a href="https://www.basemap.at">basemap.at</a>',
        type: 'normal',
        format: 'jpeg',
        bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
    }
);

var osmMapnik = new L.TileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: 'Map data and style: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
);

var TracestrackTopo = new L.tileLayer(
    'https://tile.tracestrack.com/topo__/{z}/{x}/{y}.png?key=226aa72cec112641bd0d3e1e6c808cd6',
    {
        maxZoom: 19,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org/">SRTM</a>, <a href="https://www.gebco.net">GEBCO</a>, <a href="https://sonny.4lima.de/">SONNY\'s LiDAR DTM</a>, <a href="https://portal.opentopography.org/datasetMetadata?otCollectionID=OT.032021.4326.2">NASADEM</a>, <a href="https://worldcover2021.esa.int">ESA WorldCover</a>, Map style: &copy; <a href="https://www.tracestrack.com/">Tracestrack</a>'
    }
);

var OpenTopoMap = new L.TileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        maxNativeZoom: 17,
        attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a>, Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    }
);

var Thunderforest_OpenCycleMap = new L.tileLayer(
    'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}',
    {
        maxZoom: 19,
        attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>',
        apikey: 'd7c01fc23a124d2abb45fee7d5c9113e'
    }
);

var CyclOSM = new L.tileLayer(
    'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a>'
    }
);

var Thunderforest_Transport = new L.tileLayer(
    'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}',
    {
        maxZoom: 19,
        attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>',
        apikey: 'd7c01fc23a124d2abb45fee7d5c9113e'
    }
);

var OPNVKarte = new L.tileLayer(
    'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        maxNativeZoom: 17,
        attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="https://memomaps.de/">MeMoMaps</a>'
    }
);

var OpenRailwayMap_standard = new L.tileLayer(
    'https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: 'Overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a>'
    }
);

var OpenRailwayMap_maxspeed = new L.tileLayer(
    'https://{s}.tiles.openrailwaymap.org/maxspeed/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: 'Overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a>'
    }
);

var WaymarkedTrails_hiking = new L.tileLayer(
    'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        maxNativeZoom: 18,
        attribution: 'Overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a>'
    }
);

var WaymarkedTrails_cycling = new L.tileLayer(
    'https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        maxNativeZoom: 18,
        attribution: 'Overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a>'
    }
);

var BasemapAT_overlay = new L.tileLayer(
    'https://mapsneu.wien.gv.at/basemap/bmapoverlay/{type}/google3857/{z}/{y}/{x}.{format}',
    {
        maxZoom: 19,
        attribution: 'Overlay data and style: &copy; <a href="https://www.basemap.at">basemap.at</a>',
        type: 'normal',
        format: 'png',
        bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
    }
);

var baseLayers = {
    "basemap.at (STANDARD)": BasemapAT_basemap,
    "basemap.at (HIDPI)": BasemapAT_highdpi,
    "basemap.at (Orthofoto)": BasemapAT_orthofoto,
    "OpenStreetMap": osmMapnik,
    "Tracestrack Topo": TracestrackTopo,
    "OpenTopoMap": OpenTopoMap,
    "OpenCycleMap": Thunderforest_OpenCycleMap,
    "CyclOSM": CyclOSM,
    "ÖPNVKarte": OPNVKarte,
    "Transport": Thunderforest_Transport
};

var overlayLayers = {
    "OpenRailwayMap (Infrastruktur)": OpenRailwayMap_standard,
    "OpenRailwayMap (Höchstgeschwindigkeit)": OpenRailwayMap_maxspeed,
    "Waymarked Trails (Wanderwege)": WaymarkedTrails_hiking,
    "Waymarked Trails (Radwege)": WaymarkedTrails_cycling,
    "basemap.at (OVERLAY)": BasemapAT_overlay
};

/*
 * Set path to default marker images.
 */
L.Icon.Default.imagePath = 'images/';

/*
 * Initialization of map.
 */
let map = L.map('map', {
    layers: [osmMapnik],
    maxBounds: [[90,-500], [-90,500]],
    worldCopyJump: true,
    fullscreenControl: true
});

/*
 * Remove Ukrainian flag from attribution to keep this politically neutral.
 */
map.attributionControl.setPrefix('<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>');

/*
 * Restore last position or fallback to world.
 */
if (!map.restoreView()) {
    map.fitBounds([[75,-160], [-45,160]]);
}

/*
 * History control that allows the user to go back in movement history.
 */
new L.HistoryControl({
    maxMovesToSave: 100
}).addTo(map);

/*
 * Layer selector with base and overlay layers.
 */
let layercontrol = L.control.layers(baseLayers, overlayLayers).addTo(map);

/*
 * A nice scale in the bottom left corner.
 */
L.control.scale().addTo(map);

/*
 * Locate control.
 */
L.control.locate({
    icon: 'fa fa-location-arrow',
    showPopup: false
}).addTo(map);

/*
 * Measure control with km as unit.
 */
new L.Control.Measure({
    position: 'topleft',
}).addTo(map);

/*
 * Initialize and configure geocoder.
 */
new L.Control.Geocoder({
        position: 'topleft',
        defaultMarkGeocode: false,
    })
    .on('markgeocode', function(e) {
        let result = e.geocode || result;

        map.fitBounds(result.bbox);

        let marker = createMarker(result.center, { title: result.name })
            .bindPopup(result.html || result.name)
            .addTo(this._map)
            .openPopup();
    })
    .addTo(map);

/*
 * Create universal marker with contextmenu.
 */
function createMarker(position, options = {}) {
    let marker = new L.Marker(position, {
        title: options.title,

        contextmenu: true,
        contextmenuInheritItems: false,
        contextmenuItems: [
            {
                text: 'Remove marker',
                callback: function (e) {
                    map.removeLayer(marker);
                }
            }
        ]
    });

    return marker;
}
