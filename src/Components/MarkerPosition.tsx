import { useEffect, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";
import { IpData } from "../Data/IpDataInterface";
import customIcon from "../../public/icon-location.svg";

export default function MarkerPosition({
  IpValue,
}: {
  IpValue: IpData | null;
}) {
  const position: LatLngTuple = useMemo(() => {
    return [IpValue?.location.lat ?? 0, IpValue?.location.lng ?? 0];
  }, [IpValue?.location.lat, IpValue?.location.lng]);

  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker
        icon={L.icon({
          iconUrl: customIcon,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        })}
        position={position}
      >
        <Popup>This is the location of the IP Address</Popup>
      </Marker>
    </>
  );
}
