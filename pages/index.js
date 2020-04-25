import React, { useState } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>Covid-19 Tracker</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="app.css"></link>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/7fde712a5d.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main className="Index">
        <div className="container colored">
          <div className="row">
            <div className="col text-center py-4">
              <h2>Covid-19 Tracker</h2>
              <h4>
                Using the{" "}
                <a href="https://rapidapi.com/Gramzivi/api/covid-19-data">
                  Covid-19 API
                </a>{" "}
                from RapidAPI
              </h4>
              <p>
                Use the dropdown below to select a country. The data will
                display below.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="dropdown-container">
                <div className="search-countries">
                  <div className="select">
                    <select
                      onChange={handleChange}
                      name="countries"
                      className="dropdown"
                    >
                      {countries.map(country => {
                        return (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        );
                      })}
                    </select>
                    <i aria-hidden className="fas fa-chevron-down fa-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="jumbotron text-center">
                <h1 className="display-4">{selectedCountry}</h1>
                <hr className="my-4" />
                <p className="lead">Confirmed Cases: {confirmed}</p>
                <p className="lead">Recovered: {recovered}</p>
                <p className="lead">Deaths: {deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
