import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FiSearch } from "react-icons/fi";

const Coverage = () => {
  const warehouses = useLoaderData();
  const mapRaf = useRef(null);
  // console.log(warehouses)
  //   const position = [23.6850, 90.3563];
  const position = [23.765844, 90.358361];

  const handleSearch = (event) => {
    event.preventDefault();
    const location = event.target.location.value;

    const district = warehouses.find((warehouse) =>
      warehouse.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coordinate = [district.latitude, district.longitude];

      // Go to the location
      mapRaf.current.flyTo(coordinate, 14);
    }
  };
  return (
    <div>
      <h2 className="text-5xl font-extrabold my-10">
        We are available in 64 districts
      </h2>
      {/* Search  */}
      <div className="w-full max-w-lg mx-0 my-10">
        <form onSubmit={handleSearch} className="flex items-center relative">
          {/* Search Icon */}
          <FiSearch
            className="absolute left-4 text-gray-400 pointer-events-none"
            size={20}
          />

          {/* Input */}
          <input
            type="search"
            name="location"
            placeholder="Search"
            className="flex-grow pl-10 pr-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            aria-label="Search location"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-r-full hover:bg-primary-dark transition-colors"
          >
            Search
          </button>
        </form>
      </div>
      <h2 className="text-3xl font-extrabold my-10">
        We deliver almost all over Bangladesh
      </h2>
      {/* Service area  */}
      <div className="border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRaf}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warehouses.map((warehouse, index) => (
            <Marker
              key={index}
              position={[warehouse.latitude, warehouse.longitude]}
            >
              <Popup>
                <strong>{warehouse.district}</strong> <br /> Service area:{" "}
                {warehouse.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
