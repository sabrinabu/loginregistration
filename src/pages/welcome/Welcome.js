import React, { useState } from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

export default function Welcom() {
  const navigate = useNavigate();
  const [countryname, setCountryname] = useState(null);
  const [cityname, setCityname] = useState(null);

  const handleclick = (e) => {
    setCountryname(e.target.value);
  };

  const handlecity = (e) => {
    setCityname(e.target.value);
  };

  return (
    <div className="start">
      <p>Please enter your Country and City name</p>
      <input
        type="text"
        className="startInput"
        placeholder="country"
        onChange={handleclick}
      />
      <input
        type="text"
        className="startInput"
        placeholder="city"
        onChange={handlecity}
      />
      <button
        className="startButton"
        onClick={() => {
          navigate("/gallery", { state: { countryname, cityname } });
        }}
      >
        Start
      </button>
    </div>
  );
}
