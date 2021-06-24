import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Where in the world?</h1>
      </div>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt=""/>
      </div>
      <div className="title">
        <h1>South Africa</h1>
      </div>
      <div className="content">
        <h3>Population: 123</h3>
        <h3>Region: Africa</h3>
        <h3>Capital: Gauteng</h3>
      </div>
    </div>
  )
}

export default App
