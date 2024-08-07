import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import Tailwind from "primereact/passthrough/tailwind";
import { Provider } from "react-redux";
import store from "/src/services/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrowserRouter>
    <PrimeReactProvider value={{ pt: Tailwind }}>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
