import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function DashMap() {
  const [position, setPosition] = useState([
    25.256531625955443, 55.30238799490718,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (e) => {
        setPosition([e.coords.latitude, e.coords.longitude]);
      },
      (e) => {}
    );
  }, []);
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default DashMap;
