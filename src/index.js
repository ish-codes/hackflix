import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// in order to use routing logic within our app we have to import the web app router into our project
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		{/* in order to enable react router to control and manage all of our URLs within this SPA,  we have to wrap router around our application */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
