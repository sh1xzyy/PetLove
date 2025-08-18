import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import AppProviders from "./contexts/AppProviders";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppProviders>
        <BrowserRouter>
          <StrictMode>
            <App />
            <Toaster position="top-right" reverseOrder={false} />
          </StrictMode>
        </BrowserRouter>
      </AppProviders>
    </PersistGate>
  </Provider>,
);
