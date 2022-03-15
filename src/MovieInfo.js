// Import axios so that we can make some asynchronous requests
import axios from "axios";
// Import use effect/use state to store
import { useState, useEffect } from "react";

// we want to use the movie ID which is currently in the URL [at which this component renders] within our axios call
// in order to grab info from a URL (when using Router), we can use useParams hook
// pop quiz: what's a hook? it's just a function:)

import { useParams } from "react-router-dom";

function MovieInfo() {
	// let's call the useParams hook and see what it returns
	// use params lets you use the parameters that have been passed in through the route
	// i.e. <Route path="/:movieId" element={ <MovieInfo /> } />

	// so at this point we could just destructure out anything we need from what useParams returns, and plug that as a variable into our axios url
	const { movieId: movie_id } = useParams();

	// initialize state to represent the movie details which will be returned to us from the API
	const [movieDetails, setMovieDetails] = useState({});

	// define a side effect which will fetch data about the movie after the component has first rendered
	useEffect(() => {
		// use axios to make a request to the movie ID endpoint
		axios({
			url: `https://api.themoviedb.org/3/movie/${movie_id}`,
			params: {
				api_key: "061a2df42ab9dd3cd503affbe69587da",
			},
		}).then((movie) => {
			setMovieDetails(movie.data);
		});
	}, [movie_id]);

	return (
		<section className="poster">
			<div className="description">
				{/* render the movie tagline, summary, and title */}
				<h3>{movieDetails.tagline}</h3>
				<h2>{movieDetails.title}</h2>
				<p>{movieDetails.overview}</p>
			</div>
			<div className="poster-image">
				{movieDetails.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
						alt={`A poster of ${movieDetails.original_title}`}
					/>
				) : null}
			</div>
		</section>
	);
}

export default MovieInfo;
