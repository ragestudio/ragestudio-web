import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Helmet } from "react-helmet"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RageStudio</title>
      <meta
        name="description"
        content="Official RageStudio webpage."
      />
    </Helmet>
    <App />
  </React.StrictMode>
)
