import React, { useState } from "react";
import Map, {
  Marker,
  useMap,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { CiLocationOn } from "react-icons/ci";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import { changeMarkLocation } from "@/store/features/markSlice";
import { changeLocation } from "@/store/features/mapSlice";

export default function MapCom() {
  const markLocation = useAppSelector((state) => state.mark);
  const viewState = useAppSelector((state) => state.map);
  const dispatch = useAppDispatch();

  const handleOnDragEnd = (e: MarkerDragEvent) => {
    dispatch(
      changeMarkLocation({
        longitude: e.lngLat.lng,
        latitude: e.lngLat.lat,
      })
    );
  };

  const handleOnclick = (event: any) => {
    dispatch(
      changeLocation({
        longitude: 100.495821,
        latitude: 13.762663,
        zoom: 14,
      })
    );
  };

  return (
    <div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX!}
        {...viewState}
        onMove={(evt) => dispatch(changeLocation(evt.viewState))}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={markLocation.longitude || 100.495821}
          latitude={markLocation.latitude || 13.762663}
          anchor="bottom"
          draggable
          onDragEnd={(event) => handleOnDragEnd(event)}
        >
          <CiLocationOn className="w-10 h-10 text-red-800" />
        </Marker>
        <NavigationControl position="bottom-right" />
        <button
          className="btn btn-primary absolute bottom-1"
          onClick={handleOnclick}
        >
          clickhere
        </button>
      </Map>
    </div>
  );
}
