import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
const $ = document.querySelector.bind(document);

const root = ReactDOM.createRoot($("#root"));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
