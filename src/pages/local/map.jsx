"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Custom marker with your color
const customIcon = L.icon({
  iconUrl: "/img/svg/logogram[1].svg", // relative to public folder
  iconSize: [40, 40], // change size if needed
  iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // where the popup opens relative to iconAnchor
});

export default function MapComponent() {
  const markers = [
    { id: 1, position: [-33.8688, 151.2093], name: "Sydney", color: "#ff5733" }, 
    { id: 2, position: [-37.8136, 144.9631], name: "Melbourne", color: "#3498db" },
    { id: 3, position: [-27.4698, 153.0251], name: "Brisbane", color: "#2ecc71" },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-33.8688, 151.2093]} // Sydney by default
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={customIcon}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
