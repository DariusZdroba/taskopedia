import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "black", color: "grey" }}
    >
      <Header />
      <div className="px-4 flex-grow-1">
        <MainBody />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
