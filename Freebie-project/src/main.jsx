import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
