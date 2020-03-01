import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Maps = data => {
  const { pageinfo } = data;
  const mapsCoordinates = data.data.split(", ").reverse();
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiaXJvY2hrYXoiLCJhIjoiY2s3M2tlMnFwMDJ1ZjNucDkxaGsxOHRkdyJ9.15lc19y8loiW30Aw52IvYA"
  });
  const mapStyle = {
    dark: "mapbox://styles/mapbox/streets-v11"
  };
  return (
    <>
      <h3>{pageinfo.map}</h3>
      <Map
        style={mapStyle.dark}
        containerStyle={{
          height: "50vh",
          width: "50vw"
        }}
        zoom={[12]}
        center={mapsCoordinates}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={mapsCoordinates} />
        </Layer>
      </Map>
    </>
  );
};

export default Maps;
