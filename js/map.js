/*
 * Define layers
 */
var BasemapAT_basemap = L.tileLayer(
  'https://mapsneu.wien.gv.at/basemap/geolandbasemap/{type}/google3857/{z}/{y}/{x}.{format}',
  {
    maxZoom: 19,
    attribution: 'Map data and style: &copy; <a href="https://www.basemap.at">basemap.at</a>',
    type: 'normal',
    format: 'png',
    bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
  }
);

var BasemapAT_highdpi = L.tileLayer(
  'https://mapsneu.wien.gv.at/basemap/bmaphidpi/{type}/google3857/{z}/{y}/{x}.{format}',
  {
    maxZoom: 19,
    attribution: 'Map data and style: &copy; <a href="https://www.basemap.at">basemap.at</a>',
    type: 'normal',
    format: 'jpeg',
    bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
  }
);

var BasemapAT_orthofoto = L.tileLayer(
  'https://mapsneu.wien.gv.at/basemap/bmaporthofoto30cm/{type}/google3857/{z}/{y}/{x}.{format}',
  {
    maxZoom: 19,
    attribution: 'Map data: &copy; <a href="https://www.basemap.at">basemap.at</a>',
    type: 'normal',
    format: 'jpeg',
    bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
  }
);

var MapTiler_satellite = L.tileLayer(
  'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=8HeDqL7QC28I7sdEf4ev',
  {
    maxZoom: 19,
    attribution: 'Map data: &copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
  }
);

var osmMapnik = new L.TileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: 'Map data and style: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
);

var TracestrackTopo = L.tileLayer(
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

var ThunderforestOpenCycleMap = L.tileLayer(
  'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=d7c01fc23a124d2abb45fee7d5c9113e',
  {
    maxZoom: 19,
    attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>'
  }
);

var CyclOSM = L.tileLayer(
  'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a>'
  }
);

var ThunderforestTransport = L.tileLayer(
  'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=d7c01fc23a124d2abb45fee7d5c9113e',
  {
    maxZoom: 19,
    attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>'
  }
);

var OPNVKarte = L.tileLayer(
  'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    maxNativeZoom: 17,
    attribution: 'Map data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Map style: &copy; <a href="https://memomaps.de/">MeMoMaps</a>'
  }
);

var ThunderforestTransport_overlay = L.tileLayer(
  'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=d7c01fc23a124d2abb45fee7d5c9113e',
  {
    maxZoom: 19,
    opacity: 0.4,
    attribution: 'Transport overlay data: &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>'
  }
);

var OpenRailwayMap_standard = L.tileLayer(
  'https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: 'OpenRailwayMap overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a>'
  }
);

var OpenRailwayMap_maxspeed = L.tileLayer(
  'https://{s}.tiles.openrailwaymap.org/maxspeed/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: 'OpenRailwayMap overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a>'
  }
);

var WaymarkedTrails_hiking = L.tileLayer(
  'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    maxNativeZoom: 18,
    attribution: 'Waymarked Trails overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a>'
  }
);

var WaymarkedTrails_cycling = L.tileLayer(
  'https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    maxNativeZoom: 18,
    attribution: 'Waymarked Trails overlay data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Overlay style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a>'
  }
);

var BasemapAT_overlay = L.tileLayer(
  'https://mapsneu.wien.gv.at/basemap/bmapoverlay/{type}/google3857/{z}/{y}/{x}.{format}',
  {
    maxZoom: 19,
    attribution: 'basemap.at overlay data and style: &copy; <a href="https://www.basemap.at">basemap.at</a>',
    type: 'normal',
    format: 'png',
    bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
  }
);

var oev_gueteklassen_wmts = new L.TileLayer.WMTS(
  'http://85.215.167.19:8081/geoserver/klimabonus/gwc/service/wmts?',
  {
    version: '1.1.1',
    layer: 'oev_gueteklassen_polygone_20231031',
    style: 'klimabonus:gueteklasse',
    tilematrixset: 'EPSG:900913',
    format: 'image/png',
    opacity: 0.6,
    attribution: 'ÖV-Güteklassen overlay data: &copy; <a href="https://www.mobilitydata.gv.at/daten/%C3%B6v-g%C3%BCteklassen">AustriaTech</a>'
  }
);

var oev_gueteklassen_wms = L.tileLayer.wms(
  'http://85.215.167.19:8081/geoserver/klimabonus/ows?',
  {
    layers: 'oev_gueteklassen_polygone_20231031',
    styles: 'klimabonus:gueteklasse',
    format: 'image/png',
    transparent: 'true',
    opacity: 0.6,
    attribution: 'Overlay data: &copy; <a href="https://www.mobilitydata.gv.at/daten/%C3%B6v-g%C3%BCteklassen">AustriaTech</a>'
  }
);

var baseLayers = {
  "basemap.at (STANDARD)": BasemapAT_basemap,
  "basemap.at (HIDPI)": BasemapAT_highdpi,
  "basemap.at (Orthofoto)": BasemapAT_orthofoto,
  "MapTiler (Satellite)": MapTiler_satellite,
  "OpenStreetMap": osmMapnik,
  "Tracestrack Topo": TracestrackTopo,
  "OpenTopoMap": OpenTopoMap,
  "OpenCycleMap": ThunderforestOpenCycleMap,
  "CyclOSM": CyclOSM,
  "ÖPNVKarte": OPNVKarte,
  "Transport": ThunderforestTransport
};

var overlayLayers = {
  "Transport (Overlay)": ThunderforestTransport_overlay,
  "OpenRailwayMap (Infrastruktur)": OpenRailwayMap_standard,
  "OpenRailwayMap (Höchstgeschwindigkeit)": OpenRailwayMap_maxspeed,
  "Waymarked Trails (Wanderwege)": WaymarkedTrails_hiking,
  "Waymarked Trails (Radwege)": WaymarkedTrails_cycling,
  "basemap.at (OVERLAY)": BasemapAT_overlay,
  "ÖV-Güteklassen (31.10.2023)": oev_gueteklassen_wmts
};

/*
 * Initialise the map
 */
let map = L.map('map', {
  layers: [osmMapnik],
  worldCopyJump: true,
  fullscreenControl: true
});

if (!map.restoreView()) {
  map.fitBounds([[46.35877, 8.782379], [49.037872, 17.189532]]);
}

/*
 * Add controls
 */
new L.HistoryControl().addTo(map);

L.control.layers(baseLayers, overlayLayers).addTo(map);

L.control.scale().addTo(map);

L.control.locate().addTo(map);

new L.Control.Measure().addTo(map);

new L.Control.Geocoder({
  position: 'topleft'
}).addTo(map);

/*
 * Events
 */
map.on('baselayerchange', function (e) {
  var logoDiv = document.getElementById('MapTilerLogo');
  if (e.name === 'MapTiler (Satellite)') {
    logoDiv.removeAttribute('hidden');
  } else {
    logoDiv.setAttribute('hidden', '');
  }
});
