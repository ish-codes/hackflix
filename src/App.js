import "./App.css";
import Header from "./Header";

// import two pieces from the router library which will allow us to configure our routes within this app
import { Route, Routes } from "react-router-dom";
import MovieCatalogue from "./MovieCatalogue";
import MovieInfo from "./MovieInfo";

function App() {
	return (
		<div className="wrapper">
			{/* this app will have 3 components
      a header
      this header will be visible at every path because it is outside of the <Routes> configuration
       */}
			<Header />

			{/* now we can define our routing config [this is often done within the App component] */}

			{/* Step #1: use the Routes component to act as a parent container to all of the subsequently defined Routes AKA defined URL paths */}
			{/* You will typically only need this component once. */}
			<Routes>
				{/*Step #2: Define the individual routes / URL paths which are available within your app as well as the components which are visible at those paths */}

				{/* here is where you will define which component is visible at what path */}
				<Route path="/" element={<MovieCatalogue />} />
				{/* the movie info component should be shown when the route looks like "/movieId" */}
				<Route path="/:movieId" element={<MovieInfo />} />
			</Routes>

			{/*  a movie catalogue */}

			{/* a movie details component which is rendered when the user selects a movie */}
		</div>
	);
}

export default App;
