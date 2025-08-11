import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import AppProviders from "./contexts/AppProviders";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppProviders>
      <BrowserRouter>
        <StrictMode>
          <App />
          <Toaster position="top-right" reverseOrder={false} />
        </StrictMode>
      </BrowserRouter>
    </AppProviders>
  </Provider>,
);
