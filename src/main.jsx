import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ButtonContext from "./Contexts/ContactBtnContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ButtonContext>
      <App />
    </ButtonContext>
  </BrowserRouter>
);
