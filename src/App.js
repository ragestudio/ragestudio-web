import React from "react"
import * as Icons from "react-icons/si"

import links from "./links.json"
import "./App.css"

function App() {
  const renderLinks = () => {
    return links.map((link) => {
      return <div className="item">
        <a href={link.url}>
          {link.icon ? React.createElement(Icons[link.icon]) : null}
          {link.label}
        </a>
      </div>
    })
  }

  return <div className="app">
    <img src={"/logo.svg"} className="logo" alt="logo" />

    <div className="mainTextCenter">
      <h1>Developing new ways</h1>
    </div>

    <div className="footer">
      {renderLinks()}
    </div>
  </div>
}

export default App
