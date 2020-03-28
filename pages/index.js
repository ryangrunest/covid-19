import React, { useState } from "react";
import { countries } from "../countries.js";
import { apiKey } from "../apikey";
import fetch from "isomorphic-unfetch";

const Index = props => {
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  async function handleChange(event) {
    let data = await getCountryData(event.target.value);
    data = data[0];
    setSelectedCountry(data.country);
    setConfirmed(data.confirmed);
    setRecovered(data.recovered);
    setDeaths(data.deaths);
  }

  async function getCountryData(country) {
    return fetch(
      `https://covid-19-data.p.rapidapi.com/country?name=${country}`,
      {
        method: "GET",
        headers: { "X-RapidAPI-Key": apiKey }
      }
    ).then(res => res.json());
  }

  return (
    <div>
      <select
        onChange={handleChange}
        name="countries"
        className="countries-dropdown"
      >
        {countries.map(country => {
          return (
            <option key={country} value={country}>
              {country}
            </option>
          );
        })}
      </select>

      <p>{apiKey}</p>
      <p>{selectedCountry}</p>
      <p>{confirmed}</p>
      <p>{recovered}</p>
      <p>{deaths}</p>
    </div>
  );
};

export default Index;
