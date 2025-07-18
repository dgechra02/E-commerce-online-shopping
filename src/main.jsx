import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartContextProvider from "./Contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);