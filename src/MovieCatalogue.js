// 1. import the axios library
import axios from "axios";
// 2. import the useState hook
// remember we use curly brace to import because these are named exports, not default exports
import { useState, useEffect } from "react";

// in order to recreate the behaviour of an achor with the added benefit/logic of React router, we can use the Link component - a named export from react router
import { Link } from "react-router-dom";

function MovieCatalogue() {
	// 3. initialize state to keep track of the movie data which will be returned from the API
	// we want the initial state to match the type of what data we are ending up with later
	// e.g. if this was set to an object, the map method in the return below would freak out and refuse to run
	const [movies, setMovies] = useState([]);

	// 4. initialize a use effect to run the side effects of fetching data from the movie API [this side effect is running a single time on page load] // an asynchronous request is a side effect within a component
	useEffect(() => {
		// 5. make an asynchronous request to the TMDB API using axios
		axios({
			url: "https://api.themoviedb.org/3/discover/movie",
			params: {
				api_key: "061a2df42ab9dd3cd503affbe69587da",
				include_adult: false,
			},
		}).then((movies) => {
			// 6. save the returned data within state
			// API key - 061a2df42ab9dd3cd503affbe69587da
			setMovies(movies.data.results);
		});
	}, []);

	return (
		<section>
			<h2>Here are your viewing options!</h2>
			<ul className="catalogue">
				{
					// 7. map through state and return a movie for each movie present in the returned API data
					movies.map((movie) => {
						return (
							// we want to make the posters clickable and navigate to a unique URL to represent each specific movie
							<Link
								to={`/${movie.id}`}
								key={movie.id}
							>
								<li>
									{
										//why not just wrap everything in an anchor tag?
										// NO! that will refresh the whole page :( we want to avoid that
									}
									<img
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										alt={`Poster for ${movie.original_title}`}
									/>
								</li>
							</Link>
						);
					})
				}
			</ul>
		</section>
	);
}

export default MovieCatalogue;
