import React from "react";

function LocationSetter(props) {
  const handleClick = () => {
    props.setLocation(true);
  };
  return (
    <div className="location-setter">
      <img
        className="sm-icon"
        src={require(`../icons/compass.svg`)}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
}

export default LocationSetter;
