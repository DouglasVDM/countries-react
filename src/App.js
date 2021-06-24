import React from 'react';
import "./App.css";
import CountryList from "./CountryList"

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h2>Where in the world?</h2>
        <CountryList />
      </div>
    </div>
  )
}

export default App
