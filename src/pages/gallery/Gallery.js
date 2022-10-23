import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./gallery.css";
import data from "../../data";

export default function Gallery() {
  const location = useLocation();
  console.log(location);
  console.log(data.products);
  const [countryname, setCountryname] = useState(location.state.countryname);
  const [cityname, setCityname] = useState(location.state.cityname);
  return (
    <div >
      <div className="header">
        {cityname}, {countryname}{" "}
      </div>
      <div className="body">
        <div className="main">
          {data.products.map((product) => (
            <div key={product._id}>
              <img src={product.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
