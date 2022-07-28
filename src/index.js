import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/css/bootstrap/bootstrap.css";
import "../src/assets/css/jquery-ui.css";
import "../src/assets/css/owl.carousel.min.css";
import "../src/assets/css/owl.theme.default.min.css";
import "../src/assets/css/jquery.fancybox.min.css";
import "../src/assets/css/bootstrap-datepicker.css";
// import "../src/assets/css/aos.css";
import "../src/assets/css/style.css";
import "../src/assets/fonts/flaticon/font/flaticon.css";
// import "../src/assets/js/aos.js";
// import "../src/assets/js/jquery-ui";
// import "../src/assets/js/jquery.easing.1.3.js";
// import "../src/assets/js/jquery.sticky";
// import "../src/assets/js/main.js";
// import "../src/assets/js/typed.js";
import "../src/assets/scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
