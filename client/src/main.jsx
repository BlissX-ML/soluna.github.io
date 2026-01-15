import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/reducer/store.js";

import "./_utils/browser/pdfjs-definition.js";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>,
);

// import { Provider } from 'react-redux'
// import store from './components/HomePage/Caroudel-noSlick/store'

// <Provider store={store}>
//   <StrictMode>
// {/* </StrictMode>
//   </Provider> */}
