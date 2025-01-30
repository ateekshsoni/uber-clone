import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setPickupSuggestions,
  setDestinationSuggestions,
  setVehiclePanel,
  setOpenPanel,
  setPickupLocation,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickupLocation(suggestion);
    } else {
      setDestination(suggestion);
    }
    // setOpenPanel(false);
    // setVehiclePanel(true);
  };

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="h-8 w-8 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;