import { useEffect, useState } from "react";
import { IpData } from "./Data/IpDataInterface";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./Components/SearchBar";
import GlobalStyle from "./GlobalStyle";
import { Helmet } from "react-helmet";
import L, { LatLngExpression, Icon } from "leaflet";

const customIcon = new L.divIcon({
  className: "custom-icon",
  html: '<img src="/icon-location.svg" alt="Custom Marker Icon" />',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

function App() {
  const [Ip, setIP] = useState("192.212.174.101");
  const [IpValue, setIpValue] = useState<IpData | null>(null);

  useEffect(() => {
    const fetchIpData = async () => {
      const response = await fetch(`http://ip-api.com/json/${Ip}`);
      const data = await response.json();
      setIpValue(data);
    };
    fetchIpData();
  }, []);
  const Handleinput = () => {
    if (Ip === "192.212.174.101") {
      setIP("");
    }
  };
  const handleClick = async () => {
    const response = await fetch(`http://ip-api.com/json/${Ip}`);
    const data = await response.json();
    setIpValue(data);
  };
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <SearchBar
        handleClick={handleClick}
        setIP={setIP}
        Ip={Ip}
        setIpValue={setIpValue}
        IpValue={IpValue}
        Handleinput={Handleinput}
      />
      {IpValue && (
        <MapContainer
          center={[IpValue.lat, IpValue.lon]}
          zoom={10}
          style={{ height: "100%", zIndex: 1 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[IpValue.lat, IpValue.lon]} icon={customIcon}>
            <Popup>
              <b>{IpValue.city}</b>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default App;
