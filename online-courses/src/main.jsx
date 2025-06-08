import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import "./styles/bootstrap.min.css";
import "./styles/bootstrap-icons.css";
import "./styles/templatemo-topic-listing.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
